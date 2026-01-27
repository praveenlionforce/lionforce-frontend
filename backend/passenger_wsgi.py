import sys
import os

# Add your application directory to the Python path
sys.path.insert(0, os.path.dirname(__file__))

# Environment variables - UPDATE THESE WITH YOUR VALUES
# You can also set these in cPanel's Python App interface instead
os.environ.setdefault('MONGO_URL', 'mongodb+srv://username:password@cluster.mongodb.net/lionforce')
os.environ.setdefault('DB_NAME', 'lionforce')
os.environ.setdefault('CORS_ORIGINS', 'https://yourdomain.com')
os.environ.setdefault('ADMIN_USERNAME', 'admin')
os.environ.setdefault('ADMIN_PASSWORD', 'your_secure_password_here')

# Import the FastAPI app
from server import app

# Passenger WSGI expects 'application'
application = app
