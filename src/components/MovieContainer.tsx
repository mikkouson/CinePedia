interface Movie {
  id: number;
  title: string;
  // ... other movie properties
}

interface MovieProps {
  movie: Movie;
}

const Movie = ({ movie }: MovieProps) => {
  return (
    <div>
      <div className="movie" key={movie.id}></div>
      <div className="title">{movie.title}</div>
    </div>
  );
};

interface MovieContainerProps {
  movies: Movie[];
}

const MovieContainer = ({ movies }: MovieContainerProps) => {
  return (
    <div>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieContainer;
