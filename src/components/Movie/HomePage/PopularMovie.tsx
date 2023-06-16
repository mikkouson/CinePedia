import { Movie } from "../../MovieContainer";
import MovieList from "../MovieDetail/MovieList";
interface HomeProps {
  movies: Movie[];
}

const PopularMovie = ({ movies }: HomeProps) => {
  return (
    <section className="max-w-screen-2xl mx-auto px-5  1lg:px-10  2xl:px-0">
      <h2 className="text-white text-3xl font-semibold my-6">Popular Movies</h2>
      <MovieList movies={movies} />
    </section>
  );
};

export default PopularMovie;
