import React, { ReactNode, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

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
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-grayscale z-50 ">
      <div
        className="fixed w-full h-full -z-50"
        onClick={handleCloseModal}
      ></div>
      <div className="  md:w-auto   w-full">
        {/*modal card  */}
        <div className=" mx-5 rounded-md shadow-lg shadow-[#ffffff44] relative flex  items-center z-50 ">
          <div className="right-10 top-10 absolute z-50 h-full">
            <MdOutlineClose
              className="text-3xl text-[#ffffff] bg-[#212020] p-1 rounded-3xl cursor-pointer hover:bg-red-700"
              onClick={handleCloseModal}
            />
          </div>

          <div className="details absolute top-0 p-10 pr-10 sm:pr-0 sm:w-[50%] sm:p-10 w-full">
            <h1 className="flex  text-gray-100 font-medium xs:text-2xl text-lg">
              {movie.title}
            </h1>

            <h3 className="flex whitespace-normal  text-[#ffffffd2] my-2">
              {" "}
              Rating {"\u00A0"}|{"\u00A0"}
              <AiFillStar className="text-yellow-500  self-center mr-2" />
              {movie.vote_average}
            </h3>
            <h3 className=" h-25 line-clamp-6 font-normal text-[#dadadaca] ">
              {movie.overview}
            </h3>
            <button className=" text-[#ffffff] bg-[#ffffff53] rounded-lg px-8 py-1 mt-3  hover:bg-[#ffffff1f]">
              View More
            </button>
          </div>

          <div className="rounded-md  bg-gradient-to-r from-black to-[#00000059] sm:to-transparent h-[26rem] w-[50rem]">
            <img
              src={"https://image.tmdb.org/t/p/w1280" + movie.backdrop_path}
              className=" absolute -z-50 top-70 w-full h-full object-cover bg-center rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
