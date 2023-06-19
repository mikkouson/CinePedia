import { useEffect, useState } from "react";
import { fetchMovie } from "../../../api/api";
import MovieDetailsBtn from "../../Buttons/MovieDetailsBtn";
import Logo from "./Logo";

interface MovieProps {
  status: string;
  movieId: number;
  movie: {
    title: string;
    overview: string;
    release_date: string;
    status: string;
  };

  genres: {
    id: number;
    name: string;
  }[];
  runtime: number;
}

function convertTime(time: number) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}m`;
}

const Overview = ({
  movieId,
  movie,
  show,
}: MovieProps & { show?: boolean }) => {
  const [movieSpecifics, setMovieSpecifics] = useState<MovieProps>();

  useEffect(() => {
    const fetchData = async () => {
      setMovieSpecifics(await fetchMovie(Number(movieId)));
    };
    fetchData();
  }, [movieId]);

  return (
    <div className="pt-16 1lg:pt-0 detail 1lg:text-start 1lg:items-start text-center items-center h-full w-full flex flex-col justify-center ">
      <div className="w-[50%] flex  justify-center">
        <Logo movieId={movieId} />
      </div>
      <h1 className="text-2xl 2xs:text-2xl hidden 1xs:block">{movie.title}</h1>
      {movie.status}

      <div className="text-sm base:text-lg">
        {movieSpecifics && (
          <>
            <p className="text-[#ffffffd0] text-base mb-5  hidden 1xs:block">
              {movie && movie.release_date
                ? movie.release_date.substr(0, 4)
                : ""}{" "}
              | {movieSpecifics && movieSpecifics.status} |{" "}
              {convertTime(movieSpecifics.runtime)}
            </p>
            <div className="justify-center 1lg:justify-start hidden xs:flex tags my-3  flex-wrap  ">
              <h3 className="font-semibold text-[#ffffffd0] text-xl">Tags:</h3>

              {movieSpecifics.genres.map((genre) => (
                <a
                  className="cursor-pointer text-[#ffffff] bg-[#ffffff11] rounded-xl px-4 py-1 mt-1 mr-2 hover:bg-[#ffffff1f]"
                  key={genre.id}
                >
                  {genre.name}
                </a>
              ))}
            </div>
          </>
        )}

        {/* Movie tags/genre */}
        <p
          className={`hidden 2xs:block text-[.9rem] lg:text-base text-[#ffffffca] font-normal  ${
            show ? "line-clamp-2" : ""
          }`}
        >
          {movie.overview}
        </p>
      </div>
      {show && <MovieDetailsBtn movieId={movieId} />}
    </div>
  );
};

export default Overview;
