import { lazy, Suspense } from "react";
import { Movie } from "../components/MovieContainer";

const Collections = lazy(
  () => import("../components/Movie/HomePage/Collections")
);
const Headers = lazy(() => import("../components/Movie/HomePage/HomeHeader"));
const NowPlaying = lazy(
  () => import("../components/Movie/HomePage/NowPlaying")
);
const PopularMovie = lazy(
  () => import("../components/Movie/HomePage/PopularMovie")
);
const TopRated = lazy(() => import("../components/Movie/HomePage/TopRated"));
const TopPeople = lazy(() => import("../components/People/TopPeople"));

interface HomeProps {
  movies: Movie[];
}

const Home = ({ movies }: HomeProps) => {
  return (
    <>
      <main>
        <Suspense
          fallback={
            <div className="text-white min-h[100vh] h-[100vh] flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Headers movies={movies} />
          <PopularMovie movies={movies} />
          <TopRated />
          <Collections movies={movies} />
          <NowPlaying />
          <TopPeople />
        </Suspense>
      </main>
    </>
  );
};

export default Home;
