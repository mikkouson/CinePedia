import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { fetchRecommendation } from "../../api/api";

const Recommendation = ({ movieId }: { movieId: number }) => {
  const [movieRecommendation, setMovieRecommendation] = useState({
    results: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      setMovieRecommendation(await fetchRecommendation(movieId));
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {movieRecommendation && movieRecommendation.results.length > 0 && (
        <section className="relative movieDetails max-w-screen-2xl mx-auto">
          <div className="Cast my-5 w-full">
            <h2 className="text-white text-3xl font-bold my-6">
              Recommended Movies
            </h2>
            <MovieList movies={movieRecommendation.results || []} />
          </div>
        </section>
      )}
    </>
  );
};

export default Recommendation;
