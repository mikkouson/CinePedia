import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface MovieProps {
  vote_average: number;
  release_date: string;
  poster_path: string;
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
}

const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieProps | null>(null);
  const [movieLogo, setMovieLogo] = useState<MovieProps | null>(null);

  useEffect(() => {
    async function getMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`
      );
      const data = await res.json();
      setMovie(data);
    }
    async function getMovieLogo() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=3fd2be6f0c70a2a598f084ddfb75487c`
      );
      const data = await res.json();
      setMovieLogo(data.logos[0].file_path);
    }

    getMovie();
    getMovieLogo();
  }, [id]);

  if (!movie) return <div>Not Found</div>;

  return (
    <div>
      <div className="relative">
        <img
          src={"https://image.tmdb.org/t/p/w1280" + movie.backdrop_path}
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-[#00000059] "></div>
        <div className="details absolute top-0 p-10 pr-10 sm:pr-0 sm:w-[50%] sm:p-10 w-full">
          <img
            src={"https://image.tmdb.org/t/p/w1280" + movieLogo}
            className=" -z-50 x w-full h-[20rem]  bg-center"
            alt=""
          />
          <p className=" flex flex-column  absolute  text-white">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
