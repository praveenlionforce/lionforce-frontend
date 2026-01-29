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
│   ├── server.py      # Main API server (live chat endpoints)
│   ├── Procfile       # Render deployment
│   └── runtime.txt    # Python version
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── ChatBot.js      # Alex - Lead gen chatbot
│       │   ├── Footer.js       # Editable social links
│       │   └── Layout.js
│       ├── pages/
│       │   ├── Admin.js        # CMS with Live Chat
│       │   ├── BookConsultation.js  # NEW: Calendar booking page
│       │   └── Contact.js      # Updated with offices
│       └── hooks/
│           └── useSiteContent.js
└── LIONFORCE_WEBSITE_GUIDE.md
```

## Deployment Configuration
- **Frontend:** Bluehost (static React build)
- **Backend:** Render.com (FastAPI)
- **Database:** MongoDB Atlas

---

## ✅ Completed Features (January 2025 - Session 3)

### Chatbot Enhancements
- ✅ Renamed bot to "Alex" (American/British friendly)
- ✅ Added IoT services to Software Development
- ✅ Email/Call quick-action buttons in chatbot header
- ✅ **Fixed lead collection** - Now properly saves to database
- ✅ **"Optional" prompts** for Company and Designation fields
- ✅ Context-aware "Tell me more" - shows specific service details
- ✅ Visitor name/company shows in Live Chat instead of "Anonymous"

### Live Agent System
- ✅ Agent online/offline toggle
- ✅ View ALL active conversations in real-time
- ✅ Take over chats from bot / transfer back to bot
- ✅ Sound notifications (toggle on/off)
- ✅ Unread message count badges
- ✅ Visitor info display (name, email, company)

### New Consultation Booking Page (`/consultation`)
- ✅ Full Name, Email (required)
- ✅ Company, Phone (optional)
- ✅ Service Interest dropdown
- ✅ Date picker, Time slots, **Timezone selector**
- ✅ "Get Free Consultation" now links to `/consultation`
- ✅ "Contact" button links to `/contact`

### Office Locations CMS
- ✅ 4 office slots in Contact page CMS
- ✅ Each slot: Name, Address, Phone, Email
- ✅ **Only visible on page if name is filled**
- ✅ Editable from Admin → Edit Pages → Contact

---

## 🔴 P0 - Critical (None)

## 🟠 P1 - High Priority
1. **Fix Local Image Serving** - Decommission WordPress dependency
2. **Mobile Responsive Fix** - About page stats section
3. **Favicon/Title Update** - Change to "Lionforce"

## 🟡 P2 - Medium Priority
1. Make Emojis editable via CMS
2. Make Icons editable via CMS
3. Form element labels/placeholders editable

## ⚪ P3 - Future/Backlog
1. Domain migration (`lionforce.in` → `lionforce.net`)
2. Marketing landing pages
3. Admin.js refactoring

---

## Key Explanation: Chatbot Leads vs Live Chat

| Feature | Chatbot Leads | Live Chat |
|---------|---------------|-----------|
| **What it is** | Completed contact submissions | Real-time conversation history |
| **When populated** | After user completes lead flow (name, email, message) | Every time someone opens chatbot |
| **Purpose** | Follow-up sales leads | Real-time support & chat takeover |
| **Admin Tab** | "Chatbot Leads" | "Live Chat" |

---

## Admin Credentials
- **URL:** `/admin`
- **Username:** `admin`
- **Password:** `Welc0me4$` (production)

## Key Routes
- `/` - Home page
- `/consultation` - **NEW** Book a free consultation
- `/contact` - Contact page with office locations
- `/admin` - CMS Admin panel
