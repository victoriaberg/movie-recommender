from abc import ABC, abstractmethod
from models.user import User

class Recommender(ABC):
    @abstractmethod
    def recommend(self, user: User, k: int = 10):
        """Return top-k recommended movies for a given user"""
        pass
