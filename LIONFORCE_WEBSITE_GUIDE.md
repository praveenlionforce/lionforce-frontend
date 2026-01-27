# Lionforce Website - Complete Guide
## Your Website Management & Maintenance Manual

---

## 📋 OVERVIEW

Your website has 3 parts:

| Component | What it does | Where it's hosted | Cost |
|-----------|--------------|-------------------|------|
| Frontend | The website visitors see | Bluehost | (Your existing hosting) |
| Backend | Handles forms, admin panel, data | Render.com | FREE |
| Database | Stores all your content | MongoDB Atlas | FREE |

---

## 🔐 YOUR CREDENTIALS & URLS

### Website
- **Live URL:** https://lionforce.in
- **Admin Panel:** https://lionforce.in/admin
  - Username: `admin`
  - Password: `Welc0me4$`

### Bluehost (Frontend Hosting)
- **Login:** https://www.bluehost.com/
- **File Location:** public_html folder
- Your existing Bluehost login credentials

### Render (Backend Hosting)
- **Dashboard:** https://dashboard.render.com
- **Service URL:** https://lionforce-backend.onrender.com
- Login with your GitHub account

### MongoDB Atlas (Database)
- **Dashboard:** https://cloud.mongodb.com
- **Database User:** lionforce
- **Database Password:** Welc0me4$
- Login with your Google/email account

### GitHub (Code Storage)
- **Frontend Repo:** https://github.com/YOUR-USERNAME/lionforce-frontend
- **Backend Repo:** https://github.com/YOUR-USERNAME/lionforce-backend

---

## ✏️ HOW TO EDIT WEBSITE CONTENT

### To change text, images, or content:

1. Go to: **https://lionforce.in/admin**
2. Login with admin credentials
3. Click **"Edit Pages"**
4. Select the page you want to edit
5. Make your changes
6. Click **"Save"** (top right)

**That's it!** Changes appear immediately on the live site.

---

## 🔄 HOW TO UPDATE THE WEBSITE CODE

### If you need to update the frontend (with developer help):

**Step 1: Make changes in Emergent**
- Open your Emergent project
- Make the code changes
- Test using Preview

**Step 2: Save to GitHub**
- Click "Save to GitHub"
- Select `lionforce-frontend` repo
- Branch: Main
- Save

**Step 3: Download from GitHub**
- Go to https://github.com/YOUR-USERNAME/lionforce-frontend
- Click green "Code" button → "Download ZIP"
- Extract the ZIP
- Find the `frontend/build` folder

**Step 4: Upload to Bluehost**
- Login to Bluehost → cPanel → File Manager
- Go to `public_html`
- Delete old files (backup first if needed)
- Upload all files from the `build` folder
- Make sure `.htaccess` file is there

---

## 🔧 HOW TO UPDATE BACKEND SETTINGS

### To change admin password:

1. Go to: https://dashboard.render.com
2. Click on `lionforce-backend` service
3. Click **"Environment"** tab
4. Find `ADMIN_PASSWORD`
5. Click edit and change the value
6. Click **"Save Changes"**
7. Wait 1-2 minutes for redeploy

### To allow a new domain:

1. Go to Render → Environment
2. Find `CORS_ORIGINS`
3. Add your new domain (comma-separated)
   Example: `https://lionforce.in,https://lionforce.net`
4. Save and wait for redeploy

---

## 🌐 HOW TO SWITCH TO LIONFORCE.NET

**Step 1: Update Render**
1. Go to Render → Environment
2. Update `CORS_ORIGINS` to:
   ```
   https://lionforce.net,https://www.lionforce.net,https://lionforce.in
   ```
3. Save and wait for redeploy

**Step 2: Update Frontend**
1. In Emergent, update `/app/frontend/.env`:
   ```
   REACT_APP_BACKEND_URL=https://lionforce-backend.onrender.com
   ```
2. Save to GitHub
3. Download and upload to Bluehost (see above steps)

**Step 3: Point Domain**
- In your domain registrar, point lionforce.net to your Bluehost server
- Set up redirect from lionforce.in to lionforce.net

---

## ⚠️ TROUBLESHOOTING

### Website not loading:
- Check if Bluehost hosting is active
- Verify files are in `public_html` folder
- Check if `.htaccess` file exists

### Admin panel shows 500 error:
- The `.htaccess` file is missing or incorrect
- Re-create it with the code below

### "Connection error" on login:
- Render service might be sleeping (wait 30 seconds and retry)
- Check if CORS_ORIGINS includes your domain
- Go to Render dashboard and check if service is "Live"

### Website slow on first load:
- This is normal! Render free tier "sleeps" after 15 minutes of no activity
- First visitor wakes it up (takes ~30 seconds)
- After that, it's fast until it sleeps again

### Database errors:
- Go to MongoDB Atlas dashboard
- Check if cluster is active
- Verify Network Access includes 0.0.0.0/0 (allow from anywhere)

---

## 📄 IMPORTANT FILES

### .htaccess file (must be in public_html):
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### Environment Variables in Render:
| Variable | Value |
|----------|-------|
| MONGO_URL | mongodb+srv://lionforce:Welc0me4%24@lionforce.sqyxruy.mongodb.net/lionforce?retryWrites=true&w=majority |
| DB_NAME | lionforce |
| CORS_ORIGINS | https://lionforce.in,https://www.lionforce.in,http://lionforce.in,http://www.lionforce.in |
| ADMIN_USERNAME | admin |
| ADMIN_PASSWORD | Welc0me4$ |

---

## 💰 COSTS SUMMARY

| Service | Cost |
|---------|------|
| Bluehost | Your existing plan |
| Render | FREE (with 30-sec wake time) |
| MongoDB Atlas | FREE (up to 512MB) |
| **Total** | Your Bluehost cost only |

### To remove 30-second wake time:
Upgrade Render to paid plan ($7/month) - service stays always on

---

## 📞 NEED HELP?

- **Bluehost issues:** Contact Bluehost support
- **Render issues:** https://render.com/docs
- **MongoDB issues:** https://docs.atlas.mongodb.com
- **Website code changes:** Return to Emergent

---

## 🔒 SECURITY TIPS

1. **Change default password** - Update ADMIN_PASSWORD in Render
2. **Don't share credentials** - Keep this document safe
3. **Regular backups** - Export content periodically from admin panel
4. **Monitor usage** - Check Render and MongoDB dashboards monthly

---

*Document created: January 2025*
*Website: lionforce.in*
