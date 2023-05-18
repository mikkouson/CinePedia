import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface MovieProps {
  vote_average: number;
  release_date: string;
  poster_path: string;
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
}

const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieProps | null>(null);

  useEffect(() => {
    async function getMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`
      );
      const data = await res.json();
      setMovie(data);
    }
    getMovie();
  }, [id]);

  if (!movie) return <div>Not Found</div>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieInfo;
