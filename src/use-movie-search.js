import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useMovieSearch() {
  const [search, setSearch] = useState(null);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (search === null) {
      return;
    }

    setError(null);
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: process.env.API_KEY,
          query: search,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        setError("There was an error loading the movie search results. Please try again later.");
      });
  }, [search]);

  return { movies, error, setSearch }
}
