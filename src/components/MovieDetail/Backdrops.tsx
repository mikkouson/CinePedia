import React, { useEffect, useRef, useState } from "react";
import { fetchBackdrop } from "../../api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Autoplay]);

interface Backdrop {
  id: number;
  name: string;
  file_path: string;
}

const Backdrops = ({
  movieId,
  onActiveSlidePathChange,
}: {
  movieId: number;
  onActiveSlidePathChange: (path: string) => void;
}) => {
  const [backdrop, setBackdrop] = useState<Backdrop[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setBackdrop(await fetchBackdrop(movieId));
    };
    fetchData();
  }, [movieId]);

  useEffect(() => {
    if (backdrop.length > 0) {
      const currentBackdrop = backdrop[activeIndex];
      onActiveSlidePathChange(currentBackdrop.file_path);
    }
  }, [activeIndex, backdrop, onActiveSlidePathChange]);

  const swiperRef = useRef<any | null>(null);

  const handleMakeActiveImage = (index: number) => {
    setActiveIndex(index);

    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <>
      {backdrop && backdrop.length > 0 && (
        <div className="boxes w-full relative max-w-screen-2xl mx-auto z-[101]">
          <div className="absolute w-10 h-full right-0 bg-gradient-to-r from-transparent to-[#0e0e0e] z-[40]"></div>
          <div className="absolute w-10 left-0 h-full inset-x-0 bg-gradient-to-l from-transparent to-[#0e0e0e] z-[40]"></div>
          <Swiper
            ref={swiperRef}
            spaceBetween={0}
            slidesPerView={8}
            grabCursor={true}
            onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
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
            className="w-full"
          >
            {backdrop.map((backdrops, index) => (
              <SwiperSlide
                className={`mr-4 ${
                  index === activeIndex ? "border-2 border-red-500" : ""
                }`}
                key={index}
                onClick={() => handleMakeActiveImage(index)}
              >
                <img
                  className="w-full h-full object-cover rounded-xl mr-10"
                  src={"https://image.tmdb.org/t/p/w1280" + backdrops.file_path}
                  loading="lazy"
                  alt=""
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
