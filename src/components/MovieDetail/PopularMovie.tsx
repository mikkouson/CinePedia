import { Movie } from "../MovieContainer";
import MovieList from "./MovieList";
interface HomeProps {
  movies: Movie[];
}

const PopularMovie = ({ movies }: HomeProps) => {
  return (
    <section>
      <h2 className="text-white text-3xl font-semibold my-6">Popular Movies</h2>
      <MovieList movies={movies} />
    </section>
  );
};

export default PopularMovie;
