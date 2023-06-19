import Movie from "./Movie";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
  status: string;
}

interface MovieContainerProps {
  movies: Movie[];
}

const MovieContainer = ({ movies = [] }: MovieContainerProps) => {
  return (
    <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md p-2">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieContainer;
