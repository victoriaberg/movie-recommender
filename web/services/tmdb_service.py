import requests

class TMDbService:
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.base_url = "https://api.themoviedb.org/3"

    def get_movies(self, min_rating=0, max_results=20, max_pages=5):
        movies = []
        for page in range(1, max_pages + 1):
            url = f"{self.base_url}/discover/movie"
            params = {
                "api_key": self.api_key,
                "language": "en-US",
                "sort_by": "popularity.desc",
                "vote_average.gte": min_rating,
                "page": page
            }
            response = requests.get(url, params=params)
            if response.status_code != 200:
                print("TMDb API error:", response.status_code, response.text)
                break
            data = response.json()
            for m in data.get("results", []):
                movies.append({"title": m["title"], "rating": m["vote_average"]})
            if len(movies) >= max_results:
                break
        return movies[:max_results]
