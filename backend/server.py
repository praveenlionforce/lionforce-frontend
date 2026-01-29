from fastapi import FastAPI, APIRouter, HTTPException, Depends, UploadFile, File, Form
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import secrets
import shutil
import base64
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional, Any
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
UPLOAD_DIR = ROOT_DIR / "uploads"
UPLOAD_DIR.mkdir(exist_ok=True)

load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactForm(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: Optional[str] = None
    message: Optional[str] = None
    service: Optional[str] = None
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactFormCreate(BaseModel):
    name: str
    email: EmailStr
    subject: Optional[str] = None
    message: Optional[str] = None
    service: Optional[str] = None

class Newsletter(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class NewsletterCreate(BaseModel):
    email: EmailStr

# Chatbot Lead Model
class ChatbotLead(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: Optional[str] = None
    designation: Optional[str] = None
    message: Optional[str] = None
    source: str = "chatbot"
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ChatbotLeadCreate(BaseModel):
    name: str
    email: str
    company: Optional[str] = None
    designation: Optional[str] = None
    message: Optional[str] = None

# Live Chat Models
class ChatMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    session_id: str
    sender: str  # 'user', 'bot', 'agent'
    text: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ChatSession(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    visitor_name: Optional[str] = None
    visitor_email: Optional[str] = None
    visitor_company: Optional[str] = None
    status: str = "bot"  # 'bot', 'agent', 'closed'
    agent_id: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    last_message: Optional[str] = None
    unread_count: int = 0

class AgentStatus(BaseModel):
    agent_id: str = "default"
    is_online: bool = False
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Content Block Model for Admin CMS
class ContentBlock(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    page: str  # e.g., 'home', 'about', 'services'
    section: str  # e.g., 'hero', 'services', 'testimonials'
    title: Optional[str] = None
    subtitle: Optional[str] = None
    content: Optional[str] = None
    image_url: Optional[str] = None
    button_text: Optional[str] = None
    button_link: Optional[str] = None
    order: int = 0
    is_active: bool = True
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContentBlockCreate(BaseModel):
    page: str
    section: str
    title: Optional[str] = None
    subtitle: Optional[str] = None
    content: Optional[str] = None
    image_url: Optional[str] = None
    button_text: Optional[str] = None
    button_link: Optional[str] = None
    order: int = 0
    is_active: bool = True

class ContentBlockUpdate(BaseModel):
    title: Optional[str] = None
    subtitle: Optional[str] = None
    content: Optional[str] = None
    image_url: Optional[str] = None
    button_text: Optional[str] = None
    button_link: Optional[str] = None
    order: Optional[int] = None
    is_active: Optional[bool] = None

# Basic Auth for Admin
security = HTTPBasic()

# Admin credentials (in production, use environment variables)
ADMIN_USERNAME = os.environ.get('ADMIN_USERNAME', 'admin')
ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', 'lionforce2024')

def verify_admin(credentials: HTTPBasicCredentials = Depends(security)):
    correct_username = secrets.compare_digest(credentials.username, ADMIN_USERNAME)
    correct_password = secrets.compare_digest(credentials.password, ADMIN_PASSWORD)
    if not (correct_username and correct_password):
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials",
            headers={"WWW-Authenticate": "Basic"},
        )
    return credentials.username

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Lionforce API - Empowering Minds, Transforming Solutions"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/contact", response_model=ContactForm)
async def submit_contact_form(input: ContactFormCreate):
    try:
        contact_dict = input.model_dump()
        contact_obj = ContactForm(**contact_dict)
        
        doc = contact_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        await db.contact_forms.insert_one(doc)
        return contact_obj
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to submit contact form: {str(e)}")

@api_router.get("/contacts", response_model=List[ContactForm])
async def get_all_contacts():
    contacts = await db.contact_forms.find({}, {"_id": 0}).to_list(1000)
    
    for contact in contacts:
        if isinstance(contact['timestamp'], str):
            contact['timestamp'] = datetime.fromisoformat(contact['timestamp'])
    
    return contacts

@api_router.post("/newsletter", response_model=Newsletter)
async def subscribe_newsletter(input: NewsletterCreate):
    try:
        # Check if email already exists
        existing = await db.newsletter.find_one({"email": input.email}, {"_id": 0})
        if existing:
            raise HTTPException(status_code=400, detail="Email already subscribed")
        
        newsletter_dict = input.model_dump()
        newsletter_obj = Newsletter(**newsletter_dict)
        
        doc = newsletter_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        await db.newsletter.insert_one(doc)
        return newsletter_obj
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to subscribe: {str(e)}")

@api_router.post("/chatbot-lead", response_model=ChatbotLead)
async def save_chatbot_lead(input: ChatbotLeadCreate):
    try:
        lead_dict = input.model_dump()
        lead_obj = ChatbotLead(**lead_dict)
        
        doc = lead_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        await db.chatbot_leads.insert_one(doc)
        return lead_obj
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to save lead: {str(e)}")

# ==================== LIVE CHAT SYSTEM ====================

# Get or Create Chat Session
@api_router.post("/chat/session")
async def get_or_create_session(session_id: Optional[str] = None):
    try:
        if session_id:
            session = await db.chat_sessions.find_one({"id": session_id}, {"_id": 0})
            if session:
                return session
        
        # Create new session
        new_session = ChatSession()
        doc = new_session.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        doc['updated_at'] = doc['updated_at'].isoformat()
        await db.chat_sessions.insert_one(doc)
        return new_session.model_dump()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create session: {str(e)}")

# Send message (from visitor)
@api_router.post("/chat/message")
async def send_chat_message(session_id: str, text: str, sender: str = "user"):
    try:
        message = ChatMessage(session_id=session_id, sender=sender, text=text)
        doc = message.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        await db.chat_messages.insert_one(doc)
        
        # Update session
        await db.chat_sessions.update_one(
            {"id": session_id},
            {"$set": {
                "last_message": text[:100],
                "updated_at": datetime.now(timezone.utc).isoformat()
            }, "$inc": {"unread_count": 1 if sender == "user" else 0}}
        )
        return message.model_dump()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send message: {str(e)}")

# Get messages for a session
@api_router.get("/chat/messages/{session_id}")
async def get_chat_messages(session_id: str, after: Optional[str] = None):
    try:
        query = {"session_id": session_id}
        if after:
            query["timestamp"] = {"$gt": after}
        
        messages = await db.chat_messages.find(query, {"_id": 0}).sort("timestamp", 1).to_list(500)
        return messages
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get messages: {str(e)}")

# Get session status (for visitor to check if agent is handling)
@api_router.get("/chat/session/{session_id}")
async def get_session_status(session_id: str):
    session = await db.chat_sessions.find_one({"id": session_id}, {"_id": 0})
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
    return session

# Update visitor info in session
@api_router.put("/chat/session/{session_id}/visitor")
async def update_visitor_info(session_id: str, name: Optional[str] = None, email: Optional[str] = None, company: Optional[str] = None):
    try:
        update_data = {"updated_at": datetime.now(timezone.utc).isoformat()}
        if name:
            update_data["visitor_name"] = name
        if email:
            update_data["visitor_email"] = email
        if company:
            update_data["visitor_company"] = company
        
        await db.chat_sessions.update_one({"id": session_id}, {"$set": update_data})
        return {"message": "Visitor info updated"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update visitor: {str(e)}")

# Get agent online status (public)
@api_router.get("/chat/agent-status")
async def get_public_agent_status():
    status = await db.agent_status.find_one({"agent_id": "default"}, {"_id": 0})
    if status:
        return {"is_online": status.get("is_online", False)}
    return {"is_online": False}

# ==================== ADMIN LIVE CHAT ENDPOINTS ====================

# Get all active chat sessions
@api_router.get("/admin/live-chats")
async def get_live_chats(username: str = Depends(verify_admin)):
    sessions = await db.chat_sessions.find({"status": {"$ne": "closed"}}, {"_id": 0}).sort("updated_at", -1).to_list(100)
    return sessions

# Get chat history for a session
@api_router.get("/admin/live-chats/{session_id}/messages")
async def get_admin_chat_messages(session_id: str, username: str = Depends(verify_admin)):
    messages = await db.chat_messages.find({"session_id": session_id}, {"_id": 0}).sort("timestamp", 1).to_list(500)
    # Mark as read
    await db.chat_sessions.update_one({"id": session_id}, {"$set": {"unread_count": 0}})
    return messages

# Agent sends reply
@api_router.post("/admin/live-chats/{session_id}/reply")
async def agent_reply(session_id: str, text: str, username: str = Depends(verify_admin)):
    try:
        message = ChatMessage(session_id=session_id, sender="agent", text=text)
        doc = message.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        await db.chat_messages.insert_one(doc)
        
        # Update session
        await db.chat_sessions.update_one(
            {"id": session_id},
            {"$set": {
                "last_message": f"Agent: {text[:80]}",
                "updated_at": datetime.now(timezone.utc).isoformat(),
                "status": "agent"
            }}
        )
        return message.model_dump()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send reply: {str(e)}")

# Agent takes over conversation
@api_router.post("/admin/live-chats/{session_id}/takeover")
async def agent_takeover(session_id: str, username: str = Depends(verify_admin)):
    await db.chat_sessions.update_one(
        {"id": session_id},
        {"$set": {"status": "agent", "agent_id": username, "updated_at": datetime.now(timezone.utc).isoformat()}}
    )
    return {"message": "Takeover successful", "status": "agent"}

# Transfer back to bot
@api_router.post("/admin/live-chats/{session_id}/transfer-to-bot")
async def transfer_to_bot(session_id: str, username: str = Depends(verify_admin)):
    await db.chat_sessions.update_one(
        {"id": session_id},
        {"$set": {"status": "bot", "agent_id": None, "updated_at": datetime.now(timezone.utc).isoformat()}}
    )
    return {"message": "Transferred to bot", "status": "bot"}

# Close conversation
@api_router.post("/admin/live-chats/{session_id}/close")
async def close_chat(session_id: str, username: str = Depends(verify_admin)):
    await db.chat_sessions.update_one(
        {"id": session_id},
        {"$set": {"status": "closed", "updated_at": datetime.now(timezone.utc).isoformat()}}
    )
    return {"message": "Chat closed"}

# Get/Set agent status
@api_router.get("/admin/agent-status")
async def get_agent_status(username: str = Depends(verify_admin)):
    status = await db.agent_status.find_one({"agent_id": "default"}, {"_id": 0})
    if status:
        return status
    return {"agent_id": "default", "is_online": False}

@api_router.post("/admin/agent-status")
async def set_agent_status(is_online: bool, username: str = Depends(verify_admin)):
    await db.agent_status.update_one(
        {"agent_id": "default"},
        {"$set": {"agent_id": "default", "is_online": is_online, "updated_at": datetime.now(timezone.utc).isoformat()}},
        upsert=True
    )
    return {"agent_id": "default", "is_online": is_online}

# Admin Authentication Endpoint
@api_router.post("/admin/login")
async def admin_login(username: str = Depends(verify_admin)):
    return {"message": "Login successful", "username": username}

# Admin - Content Blocks CRUD
@api_router.get("/admin/content", response_model=List[ContentBlock])
async def get_all_content(username: str = Depends(verify_admin)):
    content_blocks = await db.content_blocks.find({}, {"_id": 0}).to_list(1000)
    for block in content_blocks:
        if isinstance(block.get('updated_at'), str):
            block['updated_at'] = datetime.fromisoformat(block['updated_at'])
    return content_blocks

@api_router.get("/admin/content/{page}", response_model=List[ContentBlock])
async def get_page_content(page: str, username: str = Depends(verify_admin)):
    content_blocks = await db.content_blocks.find({"page": page}, {"_id": 0}).to_list(1000)
    for block in content_blocks:
        if isinstance(block.get('updated_at'), str):
            block['updated_at'] = datetime.fromisoformat(block['updated_at'])
    return sorted(content_blocks, key=lambda x: x.get('order', 0))

@api_router.post("/admin/content", response_model=ContentBlock)
async def create_content_block(input: ContentBlockCreate, username: str = Depends(verify_admin)):
    try:
        content_dict = input.model_dump()
        content_obj = ContentBlock(**content_dict)
        
        doc = content_obj.model_dump()
        doc['updated_at'] = doc['updated_at'].isoformat()
        
        await db.content_blocks.insert_one(doc)
        return content_obj
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create content block: {str(e)}")

@api_router.put("/admin/content/{block_id}", response_model=ContentBlock)
async def update_content_block(block_id: str, input: ContentBlockUpdate, username: str = Depends(verify_admin)):
    try:
        update_data = {k: v for k, v in input.model_dump().items() if v is not None}
        update_data['updated_at'] = datetime.now(timezone.utc).isoformat()
        
        result = await db.content_blocks.update_one(
            {"id": block_id},
            {"$set": update_data}
        )
        
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Content block not found")
        
        updated_block = await db.content_blocks.find_one({"id": block_id}, {"_id": 0})
        if isinstance(updated_block.get('updated_at'), str):
            updated_block['updated_at'] = datetime.fromisoformat(updated_block['updated_at'])
        return updated_block
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update content block: {str(e)}")

@api_router.delete("/admin/content/{block_id}")
async def delete_content_block(block_id: str, username: str = Depends(verify_admin)):
    try:
        result = await db.content_blocks.delete_one({"id": block_id})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Content block not found")
        return {"message": "Content block deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete content block: {str(e)}")

# Admin - Get Contact Form Submissions (already exists as /contacts, but adding admin protected version)
@api_router.get("/admin/submissions", response_model=List[ContactForm])
async def get_admin_submissions(username: str = Depends(verify_admin)):
    contacts = await db.contact_forms.find({}, {"_id": 0}).to_list(1000)
    for contact in contacts:
        if isinstance(contact['timestamp'], str):
            contact['timestamp'] = datetime.fromisoformat(contact['timestamp'])
    return sorted(contacts, key=lambda x: x.get('timestamp', datetime.min), reverse=True)

# Admin - Get Newsletter Subscribers
@api_router.get("/admin/subscribers", response_model=List[Newsletter])
async def get_admin_subscribers(username: str = Depends(verify_admin)):
    subscribers = await db.newsletter.find({}, {"_id": 0}).to_list(1000)
    for sub in subscribers:
        if isinstance(sub['timestamp'], str):
            sub['timestamp'] = datetime.fromisoformat(sub['timestamp'])
    return sorted(subscribers, key=lambda x: x.get('timestamp', datetime.min), reverse=True)

# Admin - Get Chatbot Leads
@api_router.get("/admin/chatbot-leads", response_model=List[ChatbotLead])
async def get_chatbot_leads(username: str = Depends(verify_admin)):
    leads = await db.chatbot_leads.find({}, {"_id": 0}).to_list(1000)
    for lead in leads:
        if isinstance(lead.get('timestamp'), str):
            lead['timestamp'] = datetime.fromisoformat(lead['timestamp'])
    return sorted(leads, key=lambda x: x.get('timestamp', datetime.min), reverse=True)

# Public - Site Content (no auth required for reading)
@api_router.get("/site-content")
async def get_public_site_content():
    """Public endpoint for frontend pages to fetch site content"""
    content = await db.site_content.find_one({"type": "main"}, {"_id": 0})
    if content:
        return content
    return {"type": "main", "content": {}}

# Admin - Site Content Management
@api_router.get("/admin/site-content")
async def get_site_content(username: str = Depends(verify_admin)):
    content = await db.site_content.find_one({"type": "main"}, {"_id": 0})
    if content:
        return content
    return {"type": "main", "content": {}}

@api_router.post("/admin/site-content")
async def save_site_content(data: dict, username: str = Depends(verify_admin)):
    try:
        await db.site_content.update_one(
            {"type": "main"},
            {"$set": {"type": "main", "content": data.get("content", {}), "updated_at": datetime.now(timezone.utc).isoformat()}},
            upsert=True
        )
        return {"message": "Content saved successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to save content: {str(e)}")

# Admin - Image Upload
@api_router.post("/admin/upload-image")
async def upload_image(file: UploadFile = File(...), username: str = Depends(verify_admin)):
    try:
        # Generate unique filename
        ext = file.filename.split('.')[-1] if '.' in file.filename else 'png'
        filename = f"{uuid.uuid4()}.{ext}"
        filepath = UPLOAD_DIR / filename
        
        # Save file
        with open(filepath, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        # Save to database
        image_doc = {
            "id": str(uuid.uuid4()),
            "filename": filename,
            "original_name": file.filename,
            "url": f"/api/uploads/{filename}",
            "uploaded_at": datetime.now(timezone.utc).isoformat()
        }
        await db.images.insert_one(image_doc)
        
        return {"url": f"/api/uploads/{filename}", "filename": filename, "id": image_doc["id"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to upload image: {str(e)}")

# Admin - Get all images
@api_router.get("/admin/images")
async def get_images(username: str = Depends(verify_admin)):
    images = await db.images.find({}, {"_id": 0}).to_list(1000)
    return images

# Admin - Delete image
@api_router.delete("/admin/images/{image_id}")
async def delete_image(image_id: str, username: str = Depends(verify_admin)):
    try:
        image = await db.images.find_one({"id": image_id}, {"_id": 0})
        if image:
            filepath = UPLOAD_DIR / image["filename"]
            if filepath.exists():
                filepath.unlink()
            await db.images.delete_one({"id": image_id})
        return {"message": "Image deleted"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete image: {str(e)}")

# Serve uploaded files
@api_router.get("/uploads/{filename}")
async def serve_upload(filename: str):
    filepath = UPLOAD_DIR / filename
    if not filepath.exists():
        raise HTTPException(status_code=404, detail="File not found")
    
    from fastapi.responses import FileResponse
    return FileResponse(filepath)

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()