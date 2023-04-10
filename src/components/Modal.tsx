import React, { useEffect, useState } from "react";

interface ModalProps {
  handleCloseModal: () => void;
  movie: {
    [x: string]: string;
    title: string;
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
      <div className=" bg-white h-[26rem] w-[50rem]">
        {/* <h2>{movie.title}</h2> */}
        <img
          src={"https://image.tmdb.org/t/p/w1280" + movie.backdrop_path}
          className=" mix-blend-multiply  "
          alt=""
        />
      </div>
    </div>
  );
};

export default Modal;
