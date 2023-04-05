import Movie from "./Movie";
const MovieContainer = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieContainer;
