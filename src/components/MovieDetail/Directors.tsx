import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { fetchDirectors } from "../../api/api";
import "swiper/css";
import "swiper/css/navigation";
interface Crew {
  id: number;
  name: string;
  profile_path: string;
  character: string;
  known_for_department: string;
  job: string;
}
const Directors = ({ movieId }: { movieId: number }) => {
  const [director, setDirector] = useState<Crew[]>([]);

  useEffect(() => {
    const data = async () => {
      const crew = await fetchDirectors(movieId);
      const directors = crew.filter(
        (crew: { job: string }) =>
          crew.job === "Director" || crew.job === "Writer"
      );
      setDirector(directors);
    };
    data();
  }, [movieId]);
  return (
    <>
      {director && director.length > 0 && (
        <section className="relative movieDetails  max-w-screen-2xl mx-auto">
          <div className="absolute w-10 h-full right-0 bg-gradient-to-r from-transparent to-[#0e0e0e] z-[100]"></div>
          <h2 className="text-white text-3xl font-bold mt-6">
            Directors / Writers:
          </h2>
          <div className="Cast my-5 w-full">
            <Swiper
              spaceBetween={0}
              slidesPerView={9}
              grabCursor={true}
              resizeObserver={false}
              className="max-w-screen-2xl mx-auto"
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
                      <p className="text-[#ffffffc4]">{directors.job}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}
    </>
  );
};

export default Directors;
