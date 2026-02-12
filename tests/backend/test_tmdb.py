import pytest
from unittest.mock import patch
from backend.web.services.tmdb_service import TMDbService

# To run all tests in the backend folder, run `python -m pytest tests/backend/` from the root of the project.

@patch("backend.web.services.tmdb_service.requests.get")
def test_get_movies_filtering(mock_get):
    """Test that the filtering logic works correctly without calling the real API."""
    mock_get.return_value.status_code = 200 # Mock successful API response
    mock_get.return_value.json.return_value = {
        "results": [
            {"title": "Great Movie", "vote_average": 9.0},
            {"title": "Average Movie", "vote_average": 5.0}
        ]
    }
    service = TMDbService(api_key="fake_key") # API key won't be used due to mocking
    # Test high rating filter
    high_rated = service.get_movies(min_rating=8.0, max_pages=1)
    assert len(high_rated) == 1 
    assert high_rated[0]["title"] == "Great Movie"
    # Test low rating filter
    all_movies = service.get_movies(min_rating=1.0, max_pages=1)
    assert len(all_movies) == 2

@patch("backend.web.services.tmdb_service.requests.get")
def test_tmdb_service_error_handling(mock_get):
    """Test that the service handles API failures."""
    mock_get.return_value.status_code = 401 # Unauthorized
    service = TMDbService(api_key="invalid_key") 
    result = service.get_movies()
    assert result == [] # Should return an empty list rather than crashing
