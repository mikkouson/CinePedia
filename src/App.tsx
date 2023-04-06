import "./App.css";
import Navigation from "./components/Layout/Navigation";
import Home from "./pages/Home";
import { useFetch } from "./hooks/useFetch";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = useFetch(searchQuery);

  return (
    <div className="App">
      <Navigation handleSearch={setSearchQuery} />
      <Home movies={movies} />
    </div>
  );
}

export default App;
