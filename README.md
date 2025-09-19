## About This Project

This Movie Recommender System is a modular Python application built with FastAPI and Docker. It demonstrates full-stack software engineering skills, including data modeling, algorithm implementation, API development, and deployment. Users can retrieve top-rated movies via a REST API, and the system is designed to easily extend with collaborative filtering, personalized recommendations, and additional filtering options.  

**Skills showcased:** Python, FastAPI, Docker, data processing (pandas), recommendation algorithms, clean code architecture, modular design, version control (Git/GitHub).



# Movie Recommender System

A modular movie recommender system built with Python and FastAPI.  
The project demonstrates a clean architecture with:

- Data models for movies and users
- Baseline popularity-based recommendations
- REST API endpoints for recommendations
- Extendable design for future ML algorithms (collaborative filtering, matrix factorization, etc.)

---

## Project Structure
Insert here when done

---

## Running the Project with Docker

Docker ensures that your environment is consistent and all dependencies are included.

1. **Build the Docker image**:

```bash
docker build -t movie-recommender .
```

2. **Run the Docker container**:

```bash
docker run -p 8000:8000 -e TMDB_API_KEY=<YOUR_OWN_API_KEY> movie-recommender
```

3. **Access the API**:

By creating an account here: https://www.themoviedb.org/. Then sign in and create a API key for free. Copy it and paste it into <YOUR_OWN_API_KEY> in the previous step.


## Requirements
Make sure requirements.txt contains all libraries needed for the project. At minimum:
fastapi
uvicorn
pandas
scikit-learn

Docker will install these automatically during build.

## Future Improvements
- Implement collaborative filtering and matrix factorization recommenders
- Add filtering by genre, year, or other movie categories

## NOTES
This project uses Python 3.11+

Docker is required to run the project easily across different machines

The project is modular, so additional recommenders and features can be added without changing the core architecture