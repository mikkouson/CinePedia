import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieContainer from "./MovieContainer";
import { fetchSearch } from "../api/api";

const SearchMovie = () => {
  const { query = "", page } = useParams<{ query?: string; page: string }>();

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(Number(page));
  const navigate = useNavigate();
  console.log(movies);

  useEffect(() => {
    setCurrentPage(Number(page));
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetchSearch(query, currentPage);
      setMovies(results);
    };
    fetchData();
  }, [query, currentPage]);

  useEffect(() => {
    const pageNumber = Number(page);
    if (pageNumber && pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
    }
  }, [page, currentPage]);

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    navigate(`/movies/${query}/${nextPage}`);
  };

  const goBack = () => {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    navigate(`/movies/${query}/${prevPage}`);
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <MovieContainer movies={movies} />
      <p className="text-white mt-10">{currentPage}</p>

      <button className="text-white" onClick={goToNextPage}>
        Next Page
      </button>
      {currentPage > 1 && (
        <button className="text-white" onClick={goBack}>
          Back
        </button>
      )}
    </div>
  );
};

export default SearchMovie;
