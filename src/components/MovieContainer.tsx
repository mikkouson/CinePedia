import Movie from "./Movie";

interface MovieContainerProps {
  movies: Array<{ id: number; title: string; director: string }>; // Example type for movie object
}

const MovieContainer = ({ movies }: MovieContainerProps) => {
  return (
    <div className="asd">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieContainer;
