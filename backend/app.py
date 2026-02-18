import os
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from web.services.tmdb_service import TMDbService

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or restrict to ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Get API key from environment variable
TMDB_API_KEY = os.environ.get("TMDB_API_KEY")
tmdb = TMDbService(TMDB_API_KEY)

@app.get("/movies")
def get_movies(min_rating: float = Query(0, ge=0, le=10), genre: str = Query(None)):
    movie_list = tmdb.get_movies(min_rating=min_rating, genre=genre)
    return movie_list  # returns JSON
    
