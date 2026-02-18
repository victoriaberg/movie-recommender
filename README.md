# 🎬 Movie Recommender System (API Driven)

A modern movie recommendation system built with **Python (FastAPI)** for the backend and **React** for the frontend.

This project demonstrates a full-stack solution where the backend fetches real-time movie data from an external API (The Movie Database, TMDb) and serves it to a user-friendly frontend.


## About This Project

### Overview

<img width="1792" height="974" alt="image" src="https://github.com/user-attachments/assets/d18019e7-e067-4dca-b324-b9e62bc11059" />


This Movie Recommender System is a modular Python application built with FastAPI and Docker. It demonstrates full-stack software engineering skills, including data modeling, algorithm implementation, API development and deployment. Users can retrieve top-rated movies via a REST API and apply filters for various genres (e.g., Comedy, Horror and Sci-Fi) to narrow down their search. The system is designed to easily extend with collaborative filtering, personalized recommendations and additional filtering options.


**Skills showcased:** 

* **Full-Stack Development:** Built with FastAPI and React.
* **API Integration:** Uses an external API (TMDb) for movie data.
* **Containerization (Docker):** Uses Docker Compose to run both the frontend and backend in isolated environments.
* **Clean Code:** Modularized architecture for easy development and maintenance.
* **Dynamic filtering:** Implemented genre-based filtering (All Genres, Action, Comedy, Drama, Horror, Romance and Sci-Fi) and rating thresholds.


## Requirements

* **Docker** and **Docker Compose**
* A valid **TMDB API Key** (required for the backend to fetch movies). You can obtain a free key by creating an account at [https://www.themoviedb.org/](https://www.themoviedb.org/).

## How to run the project with Docker

Docker ensures that your environment is consistent and all dependencies are included.


**Step 1. Access the API**:

The backend service requires your TMDb API key as an environment variable. Replace `<your_api_key>` with your actual key.

```bash
export TMDB_API_KEY=<your_api_key>
```
By inserting your own API at <your_api_key> above.


**Step 2. Build and start containers**:

```bash
docker-compose up --build
```


**Step 3. Open the application**:

Once the containers have started, you can access the application:

Frontend (React App): Open your browser to http://localhost:3000

Backend API (FastAPI): The API runs at http://localhost:8000/movies


## Backend dependencies
These are the minimal libraries required in the Python environment to run the FastAPI backend:

* fastapi   # for API framework
* uvicorn   # server for FastAPI
* requests  # for making HTTP requests
* pytest    # to run tests
* httpx     # required by FastAPI test client

Docker will install these automatically during build.


## Future Improvements
- Implement a caching mechanism to reduce calls to the TMDb API.
- Add filtering year or other movie categories.


## NOTES
This project uses Python 3.11+.

Docker is required to run the project easily across different machines.

The project is modular, so additional recommenders and features can be added without changing the core architecture.
