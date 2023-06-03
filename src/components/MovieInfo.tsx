import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../api/api";
import Collection from "./MovieDetail/Collection";
import Directors from "./MovieDetail/Directors";
import Cast from "./MovieDetail/Cast";
import Header from "./MovieDetail/Header";

const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setMovie(await fetchMovie(Number(id)));
    };
    fetchData();
  }, [id]);

  if (!movie) return <div>Not Found</div>;

  return (
    <main className="text-white">
      <Header movieId={Number(id)} movie={movie} />
      <Cast movieId={Number(id)} />
      <Directors movieId={Number(id)} />
      <Collection movie={movie} />
    </main>
  );
};

export default MovieInfo;
