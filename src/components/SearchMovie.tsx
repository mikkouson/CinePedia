import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieContainer from "./MovieContainer";
import { fetchsearch } from "../api/api";

const SearchMovie = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const data = async () => {
      setMovies(await fetchsearch(String(query)));
    };
    data();
  }, [query]);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <MovieContainer movies={movies} />
    </div>
  );
};

export default SearchMovie;
