import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Logo from "./Logo";
import { useState } from "react";
import MovieDetailsBtn from "../Buttons/MovieDetailsBtn";
import { Movie } from "../MovieContainer";

interface HomeProps {
  movies: Movie[];
}

const Headers = ({ movies }: HomeProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const hadleCurrentSlide = (swiper: any) => {
    setCurrentSlide(swiper.currentSlide);
  };
  return (
    <header className="w-full text-white min-h-[80vh] ">
      <Swiper
        spaceBetween={0}
        grabCursor={true}
        modules={[Thumbs, Autoplay]}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        onSlideChange={hadleCurrentSlide}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="w-full h-full min-h-[80vh] flex relative  bg-cover bg-no-repeat bg-center  "
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
              }}
            >
              <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-[#000000] to-[#00000024]  " />

              <div className="w-full max-w-screen-2xl mx-auto z-[110] flex">
                <div className=" detail w-1/2 h-full flex flex-col justify-center  ">
                  <div className="w-[50%]">
                    <Logo movieId={movie.id} />
                  </div>
                  <h1 className="text-2xl 2xs:text-3xl">{movie.title}</h1>

                  <p className="text-[#ffffffb6] mt-3">{movie.overview}</p>
                  <MovieDetailsBtn movieId={movie.id} />
                </div>

                <div className="  posterContainer  w-1/2 flex items-center justify-center z-[200] py-16">
                  <div className=" black  w-[18rem]">
                    <img
                      src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                      className="rounded-xl"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0rem] h-[30rem] bg-gradient-to-b from-transparent to-[#0e0e0e] w-full z-[100]"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative max-w-screen-2xl mx-auto">
        <div className="absolute w-20 h-full right-0 bg-gradient-to-r from-transparent to-[#0e0e0e] z-[40]"></div>
        <div className="absolute w-20 left-0 h-full inset-x-0 bg-gradient-to-l from-transparent to-[#0e0e0e] z-[40]"></div>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={9}
          grabCursor={true}
          modules={[Thumbs]}
          className="mySwiper "
          breakpoints={{
            0: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
            1280: {
              slidesPerView: 7,
            },
            1440: {
              slidesPerView: 8,
            },
          }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="relative">
                <img
                  className="w-full h-full object-cover rounded-xl mr-10  "
                  src={"https://image.tmdb.org/t/p/w1280" + movie.backdrop_path}
                  loading="lazy"
                  alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300  bg-gradient-to-b from-transparent to-[#0e0e0e]  ">
                  <h3 className="text-white text-xl font-semibold text-center cursor-pointer">
                    {movie.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  );
};

export default Headers;
