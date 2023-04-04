import Movie from "./Movie";
const MovieContainer = ({ movies }) => {
  return (
    <div className="flex">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieContainer;
