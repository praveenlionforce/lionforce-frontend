# Lionforce Website - Product Requirements Document

## Original Problem Statement
Recreate the existing WordPress website (https://lionforce.net) into a new, modern React web application with the following requirements:
- Minimalistic, creative, and animated design
- Multi-page website structure
- Light theme with brand colors (#428697, #6ab445) and gold accent
- All existing services plus new India expansion services (EOR, ODC, COE)
- Admin page for content management
- SEO compatibility
- Mobile responsive design

## Core Requirements
1. **Theme & Style**
   - Light theme with brand colors: dark teal (#428697), green (#6ab445)
   - Gold accent color for highlights
   - Vibrant, professional design (not "whitish and blank")
   - Consistent gradient hero banners across service pages

2. **Services to Include**
   - Custom eLearning
   - Software Development
   - UX/UI Design
   - Creative Services (3D animation, explainers, presentations)
   - Digital Marketing
   - Consulting
   - **India Expansion Services** (consolidated EOR, ODC, COE page)

3. **Content Requirements**
   - Company stats: 13+ years experience, 300+ projects, 32+ countries
   - Contact phone: +91 96005 36354
   - India expansion pricing (EOR only - ODC/COE requires custom quote)
   - Client logos and testimonials
   - Modern CTAs throughout

## What's Been Implemented

### Date: January 27, 2026

#### ✅ Completed Features

**1. Home Page**
- New captivating hero text: "Innovate. Scale. Transform Globally. Powered by India."
- Updated subtext with clear value proposition
- Rotating service category banner
- Updated stats (300+ projects)
- Client logos section
- Testimonials section
- Benefits section
- Final CTA section

**2. About Page**
- Modern, captivating intro copy
- Core values section
- CEO message section
- Mission & Vision
- Stats display

**3. India Expansion Page** (`/services/india-expansion`)
- Consolidated EOR, ODC, COE services into one page
- Hero banner without pricing (as requested)
- Three service overview cards
- Why India section
- EOR-specific pricing packages with note about custom quotes for ODC/COE
- Comparison table showing Lionforce advantages
- Final CTA

**4. Service Landing Pages**
All service pages now have consistent gradient hero banners:
- eLearning (full detailed page)
- Software Development (full detailed page)
- UX/UI Design (template-based)
- Creative Services (template-based)
- Digital Marketing (template-based)
- Consulting (template-based)

**5. Navigation**
- Updated dropdown: "EXPAND TO INDIA" category
- Clean service naming: "India Team Setup (EOR • ODC • COE)"

**6. Footer**
- Updated with new logo (`footerlogo.png`)
- Correct phone number (+91 96005 36354)
- Company info and links

**7. Admin Dashboard** (`/admin`)
- Login system with basic auth (admin / lionforce2024)
- Dashboard with statistics overview
- Contact form submissions viewer
- Newsletter subscribers viewer
- Content blocks management (CRUD)
- Logout functionality

**8. Backend API**
- `/api/admin/login` - Admin authentication
- `/api/admin/submissions` - View contact form submissions
- `/api/admin/subscribers` - View newsletter subscribers
- `/api/admin/content` - CRUD for content blocks
- `/api/contact` - Contact form submission
- `/api/newsletter` - Newsletter subscription

**9. Global Updates**
- Phone number updated to +91 96005 36354 across all pages
- Consistent hero banner styling (gradient + dot pattern)
- Removed redundant old service files (EOR.js, ODC.js, COE.js)

## Tech Stack
- **Frontend**: React, React Router, TailwindCSS, Framer Motion
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Styling**: TailwindCSS with custom CSS variables

## Access URLs
- **Main Site**: https://modern-lionforce.preview.emergentagent.com
- **Admin Panel**: https://modern-lionforce.preview.emergentagent.com/admin
- **Admin Credentials**: admin / lionforce2024

## Prioritized Backlog

### P0 (Critical)
- None currently

### P1 (Important)
- Create more detailed "salesy" content for UX/UI, Creative, Digital Marketing, and Consulting pages (currently using templates)
- Review Home page sizing/alignment in "Game-Changing Solutions" section

### P2 (Future Enhancement)
- Full SEO audit (titles, meta descriptions, keywords for all pages)
- Connect content blocks from admin to actual page content
- Add image upload capability to admin
- Add testimonials management to admin

### P3 (Backlog)
- Deployment to production server (DEPLOYMENT_GUIDE.md exists)
- Blog/News section
- Case studies page
- Social media links functionality

## File Structure
```
/app/
├── backend/
│   ├── .env
│   ├── requirements.txt
│   └── server.py
├── frontend/
│   ├── .env
│   ├── package.json
│   └── src/
│       ├── App.js
│       ├── App.css
│       ├── components/
│       │   ├── Footer.js
│       │   ├── Navbar.js
│       │   ├── Layout.js
│       │   ├── ServiceTemplate.js
│       │   └── ui/ (shadcn components)
│       └── pages/
│           ├── Home.js
│           ├── About.js
│           ├── Contact.js
│           ├── Industries.js
│           ├── Admin.js
│           └── services/
│               ├── IndiaExpansion.js
│               ├── ELearning.js
│               ├── SoftwareDevelopment.js
│               ├── UXUIDesign.js
│               ├── CreativeServices.js
│               ├── DigitalMarketing.js
│               └── Consulting.js
└── DEPLOYMENT_GUIDE.md
```

## Notes for Future Development
- The user is non-technical and prefers visual feedback
- Always use the live preview URL, not localhost
- Admin credentials should be changed before production deployment
- Content blocks in admin are currently stored but not yet connected to display on pages (future enhancement)
