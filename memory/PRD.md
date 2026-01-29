# Lionforce Website - Product Requirements Document

## Original Problem Statement
Recreate the existing WordPress website (`https://lionforce.net`) into a new, modern, and minimalistic web application with a comprehensive Admin Panel (CMS) for content management.

## Deployment
- **Frontend:** Bluehost
- **Backend:** Render.com  
- **Database:** MongoDB Atlas
- **Admin:** `/admin` (Username: admin, Password: Welc0me4$)

---

## ✅ Completed Features (January 2025)

### Visitor Analytics Dashboard (NEW - Session 4)
- ✅ **Analytics Tab** in Admin Panel with summary stats
- ✅ **Visitor Tracking** - Page views, unique visitors, geographic data
- ✅ **Daily/Weekly/Monthly stats** with visual bar charts
- ✅ **Top Pages** breakdown showing most viewed pages
- ✅ **Visitors by Country** with geographic breakdown
- ✅ **Recent Visitors** list with location and timestamps
- ✅ **Microsoft Clarity** integrated for heatmaps (Project ID: v8zs0csm3x)
- ✅ **Milestone Celebrations** - Colorful banners for traffic achievements (5, 25, 100, 500, 1000 visitors)
- ✅ **Auto-tracking** on all public pages (excludes /admin)
- ✅ Uses free ip-api.com for GeoIP lookup

### Chatbot (Alex) & Live Agent
- ✅ Renamed to "Alex" (American/British friendly)
- ✅ IoT services added to Software Development
- ✅ Email/Call buttons in chatbot header
- ✅ "Optional" prompts for Company/Designation
- ✅ Fixed lead saving to database
- ✅ Live Agent system with online/offline toggle
- ✅ Agent messages now sync to visitors in real-time

### Consultation Page (`/consultation`)
- ✅ 7 Service Categories as buttons
- ✅ Sub-services as checkboxes (multiple selection)
- ✅ Date, Time, Timezone selectors
- ✅ Submissions stored in separate collection

### Admin Panel - Consultations Tab
- ✅ Prominent "Consultations" tab with badge
- ✅ Status cards: New, Contacted, Scheduled, Completed
- ✅ Full consultation details with status dropdown
- ✅ Quick "Reply" button opens email client

### Home Page CMS (All Blocks Editable)
- ✅ SEO Settings, Hero Section, Hero Service Cards
- ✅ Stats, Services Grid with ICON PICKER
- ✅ Why Teams Choose Us, Testimonials, Client Logos
- ✅ India Expansion CTA, Final CTA

### Icon Picker
- ✅ Visual grid of 30+ icons with click to select

### Other Fixes
- ✅ FloatingCTA removed, Favicon/Title updated
- ✅ Mobile responsive fix for About page stats

---

## 🔴 P0 - Critical
None - All critical features complete!

## 🟠 P1 - High Priority
1. **Fix Footer Social Links** - Verify links render correctly with DB data
2. **Fix Local Image Serving** - Decommission WordPress dependency

## 🟡 P2 - Medium Priority  
1. Make service pages CMS editable (eLearning, Software, etc.)
2. Make Emojis editable via CMS

## ⚪ P3 - Future/Backlog
1. Domain migration (`lionforce.in` → `lionforce.net`)
2. Marketing landing pages
3. Admin.js refactoring (file is 3800+ lines)

---

## Key Routes
- `/` - Home page (fully CMS editable)
- `/consultation` - Book consultation with sub-services
- `/contact` - Contact page with 4 office slots
- `/admin` - CMS Admin panel (10 tabs)

## Database Collections
- `site_content` - CMS content
- `consultation_requests` - Consultation bookings
- `chatbot_leads` - Chatbot lead submissions
- `chat_sessions` - Live chat sessions
- `chat_messages` - Chat message history
- `contact_submissions` - Contact form submissions
- `newsletter` - Newsletter subscribers
- `page_views` - Analytics page views (NEW)
- `visitors` - Unique visitor records (NEW)

## Key API Endpoints
- `POST /api/analytics/track` - Track page view (public)
- `GET /api/admin/analytics/stats` - Get analytics data (admin)
- `POST /api/consultations` - Submit consultation
- `GET/PUT /api/admin/consultations` - Manage consultations
- `POST /api/chatbot-lead` - Save chatbot lead
- `GET/POST /api/admin/site-content` - Manage CMS content

## Architecture
```
/app/
├── backend/
│   └── server.py           # FastAPI backend with analytics endpoints
├── frontend/
│   └── src/
│       ├── App.js          # Main app with AnalyticsTracker
│       ├── hooks/
│       │   └── useAnalytics.js  # Analytics tracking hook (NEW)
│       ├── components/
│       │   ├── ChatBot.js      # Live agent chatbot
│       │   └── Layout.js       # Main layout
│       └── pages/
│           ├── Admin.js        # CMS with 10 tabs including Analytics
│           ├── Home.js         # Fully CMS-driven
│           └── BookConsultation.js
└── memory/
    └── PRD.md
```
