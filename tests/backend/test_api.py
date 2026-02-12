import sys
import os
from fastapi.testclient import TestClient

# To run all tests in the backend folder, run `python -m pytest tests/backend/` from the root of the project.

# Find absolute search way to backend folder
backend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../backend"))
# Add to pythons search list
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)
# Now we can import from backend.app
from backend.app import app 

client = TestClient(app)

def test_get_movies_success():
    """Test that /movies returns 200 OK."""
    response = client.get("/movies?min_rating=7")
    assert response.status_code == 200 # 200 OK
    assert isinstance(response.json(), list) # Response should be a list of movies

def test_get_movies_invalid_rating():
    """Tests that API validates input"""
    response = client.get("/movies?min_rating=11")
    assert response.status_code == 422 # 422 Unprocessable Entity for invalid input
