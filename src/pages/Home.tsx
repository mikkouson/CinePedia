import { Movie } from "../components/MovieContainer";
import Headers from "../components/Movie/HomePage/HomeHeader";
import PopularMovie from "../components/Movie/HomePage/PopularMovie";
import NowPlaying from "../components/Movie/HomePage/NowPlaying";
import TopRated from "../components/Movie/HomePage/TopRated";
import TopPeople from "../components/People/TopPeople";
// import Collections from "./Collections";

interface HomeProps {
  movies: Movie[];
}
const Home = ({ movies }: HomeProps) => {
  return (
    <>
      <Headers movies={movies} />
      <main className="max-w-screen-2xl mx-auto">
        <PopularMovie movies={movies} />
        <TopRated />
        <NowPlaying />
        <TopPeople />
        {/* <Collections movies={movies} /> */}
      </main>
    </>
  );
};

export default Home;
