# Lionforce Website - cPanel Deployment Guide

## Overview
This guide covers deploying the Lionforce website (React frontend + FastAPI backend) to cPanel hosting.

---

## Part 1: Frontend Deployment (React)

### Step 1: Build the Frontend
The frontend is already built. Download the `/app/frontend/build` folder.

### Step 2: Upload to cPanel
1. Login to your cPanel
2. Go to **File Manager**
3. Navigate to `public_html` (or your domain's root folder)
4. Upload all contents from the `build` folder directly into `public_html`

### Step 3: Configure .htaccess for React Router
Create a `.htaccess` file in `public_html` with this content:

```apache
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

This ensures React Router works correctly for all routes.

---

## Part 2: Backend Deployment (FastAPI/Python)

### Option A: Using cPanel's Python App (Recommended)

1. **Create Python Application**
   - Go to cPanel → **Setup Python App**
   - Click **Create Application**
   - Settings:
     - Python version: 3.9 or higher
     - Application root: `api` (or your preferred folder)
     - Application URL: `yourdomain.com/api`
     - Application startup file: `server.py`
     - Application entry point: `app`

2. **Upload Backend Files**
   - Upload contents of `/app/backend/` to the application root folder
   - This includes: `server.py`, `requirements.txt`

3. **Install Dependencies**
   - In the Python App interface, click **Run pip install** or use terminal:
   ```bash
   source /home/username/virtualenv/api/3.9/bin/activate
   pip install -r requirements.txt
   ```

4. **Configure Environment Variables**
   - In cPanel Python App, add these environment variables:
   ```
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/lionforce
   DB_NAME=lionforce
   CORS_ORIGINS=https://yourdomain.com
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=your_secure_password
   ```

5. **Create passenger_wsgi.py**
   Create this file in your application root:
   ```python
   import sys
   import os
   
   # Add your application directory to the Python path
   sys.path.insert(0, os.path.dirname(__file__))
   
   # Set environment variables
   os.environ['MONGO_URL'] = 'your_mongodb_connection_string'
   os.environ['DB_NAME'] = 'lionforce'
   os.environ['CORS_ORIGINS'] = 'https://yourdomain.com'
   
   from server import app as application
   ```

6. **Restart the Application**
   - Click **Restart** in the Python App interface

### Option B: Using Shared Hosting with Proxy

If your cPanel doesn't support Python apps well, consider:
1. Deploy backend to a VPS or cloud service (DigitalOcean, Railway, Render)
2. Update frontend's API URL to point to the external backend

---

## Part 3: MongoDB Setup

### Option 1: MongoDB Atlas (Recommended for cPanel)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your cPanel server IP (or allow all IPs: 0.0.0.0/0)
5. Get connection string: `mongodb+srv://user:password@cluster.mongodb.net/lionforce`

### Option 2: Self-hosted MongoDB
If your hosting supports it, install MongoDB and use:
```
MONGO_URL=mongodb://localhost:27017
```

---

## Part 4: Update Frontend API URL

Before building the frontend for production, update `/app/frontend/.env`:

```env
REACT_APP_BACKEND_URL=https://yourdomain.com
```

Then rebuild:
```bash
cd /app/frontend
yarn build
```

---

## Part 5: Final Checklist

- [ ] Frontend `build` folder uploaded to `public_html`
- [ ] `.htaccess` file created for React Router
- [ ] Backend Python app created and configured
- [ ] MongoDB Atlas cluster created
- [ ] Environment variables set in cPanel
- [ ] CORS configured to allow your domain
- [ ] Test all pages load correctly
- [ ] Test admin panel login at `/admin`
- [ ] Test contact form submission

---

## Troubleshooting

### 500 Internal Server Error
- Check Python app error logs in cPanel
- Verify all dependencies installed
- Check environment variables are set

### API calls failing
- Verify CORS_ORIGINS includes your frontend domain
- Check the API URL in frontend matches backend location
- Ensure backend is running (check Python app status)

### React routes showing 404
- Verify `.htaccess` file exists and has correct content
- Check mod_rewrite is enabled

### MongoDB connection failed
- Verify MongoDB Atlas IP whitelist
- Check connection string format
- Test connection locally first

---

## Admin Credentials
- URL: `https://yourdomain.com/admin`
- Username: `admin`
- Password: `lionforce2024` (change this in production!)

---

## Support
For issues specific to your cPanel hosting, contact your hosting provider's support team.
