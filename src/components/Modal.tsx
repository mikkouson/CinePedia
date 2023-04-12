import React, { useEffect, useState } from "react";

interface ModalProps {
  handleCloseModal: () => void;
  movie: {
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
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-grayscale z-50"
      onClick={handleCloseModal}
    >
      <div className=" relative bg-white h-[26rem] w-[50rem] -z-50">
        <h2 className="absolute">{movie.title}</h2>
        <div className=" bg-gradient-to-r from-black to-transparent z-200 h-[26rem] w-[50rem]">
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
