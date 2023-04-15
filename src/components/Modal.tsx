import React, { ReactNode, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
interface ModalProps {
  handleCloseModal: () => void;
  movie: {
    vote_average: ReactNode;
    overview: ReactNode;
    title: string;
    backdrop_path: string;
  };
}

const Modal = ({ handleCloseModal, movie }: ModalProps) => {
  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");
    document.body.classList.add("overflow-hidden");

    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-grayscale z-50 "
      onClick={handleCloseModal}
    >
      <div className=" shadow-lg shadow-slate-700 relative flex  items-center bg-white h-[26rem] w-[50rem] -z-50">
        <div className="details absolute top-0 p-10  w-[50%]">
          <div className=" container"></div>
          <h1 className="flex text-2xl text-gray-100 font-medium">
            {movie.title}
          </h1>

          <h3 className="flex  text-white my-2">
            {" "}
            Rating |{"\u00A0"}
            <AiFillStar className="text-yellow-500  self-center mr-2" />
            {movie.vote_average}
          </h3>
          <h3 className="flex  text-white">{movie.overview}</h3>
        </div>
        <div className=" bg-gradient-to-r from-black to-transparent  h-[26rem] w-[50rem]">
          <img
            src={"https://image.tmdb.org/t/p/w1280" + movie.backdrop_path}
            className=" absolute -z-50 top-70 h-[26rem] w-[50rem]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
