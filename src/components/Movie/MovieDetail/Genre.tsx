import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGenreMovieList } from "../../../api/api";
import MovieContainer from "../../MovieContainer";

const Genre = () => {
  const { id } = useParams();
  const [genreMovieList, setGenreMovieList] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      setGenreMovieList(await fetchGenreMovieList(Number(id)));
    };
    fetchData();
  }, [id]);

  console.log(genreMovieList);

  return (
    <>
      {genreMovieList && genreMovieList.results.length > 0 && (
        <section className="px-5  1lg:px-10  2xl:px-0 relative movieDetails max-w-screen-2xl mx-auto">
          <div className="Cast my-5 w-full">
            <MovieContainer movies={genreMovieList.results || []} />
          </div>
        </section>
      )}
    </>
  );
};

export default Genre;
