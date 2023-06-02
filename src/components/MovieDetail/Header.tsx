import Backdrops from "./Backdrops";
import Logo from "./Logo";
import Trailer from "./Trailer";
function convertTime(time: number) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}m`;
}
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
const Header = ({ movieId, movie }: { movieId: number; movie: MovieProps }) => {
  return (
    <div>
      <div className="relative ">
        {movie.backdrop_path ? (
          <img
            src={"https://image.tmdb.org/t/p/w1280" + movie.backdrop_path}
            className="w-full h-[92vh] object-cover"
            alt=""
          />
        ) : (
          <img
            src="https://placehold.co/300x800/000000/000000f1?text=N/A"
            className="w-full h-[92vh] object-cover"
          />
        )}

        <div className="absolute bottom-0 h-60 inset-x-0  bg-gradient-to-b from-transparent to-[#0e0e0e] z-[40]"></div>
      </div>
      <header className="text-white texl-xl max-w-screen-2xl mx-auto">
        <div className="absolute h-[92vh] inset-0 bg-gradient-to-r from-black to-[#00000059] "></div>

        <div className="w-full h-full details absolute top-0 flex items-center">
          <div className="w-[50%] flex flex-col  z-[100]">
            <Logo movieId={movieId} />
            <h1 className="text-white text-5xl font-medium mb-1">
              {movie.title}
            </h1>
            <p className="text-[#ffffffd0] text-lg  mb-5">
              {movie.release_date.substr(0, 4)} | {movie.status} |{" "}
              {convertTime(movie.runtime)}
            </p>

            <h3 className="font-semibold text-[#ffffffd0]  text-xl ">Tags:</h3>
            <div className="tags my-3">
              {movie.genres.map((genre) => (
                <a
                  className="cursor-pointer  text-[#ffffff] bg-[#ffffff11] rounded-xl px-4 py-1 mr-2   hover:bg-[#ffffff1f]"
                  key={genre.id}
                >
                  {genre.name}
                </a>
              ))}
            </div>
            <p className="text-[#ffffffc4] font-normal text-lg">
              {movie.overview}
            </p>

            <Trailer movieId={movieId} />
          </div>
          <div className="w-[60%]"></div>
        </div>
        <Backdrops movieId={movieId} />
      </header>
    </div>
  );
};

export default Header;
