import "./App.css";
import Navigation from "./components/Layout/Navigation";
import Home from "./pages/Home";
import { useFetch } from "./hooks/useFetch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchMovie from "./components/SearchMovie";
function App() {
  const movies = useFetch();

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home movies={movies} />
              </>
            }
          />
          <Route path="/movies/:query" element={<SearchMovie />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
