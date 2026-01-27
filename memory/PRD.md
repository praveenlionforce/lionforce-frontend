# Lionforce Website - Product Requirements Document

## Original Problem Statement
Recreate the existing WordPress website (https://lionforce.net) into a new, modern React web application with:
- Minimalistic, creative, and animated design
- Multi-page website structure
- Light theme with brand colors (#428697, #6ab445) and gold accent
- All existing services plus new India expansion services (EOR, ODC, COE)
- **Comprehensive Admin CMS** - Edit ALL page elements, content, blocks, forms, images, and service pages
- SEO compatibility
- Mobile responsive design

## What's Been Implemented (January 27, 2025)

### ✅ COMPLETED: Admin Panel Scroll/Typing Bug Fix (Latest)
- Fixed critical usability bug where typing in admin caused screen flicker and cursor reset
- Implemented memoized TextField and ImageField components with local state management
- Components now update parent state only on blur, preventing re-renders during typing
- Custom memo comparison to prevent unnecessary re-renders from inline callbacks

### ✅ COMPLETED: Full Content Management System (CMS)

**Admin Panel at `/admin` with credentials: admin/lionforce2024**

**Main Pages (Editable):**
- Home Page - Hero, Stats, Services, Why Us, Testimonials, **Client Logos**, CTAs, SEO
- About Page - Hero, Story, Challenges, Values, CEO Message, Mission/Vision, SEO
- Contact Page - Hero, Info, Stats, Form settings, Service Links, SEO
- Industries Page - Hero, Industries List, SEO

**Service Pages (All Editable with SEO):**
- eLearning - Hero, Solutions, Benefits, Industries, SEO
- Software Development - Hero, Services, Tech Stack, Benefits, SEO
- India Expansion - Hero, Services, Why India, Pricing, SEO
- UX/UI Design - Hero, Services, SEO
- Creative Services - Hero, Services, SEO
- Digital Marketing - Hero, Services, SEO
- Consulting - Hero, Services, SEO

**Global Settings:**
- **Site Logos** (Header Logo, Footer Logo) - NEW
- Company info (name, phone, email, location, founded year)
- Social links (LinkedIn, Twitter, Facebook)
- Footer content
- Form submission email

**Additional Features:**
- **Client Logos Manager** - Add, edit, delete client logos with preview - NEW
- Image Library with upload/delete
- Form Settings customization
- Contact submissions viewer with Forward to Email
- Newsletter subscribers viewer

### ✅ COMPLETED: Branding Cleanup
- Removed "Made with Emergent" badge from all pages
- Updated default page title to "Lionforce Technologies"

### ✅ COMPLETED: SEO Implementation
- Created custom SEO component (`/app/frontend/src/components/SEO.js`) for reliable meta tag updates
- SEO fields editable for ALL pages: Title, Description, Keywords, OG Image, Canonical URL
- Properly renders: title, meta description, meta keywords, og:title, og:description, og:image
- Replaced react-helmet-async with custom DOM-based solution for better reliability

### ✅ COMPLETED: Editable Logos
- Header logo editable in Global Settings
- Footer logo editable in Global Settings
- Client logos on home page fully editable (add/edit/delete)
- All logos show preview in admin panel

## Access URLs
- **Main Site**: https://lionforce-revamp.preview.emergentagent.com
- **Admin CMS**: https://lionforce-revamp.preview.emergentagent.com/admin

## Admin Credentials
```
Username: admin
Password: lionforce2024
```
⚠️ **Change these credentials before production deployment!**

## File Structure
```
/app/
├── backend/
│   ├── server.py              # Full CMS API endpoints
│   └── uploads/               # Image storage
├── frontend/src/
│   ├── App.js                 # React Router (no HelmetProvider needed)
│   ├── components/
│   │   ├── SEO.js             # Custom SEO component (DOM-based)
│   │   ├── Navbar.js          # Uses CMS header logo
│   │   ├── Footer.js          # Uses CMS footer logo
│   │   └── Layout.js
│   ├── hooks/
│   │   └── useSiteContent.js  # CMS content hook with all defaults
│   └── pages/
│       ├── Admin.js           # Full CMS with memoized input components
│       ├── Home.js            # Uses CMS client logos
│       ├── About.js           
│       ├── Contact.js         
│       ├── Industries.js      
│       └── services/
│           ├── ELearning.js
│           ├── SoftwareDevelopment.js
│           ├── IndiaExpansion.js
│           ├── UXUIDesign.js
│           ├── CreativeServices.js
│           ├── DigitalMarketing.js
│           └── Consulting.js
└── memory/
    └── PRD.md
```

## Prioritized Backlog

### P0 (Critical) - ✅ ALL COMPLETED
- ~~Admin CMS for all pages~~ ✅
- ~~Service pages in CMS~~ ✅
- ~~SEO editors for all pages~~ ✅
- ~~Industries page in Admin~~ ✅
- ~~Remove Emergent branding~~ ✅
- ~~Header/Footer logo editable~~ ✅
- ~~Client logos editable~~ ✅

### P1 (Important) - Ready for User
- Deployment assistance to cPanel
- Service page color verification (user feedback pending)

### P2 (Enhancement)
- Make emojis editable via CMS
- Make icons editable via CMS
- Form elements editable

### P3 (Future)
- Marketing landing pages (post-deployment)
- Blog/News section
- Case studies page

## Key Technical Notes
- **Frontend**: React 18, React Router, TailwindCSS, Framer Motion
- **Backend**: FastAPI (Python), MongoDB
- **SEO**: Custom SEO component using direct DOM manipulation (more reliable than react-helmet)
- All pages use `useSiteContent` hook for CMS data with fallback defaults
- Logos and client logos use ImageField component with preview
