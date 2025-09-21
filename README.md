## About This Project

This Movie Recommender System is a modular Python application built with FastAPI and Docker. It demonstrates full-stack software engineering skills, including data modeling, algorithm implementation, API development, and deployment. Users can retrieve top-rated movies via a REST API, and the system is designed to easily extend with collaborative filtering, personalized recommendations, and additional filtering options.  

**Skills showcased:** Python, FastAPI, Docker, data processing (pandas), recommendation algorithms, clean code architecture, modular design, version control (Git/GitHub).



# Movie Recommender System

A modular movie recommender system built with Python (backend) and React (frontend).  
The project demonstrates a clean architecture with:
- Data models for movies and users
- Baseline popularity-based recommendations
- REST API endpoints for recommendations
- Extendable design for future ML algorithms (collaborative filtering, matrix factorization, etc.)



## Running the Project with Docker

Docker ensures that your environment is consistent and all dependencies are included.

1. **Access the API**:

By creating an account here: https://www.themoviedb.org/. Sign in and create a API key for free. Save you API key by typing:
```bash
export TMDB_API_KEY=<your_api_key>
docker-compose up --build
```
By inserting you own API at <your_api_key> above.


Optional steps:
2. **Build the Docker image**:

```bash
docker-compose build frontend
```

3. **Run the Docker container**:

```bash
docker-compose up
```


## Requirements
Make sure requirements.txt contains all libraries needed for the project. At minimum:
fastapi   # for API framework
uvicorn   # server for FastAPI
pandas    # data manipulation and analysis
jinja2    # HTML templating engine
requests  # for making HTTP requests

Docker will install these automatically during build.

## Future Improvements
- Implement collaborative filtering and matrix factorization recommenders
- Add filtering by genre, year, or other movie categories

## NOTES
This project uses Python 3.11+

Docker is required to run the project easily across different machines

The project is modular, so additional recommenders and features can be added without changing the core architecture