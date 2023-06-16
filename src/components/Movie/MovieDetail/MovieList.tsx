import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
interface MovieProps {
  vote_average: number;
  release_date: string;
  poster_path: string;
  id: number;
  title: string;
}
const MovieList = ({ movies }: { movies: MovieProps[] }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={7}
      grabCursor={true}
      resizeObserver={false}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        250: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 3,
        },
        700: {
          slidesPerView: 4,
        },
        1040: {
          slidesPerView: 5,
        },
        1100: {
          slidesPerView: 6,
        },
        1440: {
          slidesPerView: 7,
        },
      }}
      className="max-w-screen-2xl mx-auto"
    >
      {movies &&
        movies.map((result) => (
          <SwiperSlide key={result.id}>
            <div className="movieContainer ml-2">
              <div className=" box  h-[10rem] xs:h-[15rem]  1lg:h-72 w-full  flex flex-col items-center">
                {result.poster_path ? (
                  <>
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w1280" + result.poster_path
                      }
                      className=" h-full object-cover rounded-xl"
                      alt="Profile N/A"
                      loading="lazy"
                    />
                  </>
                ) : (
                  <img
                    src="https://placehold.co/250x400/000000/000000f1?text=N/A"
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                    alt="Profile N/A"
                  />
                )}
              </div>
              <div className="px-2 3xs:px-6 lg:px-3 py-3">
                <div className="text-gray-600 truncate font-bold hover:text-stone-900 cursor-pointer z-[100]">
                  <Link to={`/movie/${result?.id}`}>
                    <h4 className="Title whitespace-nowrap overflow-hidden text-ellipsis text-white">
                      {result.title}
                    </h4>
                  </Link>
                </div>
                <div className="flex justify-between text-[#ffffffc4]">
                  {result?.release_date
                    ? result?.release_date.slice(0, 4)
                    : "Soon"}
                  <div className="flex">
                    <AiFillStar className="text-yellow-500 self-center mr-2" />
                    {result?.vote_average}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MovieList;
