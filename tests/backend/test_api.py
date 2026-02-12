import sys
import os
from fastapi.testclient import TestClient

# 1. Hitta den absoluta sökvägen till 'backend'-mappen
backend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../backend"))

# 2. Lägg till den i Pythons söklista
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

# 3. Nu kan Python köra 'from web.services...' inuti app.py!
from backend.app import app 

client = TestClient(app)

def test_get_movies_success():
    """Test that /movies returns 200 OK."""
    response = client.get("/movies?min_rating=7")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_movies_invalid_rating():
    """Tests that API validates input"""
    response = client.get("/movies?min_rating=11")
    assert response.status_code == 422
