import { Suspense, lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../api/api";
import Similar from "../components/Movie/MovieDetail/Similar";
import Recommendation from "../components/Movie/MovieDetail/Recommendation";

const Cast = lazy(() => import("../components/Movie/MovieDetail/Cast"));
const Directors = lazy(
  () => import("../components/Movie/MovieDetail/Directors")
);
const Collection = lazy(
  () => import("../components/Movie/MovieDetail/Collection")
);
const Header = lazy(
  () => import("../components/Movie/MovieDetail/MovieDetailsHeader")
);

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
      <Suspense fallback={<div>Loading...</div>}>
        <Header movieId={Number(id)} movie={movie} />
        <Cast movieId={Number(id)} />
        <Directors movieId={Number(id)} />
        <Collection movie={movie} />
        <Similar movieId={Number(id)} />
        <Recommendation movieId={Number(id)} />
      </Suspense>
    </main>
  );
};

export default MovieInfo;
