import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { fetchCollection } from "../../api/api";
import "swiper/css";
import "swiper/css/navigation";

interface MovieProps {
  vote_average: number;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  runtime: number;
  original_language: string;
  status: string;

  belongs_to_collection: {
    id: number;
  };
}

const Collection = ({ movie }: { movie: MovieProps }) => {
  if (!movie.belongs_to_collection) {
    return null;
  }

  const [collection, setCollection] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      if (movie.belongs_to_collection) {
        setCollection(await fetchCollection(movie.belongs_to_collection.id));
      }
    };
    fetchData();
  }, [movie]);
  const posterUrl = `https://image.tmdb.org/t/p/w1280${collection?.backdrop_path}`;
  return (
    <>
      {collection && (
        <section
          className="px-5  1lg:px-10  2xl:px-0 relative Collections bg-cover bg-fixed bg-center"
          style={{ backgroundImage: `url(${posterUrl})` }}
        >
          <div className="absolute bottom-0  h-full inset-x-0  bg-gradient-to-b from-[#0e0e0e00] to-[#0e0e0e] z-[123]"></div>
          <div className="absolute top-0 h-full inset-x-0  bg-gradient-to-t from-[#0e0e0e00] to-[#0e0e0e] z-[123]"></div>

          <div className=" max-w-screen-2xl mx-auto py-10 flex items-center ">
            <div className="hidden lg:block poster max-w-[15rem] h-full  z-[125] ">
              <img
                src={`https://image.tmdb.org/t/p/w1280${collection?.poster_path}`}
                className="w-full h-full object-cover rounded-xl :"
                alt="Profile N/A"
                loading="lazy"
              />
            </div>
            <div className="details lg:ml-5 z-[125]">
              <h2 className="text-3xl font-bold">{collection?.name}</h2>
              <p className="text-sm lg:text-lg text-[#ffffffc4] font-normal ">
                {collection?.overview}
              </p>
              <div className=" justify-center 1lg:justify-start collections flex flex-wrap   mt-5 p-2">
                {collection?.parts.map((parts: any) => (
                  <div className="castContainer  mr-2 " key={parts.id}>
                    <div className="box w-36 h-44 ">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w1280" +
                          parts?.poster_path
                        }
                        className="w-full h-full object-cover rounded-xl "
                        alt="Profile N/A"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 w-36 ">
                      <div className="text-gray-600 truncate font-bold hover:text-stone-900 cursor-pointer z-[100]">
                        <Link to={`/movie/${parts?.id}`}>
                          <h4 className="Title whitespace-nowrap overflow-hidden text-ellipsis text-white">
                            {parts?.title}
                          </h4>
                        </Link>
                      </div>
                      <div className="flex justify-between text-[#ffffffc4]">
                        {parts?.release_date
                          ? parts?.release_date.slice(0, 4)
                          : "Soon"}
                        <div className="flex ">
                          <AiFillStar className="text-yellow-500 self-center mr-2" />
                          {parts?.vote_average}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Collection;
