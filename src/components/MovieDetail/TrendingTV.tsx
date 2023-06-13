import { useEffect, useState } from "react";
import { fetchTV } from "../../api/api";
import MovieList from "./MovieList";

const TrendingTV = () => {
  const [trending, setTrending] = useState();

  useEffect(() => {
    const data = async () => {
      setTrending(await fetchTV());
    };
    data();
  }, []);

  return (
    <>
      {trending && (
        <section>
          <h2 className="text-white text-3xl font-semibold my-6">
            Trending TV Shows
          </h2>
          <MovieList movies={trending} ismovieName={true} />
        </section>
      )}
    </>
  );
};
export default TrendingTV;
