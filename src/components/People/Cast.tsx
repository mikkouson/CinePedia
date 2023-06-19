import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { fetchMovieCredits } from "../../api/api";
import PeopleList from "./PeopleList";

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
            <PeopleList people={cast} />
          </div>
        </section>
      )}
    </>
  );
};

export default Cast;
