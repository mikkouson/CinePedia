import { useEffect, useState } from "react";
import { fetchTopRated } from "../../../api/api";
import MovieList from "../MovieDetail/MovieList";

const TopRated = () => {
  const [topRated, setTopRated] = useState();
  useEffect(() => {
    const data = async () => {
      setTopRated(await fetchTopRated());
    };
    data();
  }, []);
  return (
    <>
      {topRated && (
        <section>
          <h2 className="text-white text-3xl font-semibold my-6">Top Rated</h2>
          <MovieList movies={topRated} />
        </section>
      )}
    </>
  );
};
export default TopRated;
