import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Genre {
  id: number;
  name: string;
}

interface MovieProps {
  vote_average: number;
  release_date: string;
  poster_path: string;
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  runtime: number;
  original_language: string;
  genres: Genre[];
}

const MovieInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieProps | null>(null);
  const [movieLogo, setMovieLogo] = useState<string | null>(null);
  const [trailer, setTrailer] = useState<string | null>(null);

  useEffect(() => {
    async function getMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3fd2be6f0c70a2a598f084ddfb75487c&append_to_response=videos`
      );
      const data = await res.json();
      setMovie(data);
      setTrailer(data.videos.results[0]?.key || null);
    }

    async function getMovieLogo() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=3fd2be6f0c70a2a598f084ddfb75487c`
      );
      const data = await res.json();
      setMovieLogo(data.logos[0]?.file_path || null);
    }

    getMovie();
    getMovieLogo();
  }, [id]);

  function convertTime(time: number) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}h ${minutes}m`;
  }

  if (!movie) return <div>Not Found</div>;

  return (
    <div className="text-white texl-xl">
      <div className="relative">
        <img
          src={"https://image.tmdb.org/t/p/w1280" + movie.backdrop_path}
          className="w-full h-[100vh] object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-[#00000059] "></div>

        <div className="w-full h-full details absolute top-0 flex items-center pl-10 pr-10">
          <div className="w-[50%] flex flex-col">
            <div className="w-[50%] ">
              {movieLogo && (
                <img
                  src={"https://image.tmdb.org/t/p/w1280" + movieLogo}
                  className="z-[70] x w-full h-full  bg-center mb-10  min-w-[30rem]"
                  alt=""
                />
              )}
            </div>
            <h1 className="text-white text-3xl font-medium mb-1">
              {movie.title}
            </h1>
            <p className="text-lg  mb-5">
              {movie.release_date.substr(0, 4)} |{" "}
              {movie.genres.map((genre) => genre.name).join(", ")} |{" "}
              {convertTime(movie.runtime)}
            </p>

            <p className="text-[#ffffffc4] font-normal text-lg">
              {movie.overview}
            </p>
          </div>
          <div className="w-[60%]"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {trailer && (
            <div className="mt-5">
              <h2 className="text-lg text-white">Watch Trailer</h2>
              <iframe
                width="1000"
                height="600"
                src={`https://www.youtube.com/embed/${trailer}`}
                title="Trailer"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
