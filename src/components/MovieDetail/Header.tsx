import Backdrops from "./Backdrops";
import Logo from "./Logo";
import Trailer from "./Trailer";

interface Genre {
  id: number;
  name: string;
}

interface MovieProps {
  vote_average: number;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  runtime: number;
  original_language: string;
  status: string;
  genres: Genre[];
}

// convert time function
function convertTime(time: number) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}m`;
}
const Header = ({ movieId, movie }: { movieId: number; movie: MovieProps }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`;

  return (
    <>
      <header
        className="relative w-full h-full bg-cover bg-no-repeat bg-center flex flex-col"
        style={{ backgroundImage: `url(${posterUrl})` }}
      >
        <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-black to-[#00000059]  "></div>

        <div className="flex Container max-w-screen-2xl mx-auto z-[101] ">
          <div className="w-full sm:w-1/2  py-16">
            {/* Movie logo image */}
            <Logo movieId={movieId} />
            <h1 className="text-4xl lg:text-5xl text-white font-medium mb-1">
              {movie.title}
            </h1>
            <div className="text-sm lg:text-lg">
              <p className="text-[#ffffffd0] text-lg mb-5">
                {movie.release_date.substr(0, 4)} | {movie.status} |{" "}
                {convertTime(movie.runtime)}
              </p>
              {/* Movie tags/genre */}
              <h3 className="font-semibold text-[#ffffffd0] text-xl">Tags:</h3>
              <div className="tags my-3">
                {movie.genres.map((genre) => (
                  <a
                    className="cursor-pointer text-[#ffffff] bg-[#ffffff11] rounded-xl px-4 py-1 mr-2 hover:bg-[#ffffff1f]"
                    key={genre.id}
                  >
                    {genre.name}
                  </a>
                ))}
              </div>
              <p className="text-[.9rem] lg:text-lg text-[#ffffffc4] font-normal">
                {movie.overview}
              </p>
              {/* Get movie Trailer */}
              <Trailer movieId={movieId} />
            </div>
          </div>
        </div>
        <Backdrops movieId={movieId} />
        <div className="absolute bottom-[0rem] h-[30rem] bg-gradient-to-b from-transparent to-[#0e0e0e] w-full z-[100]"></div>
      </header>
    </>
  );
};

export default Header;
