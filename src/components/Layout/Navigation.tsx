import React from "react";
import { CiSearch } from "react-icons/ci";

const Navigation = () => {
  return (
    <nav className="flex h-16 px-8 justify-between items-center shadow-lg">
      <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between">
        <h2 className="text-2xl font-mono">CinePedia</h2>
        <div className="relative">
          <input
            className=" w-48 text-1xl h-9 bg-gray-200 rounded-full p-2 px-5 outline-transparent"
            type="text"
            placeholder=" Search..."
          />
          <CiSearch className="absolute top-1/2 transform -translate-y-1/2 right-5 text-gray-400" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
