from recommender.base import Recommender

class PopularityRecommender(Recommender):
    def __init__(self, movies: list):
        self.movies = movies

    def recommend(self, user, k: int = 10):
        sorted_movies = sorted(self.movies, key=lambda m: m.average_rating(), reverse=True)
        return sorted_movies[:k]
