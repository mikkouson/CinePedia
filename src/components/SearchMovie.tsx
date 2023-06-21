import { SetStateAction, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieContainer from "./MovieContainer";
import { fetchSearch } from "../api/api";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
const SearchMovie = () => {
  const { query = "", page } = useParams<{ query?: string; page?: string }>();

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(page ? Number(page) : 1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(page ? Number(page) : 1);
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetchSearch(query, currentPage);
      setMovies(results.results);
      setTotalPages(results.total);
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

  const goPage = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
    navigate(`/movies/${query}/${pageNumber}`);
  };

  const pages = () => {
    const pageArray = [];
    const visiblePages = 5;
    const startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    const endPage = Math.min(startPage + visiblePages - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pageArray.push(i);
    }

    return pageArray;
  };

  const pagess = pages();

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex justify-center pt-24 ">
        {currentPage > 1 && (
          <MdOutlineNavigateBefore
            onClick={goBack}
            className="text-white w-8 h-8 cursor-pointer"
          />
        )}
        <div className="pages flex text-white">
          {pagess.map((pageNumber) => (
            <button
              key={pageNumber}
              className="text-white mr-2 bg-[#fdfdfd16] p-1"
              onClick={() => goPage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        {totalPages > currentPage && (
          <MdOutlineNavigateNext
            onClick={goToNextPage}
            className="text-white w-8 h-8 cursor-pointer"
          />
        )}
      </div>
      <MovieContainer movies={movies} />

      <div className="flex justify-center ">
        {currentPage > 1 && (
          <MdOutlineNavigateBefore
            onClick={goBack}
            className="text-white w-8 h-8 cursor-pointer"
          />
        )}
        <div className="pages flex text-white">
          {pagess.map((pageNumber) => (
            <button
              key={pageNumber}
              className="text-white mr-2 bg-[#fdfdfd16] p-1"
              onClick={() => goPage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        {totalPages > currentPage && (
          <MdOutlineNavigateNext
            onClick={goToNextPage}
            className="text-white w-8 h-8 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default SearchMovie;
