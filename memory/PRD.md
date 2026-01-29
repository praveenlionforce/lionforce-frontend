# Lionforce Website - Product Requirements Document

## Original Problem Statement
Recreate the existing WordPress website (`https://lionforce.net`) into a new, modern, and minimalistic web application with a comprehensive Admin Panel (CMS) for content management.

## Core Requirements
- **Multi-page website** with all existing services and marketing language
- **Light theme** with brand colors (`#428697`, `#6ab445`, gold/yellow accent)
- **SEO-compatible** structure
- **Full CMS** to edit content, blocks, images, icons, and forms

## Current Architecture
```
/app/
├── backend/           # FastAPI backend
│   ├── server.py      # Main API server (live chat endpoints added)
│   ├── Procfile       # Render deployment
│   └── runtime.txt    # Python version for Render
├── frontend/          # React frontend
│   ├── build/         # Production build for Bluehost
│   │   └── .htaccess  # Client-side routing
│   └── src/
│       ├── components/
│       │   ├── ChatBot.js      # Enhanced lead gen chatbot (Alex)
│       │   ├── Footer.js       # Editable social links
│       │   └── Layout.js       # Main layout wrapper
│       ├── hooks/
│       │   └── useSiteContent.js  # CMS content hook
│       └── pages/
│           └── Admin.js        # CMS admin panel with Live Chat
└── LIONFORCE_WEBSITE_GUIDE.md  # User documentation
```

## Deployment Configuration
- **Frontend:** Bluehost (static React build)
- **Backend:** Render.com (FastAPI)
- **Database:** MongoDB Atlas

## Key Database Collections
- `site_content` - All CMS-editable content
- `chatbot_leads` - Leads from chatbot (name, email, company, designation, message)
- `chat_sessions` - Live chat sessions
- `chat_messages` - Chat message history
- `agent_status` - Agent online/offline status
- `contact_submissions` - Contact form submissions
- `subscribers` - Newsletter subscribers
- `admin_users` - Admin credentials

---

## ✅ Completed Features

### December 2024 - Session 1
- Full website recreation with all service pages
- Admin CMS with page editing capabilities
- Contact form with database storage
- Newsletter subscription

### January 2025 - Session 2
- Admin Panel Performance Fix (React.memo optimization)
- Basic Chatbot Implementation
- EOR Pricing CMS
- Contact Form Pre-selection
- Client Marquee Fix
- Social Links Management
- Client Stories/Testimonials editable
- Bug Fixes

### January 2025 - Session 3 (Current)
**Chatbot Enhancements:**
- ✅ Renamed bot from "Leo" to "Alex" (American/British friendly)
- ✅ Added IoT services to Software Development
- ✅ Added Email/Call quick-action buttons in header
- ✅ Enhanced lead collection: Name, Email, Company, Designation (optional), Message
- ✅ Context-aware "Tell me more" - shows specific service details
- ✅ Service details for all 7 services with tech stacks and methodologies

**Live Agent System (NEW):**
- ✅ Agent online/offline toggle in Admin panel
- ✅ View ALL active chat conversations
- ✅ Real-time message polling (3-second intervals)
- ✅ Take over conversations from bot
- ✅ Transfer back to bot after helping
- ✅ Close conversations
- ✅ Sound notifications for new messages (toggle on/off)
- ✅ Unread message count badges
- ✅ Visitor info display (name, email, company)

---

## 🔴 P0 - Critical (None Currently)

## 🟠 P1 - High Priority
1. **Fix Local Image Serving** - Decommission WordPress dependency
2. **Client Stories CRUD** - Add/edit/delete testimonials on Home page
3. **Mobile Responsive Fix** - About page stats section
4. **Favicon/Title Update** - Change to "Lionforce"

## 🟡 P2 - Medium Priority
1. Make Emojis editable via CMS
2. Make Icons editable via CMS
3. Form element labels/placeholders editable

## ⚪ P3 - Future/Backlog
1. Domain migration (`lionforce.in` → `lionforce.net`)
2. Marketing landing pages
3. Admin.js refactoring (break into smaller components)

---

## Admin Credentials
- **URL:** `/admin`
- **Username:** `admin`
- **Password:** `Welc0me4$` (production)

## API Endpoints

### Chatbot & Leads
- `POST /api/chatbot-lead` - Save chatbot lead
- `GET /api/admin/chatbot-leads` - Get all chatbot leads

### Live Chat System (NEW)
- `POST /api/chat/session` - Create/get chat session
- `POST /api/chat/message` - Send message
- `GET /api/chat/messages/{session_id}` - Get messages
- `GET /api/chat/session/{session_id}` - Get session status
- `PUT /api/chat/session/{session_id}/visitor` - Update visitor info
- `GET /api/chat/agent-status` - Check if agent online (public)
- `GET /api/admin/live-chats` - Get all active chats
- `GET /api/admin/live-chats/{session_id}/messages` - Get chat history
- `POST /api/admin/live-chats/{session_id}/reply` - Agent reply
- `POST /api/admin/live-chats/{session_id}/takeover` - Agent takeover
- `POST /api/admin/live-chats/{session_id}/transfer-to-bot` - Transfer to bot
- `POST /api/admin/live-chats/{session_id}/close` - Close chat
- `GET /api/admin/agent-status` - Get agent status
- `POST /api/admin/agent-status` - Set agent online/offline

### CMS
- `GET /api/site-content` - Get CMS content
- `PUT /api/site-content` - Update CMS content
- `POST /api/contact` - Submit contact form
- `POST /api/subscribe` - Newsletter subscription
