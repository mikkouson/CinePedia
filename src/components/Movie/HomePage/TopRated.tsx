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
        <section className="max-w-screen-2xl mx-auto px-5  1lg:px-10  2xl:px-0">
          <h2 className="text-white text-3xl font-semibold my-6">Top Rated</h2>
          <MovieList movies={topRated} />
        </section>
      )}
    </>
  );
};
export default TopRated;
