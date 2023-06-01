import { useEffect, useState } from "react";
import { fetchMovies } from "../api/api";

const useFetch = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const data = async () => {
      setMovies(await fetchMovies());
    };
    data();
  }, []);

  return movies;
};
export { useFetch };
