import { useEffect, useState } from "react";
import { fetchMovie } from "../../api/api";
import MovieDetailsBtn from "../Buttons/MovieDetailsBtn";
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
    <div className=" detail  h-full flex flex-col justify-center  ">
      <div className="w-[50%]">
        <Logo movieId={movieId} />
      </div>
      <h1 className="text-2xl 2xs:text-2xl">{movie.title}</h1>
      {movie.status}

      <div className="text-sm base:text-lg">
        {movieSpecifics && (
          <>
            <p className="text-[#ffffffd0] text-base mb-5">
              {movie.release_date.substr(0, 4)} | {movieSpecifics.status} |{" "}
              {convertTime(movieSpecifics.runtime)} {/* Display the runtime */}
            </p>
            <h3 className="font-semibold text-[#ffffffd0] text-xl">Tags:</h3>
            <div className="tags my-3">
              {movieSpecifics.genres.map((genre) => (
                <a
                  className="cursor-pointer text-[#ffffff] bg-[#ffffff11] rounded-xl px-4 py-1 mr-2 hover:bg-[#ffffff1f]"
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
          className={`text-[.9rem] lg:text-base text-[#ffffffca] font-normal  ${
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
