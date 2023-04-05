import "./App.css";
import Navigation from "./components/Layout/Navigation";
import Home from "./pages/Home";
import useFetch from "./hooks/useFetch";
function App() {
  const movies = useFetch();
  return (
    <div className="App">
      <Navigation />
      <Home movies={movies} />
    </div>
  );
}

export default App;
