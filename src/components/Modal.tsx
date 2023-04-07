import React, { useEffect, useState } from "react";

interface ModalProps {
  handleCloseModal: () => void;
  movie: {
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
      <h2>{movie.title}</h2>
    </div>
  );
};

export default Modal;
