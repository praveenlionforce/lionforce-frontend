"""
Lionforce API Backend Tests
Tests for: Admin CMS, Contact Forms, Site Content, Images
"""
import pytest
import requests
import os
import base64

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://lionforce-revamp.preview.emergentagent.com')

# Admin credentials
ADMIN_USERNAME = 'admin'
ADMIN_PASSWORD = 'lionforce2024'

@pytest.fixture
def api_client():
    """Shared requests session"""
    session = requests.Session()
    session.headers.update({"Content-Type": "application/json"})
    return session

@pytest.fixture
def admin_auth():
    """Get admin auth header"""
    auth_string = base64.b64encode(f"{ADMIN_USERNAME}:{ADMIN_PASSWORD}".encode()).decode()
    return {"Authorization": f"Basic {auth_string}"}

@pytest.fixture
def authenticated_client(api_client, admin_auth):
    """Session with admin auth header"""
    api_client.headers.update(admin_auth)
    return api_client


class TestHealthCheck:
    """Basic API health check tests"""
    
    def test_api_root(self, api_client):
        """Test API root endpoint"""
        response = api_client.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        print(f"✓ API root returns: {data['message']}")


class TestAdminAuth:
    """Admin authentication tests"""
    
    def test_admin_login_success(self, api_client, admin_auth):
        """Test admin login with correct credentials"""
        response = api_client.post(f"{BASE_URL}/api/admin/login", headers=admin_auth)
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert data["message"] == "Login successful"
        assert data["username"] == ADMIN_USERNAME
        print(f"✓ Admin login successful for user: {data['username']}")
    
    def test_admin_login_invalid_credentials(self, api_client):
        """Test admin login with wrong credentials"""
        wrong_auth = base64.b64encode(b"wrong:wrong").decode()
        response = api_client.post(
            f"{BASE_URL}/api/admin/login", 
            headers={"Authorization": f"Basic {wrong_auth}"}
        )
        assert response.status_code == 401
        print("✓ Invalid credentials correctly rejected with 401")


class TestSiteContent:
    """Site content CMS tests"""
    
    def test_get_public_site_content(self, api_client):
        """Test public site content endpoint (no auth required)"""
        response = api_client.get(f"{BASE_URL}/api/site-content")
        assert response.status_code == 200
        data = response.json()
        assert "type" in data or "content" in data
        print(f"✓ Public site content retrieved successfully")
    
    def test_get_admin_site_content(self, authenticated_client):
        """Test admin site content endpoint"""
        response = authenticated_client.get(f"{BASE_URL}/api/admin/site-content")
        assert response.status_code == 200
        data = response.json()
        assert "type" in data or "content" in data
        print(f"✓ Admin site content retrieved successfully")
    
    def test_save_site_content(self, authenticated_client):
        """Test saving site content"""
        test_content = {
            "content": {
                "home": {
                    "hero": {
                        "badge": "TEST_Badge_Text",
                        "title1": "Test Title"
                    }
                }
            }
        }
        response = authenticated_client.post(
            f"{BASE_URL}/api/admin/site-content",
            json=test_content
        )
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert data["message"] == "Content saved successfully"
        print("✓ Site content saved successfully")
        
        # Verify content was saved by fetching it
        get_response = authenticated_client.get(f"{BASE_URL}/api/admin/site-content")
        assert get_response.status_code == 200
        saved_data = get_response.json()
        assert "content" in saved_data
        print("✓ Saved content verified via GET")


class TestAdminDashboard:
    """Admin dashboard data tests"""
    
    def test_get_submissions(self, authenticated_client):
        """Test getting contact form submissions"""
        response = authenticated_client.get(f"{BASE_URL}/api/admin/submissions")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        print(f"✓ Retrieved {len(data)} contact form submissions")
    
    def test_get_subscribers(self, authenticated_client):
        """Test getting newsletter subscribers"""
        response = authenticated_client.get(f"{BASE_URL}/api/admin/subscribers")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        print(f"✓ Retrieved {len(data)} newsletter subscribers")
    
    def test_get_images(self, authenticated_client):
        """Test getting uploaded images"""
        response = authenticated_client.get(f"{BASE_URL}/api/admin/images")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        print(f"✓ Retrieved {len(data)} images")


class TestContactForm:
    """Contact form submission tests"""
    
    def test_submit_contact_form(self, api_client):
        """Test submitting a contact form"""
        form_data = {
            "name": "TEST_User",
            "email": "test@example.com",
            "subject": "Test Subject",
            "message": "This is a test message",
            "service": "Custom eLearning"
        }
        response = api_client.post(f"{BASE_URL}/api/contact", json=form_data)
        assert response.status_code == 200
        data = response.json()
        assert data["name"] == form_data["name"]
        assert data["email"] == form_data["email"]
        assert "id" in data
        print(f"✓ Contact form submitted successfully with ID: {data['id']}")
    
    def test_submit_contact_form_minimal(self, api_client):
        """Test submitting contact form with minimal required fields"""
        form_data = {
            "name": "TEST_Minimal",
            "email": "minimal@test.com"
        }
        response = api_client.post(f"{BASE_URL}/api/contact", json=form_data)
        assert response.status_code == 200
        data = response.json()
        assert data["name"] == form_data["name"]
        print("✓ Minimal contact form submitted successfully")
    
    def test_submit_contact_form_invalid_email(self, api_client):
        """Test submitting contact form with invalid email"""
        form_data = {
            "name": "TEST_Invalid",
            "email": "not-an-email"
        }
        response = api_client.post(f"{BASE_URL}/api/contact", json=form_data)
        assert response.status_code == 422  # Validation error
        print("✓ Invalid email correctly rejected with 422")


class TestNewsletter:
    """Newsletter subscription tests"""
    
    def test_subscribe_newsletter(self, api_client):
        """Test newsletter subscription"""
        import uuid
        unique_email = f"test_{uuid.uuid4().hex[:8]}@example.com"
        response = api_client.post(
            f"{BASE_URL}/api/newsletter",
            json={"email": unique_email}
        )
        assert response.status_code == 200
        data = response.json()
        assert data["email"] == unique_email
        print(f"✓ Newsletter subscription successful for: {unique_email}")
    
    def test_subscribe_newsletter_invalid_email(self, api_client):
        """Test newsletter subscription with invalid email"""
        response = api_client.post(
            f"{BASE_URL}/api/newsletter",
            json={"email": "invalid-email"}
        )
        assert response.status_code == 422
        print("✓ Invalid email correctly rejected for newsletter")


class TestContentBlocks:
    """Content blocks CRUD tests"""
    
    def test_get_all_content_blocks(self, authenticated_client):
        """Test getting all content blocks"""
        response = authenticated_client.get(f"{BASE_URL}/api/admin/content")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        print(f"✓ Retrieved {len(data)} content blocks")
    
    def test_create_content_block(self, authenticated_client):
        """Test creating a content block"""
        block_data = {
            "page": "test",
            "section": "hero",
            "title": "TEST_Block_Title",
            "subtitle": "Test subtitle",
            "content": "Test content",
            "order": 1,
            "is_active": True
        }
        response = authenticated_client.post(
            f"{BASE_URL}/api/admin/content",
            json=block_data
        )
        assert response.status_code == 200
        data = response.json()
        assert data["title"] == block_data["title"]
        assert "id" in data
        print(f"✓ Content block created with ID: {data['id']}")
        return data["id"]
    
    def test_get_page_content(self, authenticated_client):
        """Test getting content for a specific page"""
        response = authenticated_client.get(f"{BASE_URL}/api/admin/content/home")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        print(f"✓ Retrieved {len(data)} content blocks for home page")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
