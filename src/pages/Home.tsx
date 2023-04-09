// Home.tsx
import { useState } from "react";
import Modal from "../components/Modal";
import MovieContainer, { Movie } from "../components/MovieContainer";
import { useFetch } from "../hooks/useFetch";

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

  const moviesWithProps = movies.map((movie) => ({
    ...movie,
    vote_average: 0,
    release_date: "",
  }));

  return (
    <div className="max-w-screen-2xl mx-auto">
      <MovieContainer
        movies={moviesWithProps}
        handleOpenModal={handleOpenModal}
      />
      {isOpen && <Modal handleCloseModal={handleCloseModal} movie={isOpen} />}
    </div>
  );
};

export default Home;
