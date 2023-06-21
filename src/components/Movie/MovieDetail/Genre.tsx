import React, { useEffect, useState } from "react";
import { fetchGenreMovieList } from "../../../api/api";
import { useParams } from "react-router-dom";

const Genre = () => {
  const { id } = useParams();
  const [genreMovieList, setGenreMovieList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setGenreMovieList(await fetchGenreMovieList(Number(id)));
    };
    fetchData();
  }, [id]);

  console.log(genreMovieList);

  return (
    <div className="text-white pt-10">
      {/* {genreMovieList.length > 0 && genreMovieList.map((res) => res.id)} */}
    </div>
  );
};

export default Genre;
