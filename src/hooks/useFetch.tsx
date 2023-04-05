import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getmovies(url: RequestInfo | URL) {
      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.results);
    }
    {
      getmovies(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
      );
    }
  }, []);

  return movies;
};

export default useFetch;
