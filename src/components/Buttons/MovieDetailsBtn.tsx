import React from "react";
import { Link } from "react-router-dom";

const MovieDetailsBtn = ({ movieId }: { movieId: number }) => {
  return (
    <div>
      {" "}
      <Link to={`/movie/${movieId}`}>
        <button className=" text-[#ffffff] border-[1px] border-[#ffffffc6]  px-8 py-1 mt-3  hover:bg-[#ffffff1f]">
          View More
        </button>
      </Link>
    </div>
  );
};

export default MovieDetailsBtn;
