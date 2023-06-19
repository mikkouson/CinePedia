import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { fetchDirectors } from "../../api/api";
import PeopleList from "./PeopleList";
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
        <section className="px-5  1lg:px-10  2xl:px-0 relative movieDetails  max-w-screen-2xl mx-auto ">
          <div className="absolute w-10 h-full right-0 bg-gradient-to-r from-transparent to-[#0e0e0e] z-[100]"></div>
          <h2 className="text-white text-3xl font-bold mt-6">
            Directors / Writers:
          </h2>
          <div className="Cast my-5 ">
            <PeopleList people={director} />
          </div>
        </section>
      )}
    </>
  );
};

export default Directors;
