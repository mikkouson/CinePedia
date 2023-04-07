import Movie from "./Movie";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieProps {
  movie: Movie & {
    vote_average: number;
    release_date: string;
    poster_path: string;
    id: number;
    title: string;
  };
}

interface MovieContainerProps {
  movies: MovieProps["movie"][];
}

const MovieContainer = ({ movies, handleOpenModal }: MovieContainerProps) => {
  return (
    <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md p-2">
      {movies &&
        movies.map((movie) => (
          <Movie
            movie={movie}
            key={movie.id}
            handleOpenModal={handleOpenModal}
          />
        ))}
    </div>
  );
};

export default MovieContainer;
