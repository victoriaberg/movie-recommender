from recommender.popularity import PopularityRecommender

class RecommendationService:
    def __init__(self, movies, users):
        self.movies = movies
        self.users = users
        self.recommender = PopularityRecommender(movies)  # default baseline

    def get_top_movies(self, k=10):
        return self.recommender.recommend(None, k)

    def get_recommendations_for_user(self, user_id: int, k=10):
        user = self.users.get(user_id)
        if not user:
            return []
        return self.recommender.recommend(user, k)
