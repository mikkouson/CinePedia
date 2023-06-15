import React, { useEffect, useState } from "react";
import { fetchMovie } from "../api/api";
import Collection from "../components/Movie/MovieDetail/Collection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper";
import "swiper/css/pagination";

import "swiper/css";

interface Movie {
  id: number;
}

const Collections = ({ movies }: { movies: Movie[] }) => {
  const [movieSpecifics, setMovieSpecifics] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovieSpecifics = async () => {
      const movieIds = movies.map((movie) => movie.id);
      const fetchPromises = movieIds.map((movieId) => fetchMovie(movieId));
      const fetchedMovies = await Promise.all(fetchPromises);
      setMovieSpecifics(fetchedMovies);
    };

    fetchMovieSpecifics();
  }, [movies]);

  return (
    <>
      <h2 className="max-w-screen-2xl mx-auto text-white text-3xl font-semibold my-6">
        Featured Collection
      </h2>

      <Swiper
        modules={[Autoplay, Pagination, Mousewheel]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        mousewheel={true}
      >
        {movieSpecifics.map((movie, index) => (
          <div key={index} className="h-full">
            {movie.belongs_to_collection && (
              <SwiperSlide>
                <Collection movie={movie} show={false} />
              </SwiperSlide>
            )}
          </div>
        ))}
      </Swiper>
    </>
  );
};

export default Collections;
