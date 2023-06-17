import { useEffect, useState } from "react";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { BsBalloon, BsBookmark } from "react-icons/bs";
import { MdAutoGraph } from "react-icons/md";
import { useParams } from "react-router-dom";
import { fetchPerson, fetchPersonCredits } from "../api/api";

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
  console.log(person);
  return (
    <>
      <div className="section  ">
        <div className="banner w-full h-52 bg-[#c8c8c8] absolute z-[-1]"></div>
        <div className="profile   flex w-full pt-[7rem] max-w-screen-2xl mx-auto">
          <div className="box1 h-52    ">
            <div className="dp w-52 h-52  rounded-full flex items-center justify-center overflow-hidden bg-slate-500">
              <img
                src={"https://image.tmdb.org/t/p/w1280" + person?.profile_path}
                className=" w-full h-full object-cover"
                alt="Profile N/A"
                loading="lazy"
              />
            </div>
            <button className="bg-[#616161] w-full mt-5 p-2 text-white text-lg flex justify-center items-center rounded-lg">
              <BsBookmark className="mr-2" />
              Follow
            </button>
          </div>
          <div className="details h-full w-[80%] mt-24 text-[#a5a5a5] ml-10 ">
            <h3 className="text-white font-semibold text-3xl mt-2">
              {person?.name}
            </h3>

            <h4 className="text-[#fffffff0] font-semibold text-2xl mt-3 ">
              Biography
            </h4>
            <div className="biography">
              <p
                className={`line-clamp-${
                  isclamp ? "none" : "3"
                } mt-2 leading-7 text-[1.1rem]	`}
              >
                {person?.biography}
              </p>
              <button onClick={unclamp} className="text-[#ffffff]">
                {isclamp ? "Hide" : "Read more"}
              </button>
            </div>

            <div className=" flex items-center mt-2 text-[#a5a5a5]">
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
      {/* <ul>
        {credits.length > 0 && (
          <li className="text-white">{credits[0].title}</li>
        )}
      </ul> */}
    </>
  );
};

export default PersonInfo;
