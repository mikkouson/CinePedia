import { useEffect, useState } from "react";
import MovieContainer from "./MovieContainer";
import { useParams } from "react-router-dom";
const SearchMovie = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${query}`
      );
      const data = await res.json();
      setMovies(data.results);
    }
    getMovies();
  }, [query]);

  return (
    <div className=" max-w-screen-2xl mx-auto">
      <MovieContainer movies={movies} />
    </div>
  );
};
export default SearchMovie;
