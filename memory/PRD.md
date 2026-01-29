# Lionforce Website - Product Requirements Document

## Original Problem Statement
Recreate the existing WordPress website (`https://lionforce.net`) into a new, modern, and minimalistic web application with a comprehensive Admin Panel (CMS) for content management.

## Current Architecture
```
/app/
├── backend/           # FastAPI backend
│   └── server.py      # Live chat, leads, CMS endpoints
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── ChatBot.js      # Alex - Lead gen chatbot
│       │   ├── Footer.js       # Editable social links
│       │   └── Layout.js       # No FloatingCTA (removed)
│       ├── pages/
│       │   ├── Admin.js        # Full CMS for all Home page blocks
│       │   ├── BookConsultation.js  # Consultation with sub-services
│       │   ├── Home.js         # All blocks now CMS editable
│       │   └── Contact.js      # 4 office slots
│       └── hooks/
│           └── useSiteContent.js
```

## Deployment
- **Frontend:** Bluehost
- **Backend:** Render.com  
- **Database:** MongoDB Atlas

---

## ✅ Completed Features (January 2025 - Session 3)

### Chatbot (Alex)
- ✅ Renamed to "Alex" (American/British friendly)
- ✅ IoT services added
- ✅ Email/Call buttons in header
- ✅ "Optional" prompts for Company/Designation
- ✅ Fixed lead saving to database
- ✅ Live Agent system with online/offline toggle

### Consultation Page (`/consultation`)
- ✅ **7 Service Categories** as buttons
- ✅ **Sub-services as checkboxes** (multiple selection)
  - eLearning: 10 sub-services
  - Software: 10 sub-services
  - Design: 10 sub-services
  - Creative: 10 sub-services
  - Marketing: 10 sub-services
  - Consulting: 10 sub-services
  - India Expansion: 10 sub-services
- ✅ Date, Time, Timezone selectors

### Home Page CMS (All Blocks Editable)
- ✅ **SEO Settings** - Title, description, keywords
- ✅ **Hero Section** - Badge, titles, subtitle, buttons, background
- ✅ **Hero Service Cards (4 boxes)** - Title, description, link, color
- ✅ **Stats** - Years, Projects, Countries with labels
- ✅ **Services Grid** - Title, subtitle, all 6 service cards (icon, title, description, link, color)
- ✅ **Why Teams Choose Us** - Title, subtitle, 6 items (number, title, description)
- ✅ **Testimonials** - Title, testimonial items (quote, author, company)
- ✅ **Client Logos** - Title, up to 10 logos with images
- ✅ **India Expansion CTA** - Badge, title, subtitle, button, 4 stats cards
- ✅ **Final CTA** - Title, subtitle, button, phone number

### Contact Page CMS
- ✅ **4 Office Slots** - Name, Address, Phone, Email (only visible if name filled)

### Removed
- ✅ **FloatingCTA removed** - Email/Call now in chatbot header

---

## 🟠 P1 - High Priority
1. Fix Local Image Serving
2. Mobile responsive fix - About page stats
3. Favicon/Title update to "Lionforce"

## 🟡 P2 - Medium Priority  
1. Make Emojis editable via CMS
2. Make Icons editable via CMS (icon picker)
3. Service pages CMS (eLearning, Software, etc.)

## ⚪ P3 - Future/Backlog
1. Domain migration (`lionforce.in` → `lionforce.net`)
2. Marketing landing pages
3. Admin.js refactoring

---

## Admin Credentials
- **URL:** `/admin`
- **Username:** `admin`
- **Password:** `Welc0me4$`

## Key Routes
- `/` - Home page (fully CMS editable)
- `/consultation` - Book consultation with sub-services
- `/contact` - Contact page with offices
- `/admin` - CMS Admin panel
