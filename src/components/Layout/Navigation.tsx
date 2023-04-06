import React, { useState, Dispatch, SetStateAction } from "react";
import { CiSearch } from "react-icons/ci";

interface Props {
  handleSearch: Dispatch<SetStateAction<string>>;
}

function Navigation({ handleSearch }: Props) {
  const [query, setSearchMovie] = useState("");

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (query && query !== "") {
      handleSearch(
        "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=" +
          query
      );
    }
  }

  return (
    <nav className="flex h-16 px-8 justify-between items-center shadow-lg">
      <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between">
        <h2 className="text-2xl font-mono">CinePedia</h2>
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              className=" w-48 text-1xl h-9 bg-gray-200 rounded-full p-2 px-5 outline-transparent"
              type="text"
              placeholder=" Search..."
              value={query}
              onChange={(e) => setSearchMovie(e.target.value)}
            />
            <CiSearch className="absolute top-1/2 transform -translate-y-1/2 right-5 text-gray-400" />
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Navigation;
