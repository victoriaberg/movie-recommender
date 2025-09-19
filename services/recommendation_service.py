import pandas as pd

class RecommendationService:
    def __init__(self):
        self.movies = pd.read_csv("data/movies.csv")  # columns: movieId, title, genres
        self.ratings = pd.read_csv("data/ratings.csv")  # columns: userId, movieId, rating, timestamp

        # Compute average rating per movie
        self.avg_ratings = self.ratings.groupby("movieId")["rating"].mean().reset_index()
        self.movies = self.movies.merge(self.avg_ratings, on="movieId")

    def get_top_movies(self, min_rating=0, max_results=20, max_pages=5):
    movies = []
    for page in range(1, max_pages + 1):
        url = f"{self.base_url}/movie/top_rated"
        params = {"api_key": self.api_key, "language": "en-US", "page": page}
        response = requests.get(url, params=params)
        data = response.json()
        for m in data.get("results", []):
            if m["vote_average"] >= min_rating:
                movies.append({"title": m["title"], "rating": m["vote_average"]})
        if len(movies) >= max_results:
            break
    return movies[:max_results]

