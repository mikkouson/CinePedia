import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Layout/Navigation";
import Home from "./pages/Home";
import MovieContainer from "./components/MovieContainer";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
    );
  }, []);

  async function getMovies(url: RequestInfo | URL) {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  }
  return (
    <div className="App">
      <Navigation />
      <Home />
      <MovieContainer movies={movies}></MovieContainer>
    </div>
  );
}

export default App;
