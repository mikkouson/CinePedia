import { useEffect, useState } from "react";
import { fetchBackdrop } from "../../api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
interface Backdrop {
  id: number;
  name: string;
  file_path: string;
}

const Backdrops = ({ movieId }: { movieId: number }) => {
  const [backdrop, setBackdrop] = useState<Backdrop[]>([]);

  useEffect(() => {
    const data = async () => {
      setBackdrop(await fetchBackdrop(movieId));
    };
    data();
  }, [movieId]);

  return (
    <>
      {backdrop && backdrop.length > 0 && (
        <div className=" boxes w-full relative  max-w-screen-2xl mx-auto z-[101]">
          <div className="absolute w-10 h-full right-0 bg-gradient-to-r from-transparent to-[#0e0e0e] z-[40]"></div>
          <div className="absolute w-10 left-0 h-full inset-x-0  bg-gradient-to-l from-transparent to-[#0e0e0e] z-[40]"></div>
          {
            <Swiper
              spaceBetween={0}
              slidesPerView={8}
              grabCursor={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 5,
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
                <SwiperSlide className="mr-4" key={index}>
                  <img
                    className="w-full h-full object-cover rounded-xl mr-10"
                    src={
                      "https://image.tmdb.org/t/p/w1280" + backdrops.file_path
                    }
                    loading="lazy"
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          }
        </div>
      )}
    </>
  );
};
export default Backdrops;
