import { useEffect, useState } from "react";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { BsBalloon, BsBookmark } from "react-icons/bs";
import { MdAutoGraph } from "react-icons/md";
import { useParams } from "react-router-dom";
import { fetchPerson, fetchPersonCredits } from "../api/api";
import MovieList from "../components/Movie/MovieDetail/MovieList";

interface Person {
  name: string;
  profile_path: string;
  biography: string;
  known_for_department: string;
  popularity: number;
}
const PersonInfo = () => {
  const { id } = useParams();

  const [person, setPerson] = useState<Person | null>(null);
  const [credits, setCredits] = useState([]);
  const [formattedDate, setFormattedDate] = useState("");
  const [isclamp, setClamp] = useState(false);

  const unclamp = () => {
    setClamp(!isclamp);
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPerson = await fetchPerson(Number(id));
      setPerson(fetchedPerson);

      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      } as const;
      const formattedDate = new Date().toLocaleDateString("en-US", options);
      setFormattedDate(formattedDate);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const data = async () => {
      setCredits(await fetchPersonCredits(Number(id)));
    };
    data();
  }, []);
  const movie =
    credits.cast &&
    [...credits.cast]
      .sort((b, a) => a.popularity - b.popularity)
      .slice(0, 10)
      .map((movie) => movie);

  return (
    <>
      <div className="section  ">
        <div className="banner w-full h-52 bg-[#c8c8c8] absolute z-[-1]"></div>
        <div className="block  2md:flex w-full pt-[7rem] max-w-screen-2xl mx-auto">
          <div className="flex flex-col  items-center 2md:block     ">
            <div className="min-h-36 min-w-36 h-36 w-36 2md:h-52 2md:w-52   rounded-full flex items-center justify-center overflow-hidden bg-slate-500">
              <img
                src={"https://image.tmdb.org/t/p/w1280" + person?.profile_path}
                className=" w-full h-full object-cover"
                alt="Profile N/A"
                loading="lazy"
              />
            </div>
            <button className="w-1/2 2md:w-full bg-[#616161]  h-9 mt-5 p-2 text-white text-lg flex justify-center items-center rounded-lg">
              <BsBookmark className="mr-2" />
              Follow
            </button>
          </div>
          <div className="px-2 3xs:px-6 lg:px-3 py-3 ml-0 mt-0 w-full  2md:text-start  2md:ml-10 2md:mt-24 2md:w-[80%] h-full   text-[#a5a5a5] ">
            <h3 className="text-white font-semibold  mt-2 text-2xl 3xs:text-3xl">
              {person?.name}
            </h3>

            {person && person?.biography && (
              <>
                <h4 className="text-[#fffffff0] font-semibold  mt-3 text-xl 3xs:text-xl ">
                  Biography
                </h4>
                <div className="biography">
                  <p
                    className={`${
                      isclamp ? "line-clamp-none" : "line-clamp-3"
                    } mt-2   text-justify leading-0 text-[.9rem] 3xs:text-[1.1rem]  3xs:leading-7`}
                  >
                    {person?.biography}
                  </p>
                  <button onClick={unclamp} className="text-[#ffffff]">
                    {isclamp ? "Hide" : "Read more"}
                  </button>
                </div>
              </>
            )}

            <div className="text-[.9rem] 3xs:text-base flex flex-wrap truncate  mt-2 text-[#a5a5a5] w-full">
              <div className="bday flex">
                <BsBalloon className="w-6 h-6 mr-1" />
                Born {""}
                {formattedDate}
              </div>
              <div className="popularity flex ml-2">
                <AiOutlineFileUnknown className="w-6 h-6 mr-1" />
                Known For {""}
                {person?.known_for_department}
              </div>
              <div className="popularity flex ml-2">
                <MdAutoGraph className="w-6 h-6 mr-1" />
                Popularity {""}
                {person?.popularity}
              </div>
            </div>
          </div>
        </div>
      </div>
      {movie && (
        <section className="max-w-screen-2xl mx-auto px-5  1lg:px-10  2xl:px-0">
          <h2 className="text-white text-3xl font-semibold my-6">
            Popular Movies
          </h2>
          <MovieList movies={movie} />
        </section>
      )}
    </>
  );
};

export default PersonInfo;
