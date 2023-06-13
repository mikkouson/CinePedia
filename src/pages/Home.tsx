import { Movie } from "../components/MovieContainer";
import Headers from "../components/MovieDetail/HomeHeader";
import PopularMovie from "../components/MovieDetail/PopularMovie";
import TrendingTV from "../components/MovieDetail/TrendingTV";
import TopRated from "../components/TopRated";

interface HomeProps {
  movies: Movie[];
}
const Home = ({ movies }: HomeProps) => {
  return (
    <>
      <Headers movies={movies} />
      <main className="max-w-screen-2xl mx-auto">
        <PopularMovie movies={movies} />
        <TrendingTV />
        <TopRated />
      </main>
    </>
  );
};

export default Home;
