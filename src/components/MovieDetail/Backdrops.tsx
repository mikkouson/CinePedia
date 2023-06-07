import React, { useEffect, useState, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

// ...

const swiperRef = useRef<SwiperType | null>(null);

import { fetchBackdrop } from "../../api/api";
import Bg from "./Bg";

interface Backdrop {
  id: number;
  name: string;
  file_path: string;
}

import { Autoplay } from "swiper";
import "swiper/css/effect-coverflow";

const Backdrops = ({ movieId }: { movieId: number }) => {
  const [backdrop, setBackdrop] = useState<Backdrop[]>([]);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [activeSlidePath, setActiveSlidePath] = useState<string>("");

  const swiperRef = useRef<SwiperType | null>(null);
  console.log(activeSlidePath);

  useEffect(() => {
    const fetchData = async () => {
      const backdropData = await fetchBackdrop(movieId);
      setBackdrop(backdropData);
    };
    fetchData();
  }, [movieId]);

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
    const currentBackdrop = backdrop[swiper.activeIndex];
    setActiveSlidePath(currentBackdrop.file_path);
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeSlide);
    }
  }, [activeSlide]);

  const handleAutoplay = () => {
    if (swiperRef.current && activeSlide !== swiperRef.current.realIndex) {
      setActiveSlide(swiperRef.current.realIndex);
    }
  };

  return (
    <>
      {backdrop && backdrop.length > 0 && (
        <div className="boxes w-full relative max-w-screen-2xl mx-auto z-[101]">
          <div className="absolute w-10 h-full right-0 bg-gradient-to-r from-transparent to-[#0e0e0e] z-[40]"></div>
          <div className="absolute w-10 left-0 h-full inset-x-0 bg-gradient-to-l from-transparent to-[#0e0e0e] z-[40]"></div>
          {/* {activeSlidePath && <Bg activeSlidePath={activeSlidePath} />} */}

          <Swiper
            spaceBetween={0}
            slidesPerView={8}
            grabCursor={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              on: {
                end: handleAutoplay,
              },
            }}
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
            className="w-full mySwiper1"
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {backdrop.map((backdrops, index) => (
              <SwiperSlide
                className={`mr-4 ${
                  index === activeSlide ? "border-2 border-blue-500" : ""
                }`}
                key={index}
                onClick={() => setActiveSlide(index)}
              >
                <img
                  className="w-full h-full object-cover rounded-xl mr-10"
                  src={"https://image.tmdb.org/t/p/w1280" + backdrops.file_path}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Backdrops;
