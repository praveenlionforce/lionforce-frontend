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
│   ├── server.py      # Main API server
│   ├── Procfile       # Render deployment
│   └── runtime.txt    # Python version for Render
├── frontend/          # React frontend
│   ├── build/         # Production build for Bluehost
│   │   └── .htaccess  # Client-side routing
│   └── src/
│       ├── components/
│       │   ├── ChatBot.js      # Lead generation chatbot
│       │   ├── Footer.js       # Editable social links
│       │   └── Layout.js       # Main layout wrapper
│       ├── hooks/
│       │   └── useSiteContent.js  # CMS content hook
│       └── pages/
│           └── Admin.js        # CMS admin panel
└── LIONFORCE_WEBSITE_GUIDE.md  # User documentation
```

## Deployment Configuration
- **Frontend:** Bluehost (static React build)
- **Backend:** Render.com (FastAPI)
- **Database:** MongoDB Atlas

## Key Database Collections
- `site_content` - All CMS-editable content
- `chatbot_leads` - Leads from chatbot conversations
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
- **Admin Panel Performance Fix:** Resolved scroll/flicker bug with React.memo optimization
- **Chatbot Implementation:** Rule-based lead gen chatbot with admin viewer
- **EOR Pricing CMS:** Made India Expansion pricing fully editable
- **Contact Form Pre-selection:** Service pre-selection via URL params
- **Client Marquee Fix:** Seamless infinite loop animation
- **Social Links Management:** Add/edit/delete/hide social links in CMS
- **Client Stories/Testimonials:** Editable via CMS
- **Bug Fixes:** Industries page crash, IN flag emoji, About stats responsive, footer EOR link, site title

### January 2025 - Session 3 (Current)
- **Verified:** Chatbot Leads Viewer working in Admin panel
- **Verified:** Footer social links have `target="_blank"` for security
- **Verified:** EOR link correctly points to `/services/india-expansion`

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
- `POST /api/chatbot-lead` - Save chatbot lead
- `GET /api/admin/chatbot-leads` - Get all chatbot leads
- `GET /api/site-content` - Get CMS content
- `PUT /api/site-content` - Update CMS content
- `POST /api/contact` - Submit contact form
- `POST /api/subscribe` - Newsletter subscription
