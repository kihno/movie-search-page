import { useEffect, useState } from 'react';
import Movie from './movie';
import useMovieSearch from './use-movie-search';

const MovieSearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const { movies, error, setSearch } = useMovieSearch();

  const handleMovieSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
  };

  return(
    <div>
      <h2>Movie Search Page</h2>
      <form onSubmit={handleMovieSearch} style={{ marginBottom: "30px" }}>
        <input 
          type="text"
          placeholder="Search for a movie"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSearchPage;
