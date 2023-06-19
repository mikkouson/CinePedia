import { Swiper, SwiperSlide } from "swiper/react";
import { MdAutoGraph } from "react-icons/md";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

const PeopleList = ({ people }: any) => {
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
      {people &&
        people.map((person: any) => (
          <SwiperSlide key={person.id}>
            <div className="movieContainer ml-2">
              <Link to={`/person/${person?.id}`}>
                <div className="box  h-[10rem] xs:h-[15rem]  1lg:h-72 w-full  flex flex-col items-center">
                  {person.profile_path ? (
                    <>
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w1280" +
                          person.profile_path
                        }
                        className=" h-full object-cover rounded-xl"
                        alt="Profile N/A"
                        loading="lazy"
                      />
                    </>
                  ) : (
                    <img
                      src="https://placehold.co/250x400/000000/000000f1?text=N/A"
                      className=" h-full object-cover rounded-xl"
                      loading="lazy"
                      alt="Profile N/A"
                    />
                  )}
                </div>
              </Link>

              <div className="px-2 3xs:px-6 lg:px-3 py-3">
                <div className="text-gray-600 truncate font-bold hover:text-stone-900 cursor-pointer z-[100]">
                  <Link to={`/person/${person?.id}`}>
                    <h4 className="Title whitespace-nowrap overflow-hidden text-ellipsis text-white">
                      {person.name}
                    </h4>
                  </Link>
                </div>
                <div className="flex justify-between text-[#ffffffc4]">
                  {person.known_for_department}
                  <div className="flex">
                    <MdAutoGraph className="text-yellow-500 self-center mr-2" />
                    {person.popularity}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default PeopleList;
