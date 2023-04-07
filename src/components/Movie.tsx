import { AiFillStar } from "react-icons/ai";
interface MovieProps {
  vote_average: number;
  release_date: string;
  poster_path: string;
  id: number;
  title: string;
}

const Movie = ({ movie, handleOpenModal }: { movie: MovieProps }) => {
  return (
    <div className="flex flex-col shadow-2xl rounded-lg">
      <img
        className="w-full h-auto rounded-t-lg flex-1 cursor-pointer"
        src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path}
        alt=""
        onClick={() => handleOpenModal(movie)}
      />
      <div className="p-3">
        <div className="movie" key={movie.id}></div>
        <div className=" text-gray-600  truncate font-bold hover:text-stone-900 cursor-pointer">
          {movie.title}
        </div>
        <div className="flex justify-between">
          {movie.release_date ? movie.release_date.slice(0, 4) : "Soon"}
          <div className="flex">
            <AiFillStar className="text-yellow-500  self-center mr-2" />
            {movie.vote_average}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
