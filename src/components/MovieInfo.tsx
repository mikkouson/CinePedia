import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { AiFillStar } from "react-icons/ai";

interface Genre {
  id: number;
  name: string;
}
interface Backdrop {
  id: number;
  name: string;
  file_path: string;
}
interface Logos {
  id: number;
  name: string;
  file_path: string;
}

interface Cast {
  id: number;
  name: string;
  profile_path: string;
  character: string;
  known_for_department: string;
}

interface Parts {
  id: number;
  name: string;
  vote_average: number;
  release_date: string;
  title: string;
  poster_path: string;
}
interface Collection {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  parts: Parts[];
}
interface Crew {
  id: number;
  name: string;
  profile_path: string;
  character: string;
  known_for_department: string;
  job: string;
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
  belongs_to_collection: Collection;
  genres: Genre[];
  cast: Cast[];
  backdrop: Backdrop[];
}
console.log("ad");

const MovieInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieProps | null>(null);
  const [movieLogo, setMovieLogo] = useState<Logos[]>([]);
  const [trailer, setTrailer] = useState<string | null>(null);
  const [showTrailer, setShowTrailer] = useState<boolean>(false);
  const [cast, setCast] = useState<Cast[]>([]);
  const [backdrop, setBackdrop] = useState<Backdrop[]>([]);
  const [director, setDirector] = useState<Crew[]>([]);
  const [collection, setCollection] = useState<Collection | null>(null);

  useEffect(() => {
    async function getMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3fd2be6f0c70a2a598f084ddfb75487c&append_to_response=videos`
      );
      const data = await res.json();
      setMovie(data);
      setTrailer(data.videos.results[0]?.key || null);
    }

    async function getCast() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=3fd2be6f0c70a2a598f084ddfb75487c`
      );
      const data = await res.json();
      setCast(data.cast || []);
    }

    async function getDirector() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=3fd2be6f0c70a2a598f084ddfb75487c`
      );
      const data = await res.json();
      const directors = data.crew.filter(
        (crew: Crew) => crew.job === "Director" || crew.job === "Writer"
      );
      setDirector(directors);
    }

    async function getBackdrop() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=3fd2be6f0c70a2a598f084ddfb75487c`
      );
      const data = await res.json();
      setBackdrop(
        data.backdrops.map((backdrop: Backdrop) => backdrop.file_path)
      );
    }

    async function getMovieLogo() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=3fd2be6f0c70a2a598f084ddfb75487c`
      );
      const data = await res.json();
      setMovieLogo(data.logos.map((logo: Logos) => logo.file_path));
    }

    async function getCollection() {
      try {
        if (movie && movie.belongs_to_collection) {
          const res = await fetch(
            `https://api.themoviedb.org/3/collection/${movie.belongs_to_collection.id}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`
          );
          const data = await res.json();
          setCollection(data);
        }
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }

    getCollection();
    getMovieLogo();
    getBackdrop();
    getDirector();
    getCast();
    getMovie();
  }, [movie, id]);

  function convertTime(time: number) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}h ${minutes}m`;
  }

  if (!movie) return <div>Not Found</div>;

  const posterUrl = `https://image.tmdb.org/t/p/w1280${collection?.backdrop_path}`;

  return (
    <main className="text-white">
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
          <div className="w-[50%] flex flex-col">
            <div className="w-[50%] ">
              {movieLogo.length > 0 && (
                <img
                  src={"https://image.tmdb.org/t/p/w1280" + movieLogo[0]}
                  className="z-[70] x w-full h-full max-h-[15rem] bg-center mb-10  "
                  alt=""
                />
              )}
            </div>
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

            {trailer && (
              <span className="text-white inline-block mt-5">
                <a
                  className="cursor-pointer  text-[#ffffff] bg-[#ffffff11] rounded-xl px-8 py-2   hover:bg-[#ffffff1f]"
                  onClick={() => setShowTrailer(true)}
                >
                  Watch Random Trailer
                </a>
              </span>
            )}
          </div>
          <div className="w-[60%]"></div>
        </div>
        <div className="boxes absolute bottom-[1rem]  z-[41] ">
          {
            <Swiper
              spaceBetween={0}
              slidesPerView={8}
              grabCursor={true}
              style={{ width: "1536px" }}
              resizeObserver={false}
            >
              <div className="  h-32 w-[200px] bg-transparent flex ">
                {backdrop.map((backdrops, index) => (
                  <SwiperSlide className="mr-4" key={index}>
                    <img
                      className="w-full h-full object-cover rounded-xl mr-10"
                      src={"https://image.tmdb.org/t/p/w1280" + backdrops}
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          }
        </div>

        {showTrailer && trailer && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center  bg-opacity-50 backdrop-filter backdrop-grayscale z-50">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="mt-5 ">
                <button
                  className="text-lg text-white cursor-pointer "
                  onClick={() => setShowTrailer(false)}
                >
                  X
                </button>
                <iframe
                  width="1000"
                  height="600"
                  src={`https://www.youtube.com/embed/${trailer}`}
                  title="Trailer"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </header>
      <section className="movieDetails  max-w-screen-2xl mx-auto">
        <h2 className="text-white text-3xl font-bold mt-20">Casts:</h2>
        <div className="Cast my-5 w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={9}
            grabCursor={true}
            style={{ width: "1536px" }}
            resizeObserver={false}
          >
            {cast.map((casts) => (
              <SwiperSlide key={casts.id}>
                <div className="castContainer  mr-2">
                  <div className="box w-36 h-44 ">
                    {casts.profile_path ? (
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w1280" +
                          casts.profile_path
                        }
                        className="w-full h-full object-cover rounded-xl "
                        alt="Profile N/A"
                      />
                    ) : (
                      <img
                        src="https://placehold.co/250x400/000000/000000f1?text=N/A"
                        className="w-full h-full object-cover rounded-xl "
                        alt="Profile N/A"
                      />
                    )}
                  </div>
                  <div className="castDetails font-normal whitespace-nowrap overflow-hidden text-ellipsis mt-2">
                    <p className="font-semibold"> {casts.name}</p>
                    <p className="text-[#ffffffc4]">{casts.character}</p>
                    <p className="text-[#ffffffc4]">
                      {casts.known_for_department}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="movieDetails  max-w-screen-2xl mx-auto">
        <h2 className="text-white text-3xl font-bold mt-6">
          Directors / Writers:
        </h2>
        <div className="Cast my-5 w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={9}
            grabCursor={true}
            style={{ width: "1536px" }}
            resizeObserver={false}
          >
            {director.map((directors, index) => (
              <SwiperSlide key={index}>
                <div className="castContainer  mr-2">
                  <div className="box w-36 h-44 ">
                    {directors.profile_path ? (
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w1280" +
                          directors.profile_path
                        }
                        className="w-full h-full object-cover rounded-xl "
                        alt="Profile N/A"
                      />
                    ) : (
                      <img
                        src="https://placehold.co/250x400/000000/000000f1?text=N/A"
                        className="w-full h-full object-cover rounded-xl "
                        alt="Profile N/A"
                      />
                    )}
                  </div>
                  <div className="castDetails font-normal whitespace-nowrap overflow-hidden text-ellipsis mt-2">
                    <p className="font-semibold"> {directors.name}</p>
                    <p className="text-[#ffffffc4]">{directors.character}</p>
                    <p className="text-[#ffffffc4]">
                      {directors.known_for_department}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {collection && (
        <section
          className="relative Collections bg-cover bg-fixed "
          style={{ backgroundImage: `url(${posterUrl})` }}
        >
          <div className="absolute bottom-0  h-full inset-x-0  bg-gradient-to-b from-[#0e0e0e00] to-[#0e0e0e] z-[123]"></div>
          <div className="absolute top-0 h-full inset-x-0  bg-gradient-to-t from-[#0e0e0e00] to-[#0e0e0e] z-[123]"></div>

          <div className=" max-w-screen-2xl mx-auto py-10 flex items-center ">
            <div className="poster w-[40rem] h-full  z-[125] ">
              <img
                src={`https://image.tmdb.org/t/p/w1280${collection?.poster_path}`}
                className="w-full h-full object-cover rounded-xl"
                alt="Profile N/A"
              />
            </div>
            <div className="details  ml-5 z-[125]">
              <h2 className="text-3xl font-bold">{collection?.name}</h2>
              <p className="text-[#ffffffc4] font-normal text-lg">
                {collection?.overview}
              </p>
              <div className="collections parts mt-5 grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 md p-2">
                {collection?.parts.map((parts) => (
                  <div className="castContainer  mr-2 " key={parts?.id}>
                    <div className="box w-36 h-44 ">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w1280" +
                          parts?.poster_path
                        }
                        className="w-full h-full object-cover rounded-xl "
                        alt="Profile N/A"
                      />
                    </div>
                    <div className="p-3 ">
                      <div className="text-gray-600 truncate font-bold hover:text-stone-900 cursor-pointer z-[100]">
                        <Link to={`/movie/${parts?.id}`}>
                          <h4 className="Title whitespace-nowrap overflow-hidden text-ellipsis text-white">
                            {parts?.title}
                          </h4>
                        </Link>
                      </div>
                      <div className="flex justify-between text-[#ffffffc4]">
                        {parts?.release_date
                          ? parts?.release_date.slice(0, 4)
                          : "Soon"}
                        <div className="flex ">
                          <AiFillStar className="text-yellow-500 self-center mr-2" />
                          {parts?.vote_average}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};
export default MovieInfo;
