const Movie = ({ movie }) => {
  return (
    <div>
      <div className="movie" key={movie.id}></div>
      <div className="title">{movie.title}</div>
    </div>
  );
};

export default Movie;
