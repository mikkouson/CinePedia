import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchMovieCredits } from "../../api/api";
import "swiper/css";
import "swiper/css/navigation";

const Cast = ({ movieId }: { movieId: number }) => {
  interface Cast {
    id: number;
    name: string;
    profile_path: string;
    character: string;
    known_for_department: string;
  }

  const [cast, setCast] = useState<Cast[]>([]);

  useEffect(() => {
    const data = async () => {
      setCast(await fetchMovieCredits(movieId));
    };
    data();
  }, [movieId]);

  return (
    <>
      {cast && cast.length > 0 && (
        <section className="px-5  1lg:px-10  2xl:px-0 relative movieDetails  max-w-screen-2xl mx-auto ">
          <div className="absolute w-10 h-full right-0 bg-gradient-to-r from-transparent to-[#0e0e0e] z-[100]"></div>
          <h2 className="text-white text-3xl font-bold  mt-6">Casts:</h2>
          <div className="Cast my-5 ">
            <Swiper
              spaceBetween={0}
              slidesPerView={9}
              grabCursor={true}
              resizeObserver={false}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 3,
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
                          loading="lazy"
                        />
                      ) : (
                        <img
                          src="https://placehold.co/250x400/000000/000000f1?text=N/A"
                          className="w-full h-full object-cover rounded-xl "
                          loading="lazy"
                          alt="Profile N/A"
                        />
                      )}
                    </div>
                    <div className=" castDetails font-normal whitespace-nowrap overflow-hidden text-ellipsis mt-2 pr-6 py-3 ">
                      <p className="font-semibold"> {casts.name}</p>
                      <p className="text-[#ffffffc4]  whitespace-nowrap overflow-hidden text-ellipsis">
                        {casts.character}
                      </p>
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
      )}
    </>
  );
};

export default Cast;
