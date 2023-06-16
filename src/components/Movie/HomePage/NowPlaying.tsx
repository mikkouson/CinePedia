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
        <section className="max-w-screen-2xl mx-auto px-5  1lg:px-10  2xl:px-0">
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
