# Lionforce Website - Product Requirements Document

## Original Problem Statement
Recreate the existing WordPress website (`https://lionforce.net`) into a new, modern, and minimalistic web application with a comprehensive Admin Panel (CMS) for content management.

## Deployment
- **Frontend:** Bluehost
- **Backend:** Render.com  
- **Database:** MongoDB Atlas
- **Admin:** `/admin` (Username: admin, Password: Welc0me4$)

---

## ✅ Completed Features (January 2025 - Session 3)

### Chatbot (Alex) & Live Agent
- ✅ Renamed to "Alex" (American/British friendly)
- ✅ IoT services added to Software Development
- ✅ Email/Call buttons in chatbot header
- ✅ "Optional" prompts for Company/Designation
- ✅ Fixed lead saving to database
- ✅ Live Agent system with online/offline toggle
- ✅ **FIXED: Agent messages now sync to visitors in real-time** (polling even in bot mode)

### Consultation Page (`/consultation`)
- ✅ **7 Service Categories** as buttons
- ✅ **Sub-services as checkboxes** (multiple selection per category)
- ✅ Date, Time, Timezone selectors
- ✅ Submissions stored in separate collection

### Admin Panel - Consultations Tab (NEW)
- ✅ **Prominent "Consultations" tab** with badge showing new requests
- ✅ **Status cards**: New, Contacted, Scheduled, Completed
- ✅ **Full consultation details**: Name, email, phone, company, service, sub-services, date/time/timezone
- ✅ **Status dropdown** to update each consultation
- ✅ **Quick "Reply" button** opens email client with pre-filled template

### Home Page CMS (All Blocks Editable)
- ✅ SEO Settings
- ✅ Hero Section (badge, titles, subtitle, buttons, background)
- ✅ Hero Service Cards (4 boxes)
- ✅ Stats (years, projects, countries)
- ✅ **Services Grid with ICON PICKER** - Visual grid of 30+ icons
- ✅ Why Teams Choose Us
- ✅ Testimonials
- ✅ Client Logos
- ✅ India Expansion CTA with 4 stats cards
- ✅ Final CTA

### Icon Picker (NEW)
- ✅ Visual grid of 30+ icons
- ✅ Click to select, shows preview
- ✅ Available icons: BookOpen, Code, Palette, Video, TrendingUp, Globe, Users, Briefcase, Lightbulb, Zap, Shield, Heart, Star, Target, Layers, Database, Cpu, Wifi, Monitor, Smartphone, Cloud, Server, Box, Mail, Phone, Calendar, Clock, Settings, Award, CheckCircle, MessageSquare

### Other Fixes
- ✅ **FloatingCTA removed** (was hidden behind chatbot)
- ✅ **Favicon/Title** updated to "Lionforce"
- ✅ **Mobile responsive** fix for About page stats section

---

## 🟠 P1 - High Priority
1. **Email notifications** for consultation requests (via Resend API - user chose not to use SMTP)
2. **Fix Local Image Serving** - Decommission WordPress dependency

## 🟡 P2 - Medium Priority  
1. Make service pages CMS editable (eLearning, Software, etc.)
2. Make Emojis editable via CMS

## ⚪ P3 - Future/Backlog
1. Domain migration (`lionforce.in` → `lionforce.net`)
2. Marketing landing pages
3. Admin.js refactoring

---

## Key Routes
- `/` - Home page (fully CMS editable)
- `/consultation` - Book consultation with sub-services
- `/contact` - Contact page with 4 office slots
- `/admin` - CMS Admin panel

## Database Collections
- `site_content` - CMS content
- `consultation_requests` - Consultation bookings (NEW)
- `chatbot_leads` - Chatbot lead submissions
- `chat_sessions` - Live chat sessions
- `chat_messages` - Chat message history
- `contact_submissions` - Contact form submissions
- `newsletter` - Newsletter subscribers
