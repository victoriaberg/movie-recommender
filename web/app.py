from fastapi import FastAPI, Request, Query
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from web.services.tmdb_service import TMDbService
import os

app = FastAPI()
templates = Jinja2Templates(directory="web/templates")

# Use environment variable for API key
TMDB_API_KEY = os.environ.get("TMDB_API_KEY", "YOUR_API_KEY_HERE")
tmdb = TMDbService(TMDB_API_KEY)

@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    # Render home page with empty movies list
    return templates.TemplateResponse("index.html", {"request": request, "movies": []})

@app.get("/movies", response_class=HTMLResponse)
def movies(request: Request, min_rating: float = Query(0, ge=0, le=10)):
    movie_list = tmdb.get_movies(min_rating=min_rating)
    return templates.TemplateResponse(
        "index.html",
        {"request": request, "movies": movie_list}
    )

