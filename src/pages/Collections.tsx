// import React, { useEffect, useState } from "react";
// import { fetchMovie } from "../api/api";

// const Collections = ({ movies }) => {
//   const [movieSpecifics, setMovieSpecifics] = useState([]);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       const fetchedMovieDetails = await Promise.all(
//         movies.map(async (movie) => {
//           const movieId = movie.id;
//           const details = await fetchMovie(Number(movieId));
//           return details;
//         })
//       );
//       setMovieSpecifics(fetchedMovieDetails);
//     };
//     fetchMovieDetails();
//   }, [movies]);

//   return (
//     <>
//       {movieSpecifics.map((movie, index) => (
//         <div key={index}>
//           {movie.belongs_to_collection && (
//             <p className="text-white">
//               Belongs to: {movie.belongs_to_collection.name}
//             </p>
//           )}
//         </div>
//       ))}
//     </>
//   );
// };

// export default Collections;
