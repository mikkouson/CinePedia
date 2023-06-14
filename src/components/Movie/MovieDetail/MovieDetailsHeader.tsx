import { useState } from "react";
import Backdrops from "./Backdrops";
import Logo from "./Logo";
import Trailer from "./Trailer";
import Overview from "./Overview";

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
  const [activeSlidePath, setActiveSlidePath] = useState<string>("");

  const handleActiveSlidePathChange = (path: string) => {
    setActiveSlidePath(path);
  };

  const posterUrl = activeSlidePath
    ? `https://image.tmdb.org/t/p/w1280${activeSlidePath}`
    : "https://placehold.co/300x800/000000/000000f1?text=N/A";

  return (
    <>
      <header>
        <div
          className=" flex 1lg:hidden relative w-full min-h-[20vh] bg-cover bg-no-repeat bg-center  flex-col"
          style={{ backgroundImage: `url(${posterUrl})` }}
        >
          <div className=" flex justify-center my-10 z-[100]">
            <div className="w-[30%] ">
              <Logo movieId={movieId} />
            </div>
          </div>
          <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-[#000000a2] to-[#00000059]  "></div>
          <Backdrops
            movieId={movieId}
            onActiveSlidePathChange={handleActiveSlidePathChange}
          />

          <div className="absolute bottom-[0rem] h-[4rem] bg-gradient-to-b from-transparent to-[#0e0e0e] w-full z-[100]"></div>
        </div>

        <div className=" block items-center 1lg:hidden px-5 w-full h-full">
          <div className=" details marker:h-full w-full  flex max-w-screen-2xl mx-auto z-[101] ">
            <div className="w-full py-0 mt-4 1lg:py-16   ">
              {/* Movie logo image */}
              <div className="details flex items-center">
                <div className="poster w-20 h-full  mr-5">
                  <img
                    className="w-full h-full object-cover rounded-xl mr-10"
                    src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path}
                    loading="lazy"
                  />
                </div>
                <div className="text">
                  <h1 className="text-2xl 2xs:text-3xl">{movie.title}</h1>
                  <div className="text-sm base:text-lg">
                    {/* Movie tags/genre */}
                    <div className="flex items-center my.5">
                      <h3 className="font-semibold text-[#ffffffd0] text-sm mr-2 ">
                        Tags:
                      </h3>
                      <div className="tags flex flex-wrap">
                        {movie.genres.map((genre) => (
                          <a
                            className="cursor-pointer text-[#ffffff] bg-[#ffffff11] rounded-xl px-2 py-1 mr-[.2rem] mt-[.2rem] hover:bg-[#ffffff1f] "
                            key={genre.id}
                          >
                            {genre.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <Trailer movieId={movieId} />
                  </div>
                </div>
              </div>

              {/* Get movie Trailer */}

              <p className="text-[.9rem] lg:text-lg text-[#ffffffa5] font-normal mt-[.5rem] text-justify">
                {movie.overview}
              </p>
            </div>
          </div>
        </div>

        <div
          className="hidden 1lg:flex relative w-full h-full min-h-[100lvh] bg-cover bg-no-repeat bg-center  flex-col"
          style={{ backgroundImage: `url(${posterUrl})` }}
        >
          <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-black to-[#00000059]  "></div>

          <div className=" px-10 2xl:px-0 details marker:h-full w-full min-h-[88lvh] flex items-center max-w-screen-2xl mx-auto z-[101] ">
            <div className="w-full  1lg:w-1/2  py-16">
              {/* Movie logo image */}

              <Overview
                movie={movie}
                movieId={movieId}
                status={""}
                genres={[]}
                runtime={0}
              />

              {/* Get movie Trailer */}
              <Trailer movieId={movieId} />
            </div>
          </div>
          <Backdrops
            movieId={movieId}
            onActiveSlidePathChange={handleActiveSlidePathChange}
          />
          <div className="absolute bottom-[0rem] h-[30rem] bg-gradient-to-b from-transparent to-[#0e0e0e] w-full z-[100]"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
