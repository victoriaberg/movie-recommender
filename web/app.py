from fastapi import FastAPI
from services.recommendation_service import RecommendationService

app = FastAPI()

# Dummy in-memory data
movies = []  # TODO: load from dataset
users = {}
service = RecommendationService(movies, users)

@app.get("/movies/top")
def get_top_movies(k: int = 10):
    results = service.get_top_movies(k)
    return [{"id": m.movie_id, "title": m.title, "rating": m.average_rating()} for m in results]

@app.get("/recommendations/{user_id}")
def get_recommendations(user_id: int, k: int = 10):
    results = service.get_recommendations_for_user(user_id, k)
    return [{"id": m.movie_id, "title": m.title, "rating": m.average_rating()} for m in results]
