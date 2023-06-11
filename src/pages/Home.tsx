import { useState } from "react";

import Modal from "../components/Modal";
import MovieContainer, { Movie } from "../components/MovieContainer";
import Headers from "../components/MovieDetail/HomeHeader";
import PopularMovie from "../components/MovieDetail/PopularMovie";

interface HomeProps {
  movies: Movie[];
}

const Home = ({ movies }: HomeProps) => {
  const [isOpen, setIsOpen] = useState<Movie | null>(null);

  const handleOpenModal = (movie: Movie) => {
    setIsOpen(movie);
  };

  const handleCloseModal = () => {
    setIsOpen(null);
  };

  return (
    <>
      <Headers movies={movies} />
      <main className="max-w-screen-2xl mx-auto">
        <PopularMovie movies={movies} />
        {/* <MovieContainer movies={movies} handleOpenModal={handleOpenModal} />
        {isOpen && <Modal handleCloseModal={handleCloseModal} movie={isOpen} />} */}
      </main>
    </>
  );
};

export default Home;
