import { useEffect, useState } from "react";
import { fetcghNowPlaying } from "../../../api/api";
import MovieList from "../MovieDetail/MovieList";

const NowPlaying = () => {
  const [trending, setTrending] = useState();

  useEffect(() => {
    const data = async () => {
      setTrending(await fetcghNowPlaying());
    };
    data();
  }, []);

  return (
    <>
      {trending && (
        <section>
          <h2 className="text-white text-3xl font-semibold my-6">
            Now Playing
          </h2>
          <MovieList movies={trending} />
        </section>
      )}
    </>
  );
};
export default NowPlaying;
