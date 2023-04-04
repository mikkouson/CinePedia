import { ReactNode } from "react";

interface MovieProps {
  overview: ReactNode;
  id: number;
  title: string;
}

const Movie = ({ movie }: { movie: MovieProps }) => {
  return (
    <div>
      <div className="movie" key={movie.id}></div>
      <div className="title">{movie.title}</div>
      <div className="title">{movie.overview}</div>
    </div>
  );
};

export default Movie;
