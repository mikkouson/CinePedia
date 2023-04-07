import React, { useEffect, useState } from "react";

const getmovies = async (url: RequestInfo | URL) => {
  const res = await fetch(url);
  const data = await res.json();

  return data.results;
};

const useFetch = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const results = await getmovies(
        "https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
      );
      setMovies(results);
    }

    fetchData();
  }, []);

  return movies;
};

export { useFetch, getmovies };
