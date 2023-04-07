import { useState } from "react";
import Modal from "../components/Modal";
import MovieContainer from "../components/MovieContainer";
import { useFetch } from "../hooks/useFetch";

interface MovieProps {
  vote_average: number;
  release_date: string;
  poster_path: string;
  id: number;
  title: string;
}

interface HomeProps {
  movies: MovieProps[];
}

const Home = ({ movies }: HomeProps) => {
  const [isOpen, setIsOpen] = useState<MovieProps | null>(null);

  const handleOpenModal = (movie: MovieProps) => {
    setIsOpen(movie);
  };

  const handleCloseModal = () => {
    setIsOpen(null);
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <MovieContainer movies={movies} handleOpenModal={handleOpenModal} />
      {isOpen && (
        <Modal
          onClose={handleCloseModal}
          handleCloseModal={handleCloseModal}
          movie={isOpen}
        />
      )}
    </div>
  );
};

export default Home;
