class User:
    def __init__(self, user_id: int):
        self.user_id = user_id
        self.ratings = {}  # {movie_id: rating}

    def rate_movie(self, movie_id: int, rating: float):
        self.ratings[movie_id] = rating
