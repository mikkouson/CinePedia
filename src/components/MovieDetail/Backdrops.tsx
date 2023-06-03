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
                  src={"https://image.tmdb.org/t/p/w1280" + backdrops.file_path}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      }
    </div>
  );
};
export default Backdrops;
