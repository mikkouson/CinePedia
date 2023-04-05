import MovieContainer from "../components/MovieContainer";
interface MovieProps {
  vote_average: number;
  release_date: string;
  poster_path: string;
  id: number;
  title: string;
}
interface HomeProps {
  movies: MovieProps[];
}
const Home = ({ movies }: HomeProps) => {
  return (
    <div className=" max-w-screen-2xl mx-auto">
      <MovieContainer movies={movies} />
    </div>
  );
};

export default Home;
