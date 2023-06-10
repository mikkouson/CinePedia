import { useEffect, useState } from "react";
import { Autoplay, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchBackdrop } from "../../api/api";
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
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const [selectedSlide, setSelectedSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setBackdrop(await fetchBackdrop(movieId));
    };
    fetchData();
  }, [movieId]);
  const handleSlideChange = (swiper: any) => {
    setSelectedSlide(swiper.activeIndex);
  };
  useEffect(() => {
    if (backdrop.length > 0) {
      onActiveSlidePathChange(backdrop[selectedSlide].file_path);
    }
  }, [backdrop[selectedSlide]]);
  return (
    <>
      {backdrop && backdrop.length > 0 && (
        <div className="boxes w-full relative max-w-screen-2xl mx-auto z-[101]">
          <div className="absolute w-10 h-full right-0 bg-gradient-to-r from-transparent to-[#0e0e0e] z-[40]"></div>
          <div className="absolute w-10 left-0 h-full inset-x-0 bg-gradient-to-l from-transparent to-[#0e0e0e] z-[40]"></div>
          <></>
          <Swiper
            spaceBetween={0}
            grabCursor={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Thumbs, Autoplay]}
            className="w-full"
            onSlideChange={handleSlideChange}
          >
            {backdrop.map((backdrops, index) => (
              <SwiperSlide key={index}>
                <img
                  className="hidden w-full h-full object-cover rounded-xl mr-10"
                  src={"https://image.tmdb.org/t/p/w1280" + backdrops.file_path}
                  loading="lazy"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={9}
            grabCursor={true}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="mySwiper "
            autoplay={{
              delay: 10000,
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
          >
            {backdrop.map((backdrops, index) => (
              <SwiperSlide key={index}>
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
