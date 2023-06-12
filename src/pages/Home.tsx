import { Movie } from "../components/MovieContainer";
import Headers from "../components/MovieDetail/HomeHeader";
import PopularMovie from "../components/MovieDetail/PopularMovie";

interface HomeProps {
  movies: Movie[];
}
const Home = ({ movies }: HomeProps) => {
  return (
    <>
      <Headers movies={movies} />
      <main className="max-w-screen-2xl mx-auto">
        <PopularMovie movies={movies} />
      </main>
    </>
  );
};

export default Home;
