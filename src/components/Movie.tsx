interface MovieProps {
  id: number;
  title: string;
}

const Movie = ({ movie }: { movie: MovieProps }) => {
  return (
    <div>
      <div className="movie" key={movie.id}></div>
      <div className="title">{movie.title}</div>
    </div>
  );
};

export default Movie;
