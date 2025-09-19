class Movie:
    def __init__(self, movie_id: int, title: str, genres: list[str], year: int = None):
        self.movie_id = movie_id
        self.title = title
        self.genres = genres
        self.year = year
        self.ratings = []  # list of (user_id, rating)

    def add_rating(self, user_id: int, rating: float):
        self.ratings.append((user_id, rating))

    def average_rating(self) -> float:
        if not self.ratings:
            return 0.0
        return sum(r for _, r in self.ratings) / len(self.ratings)