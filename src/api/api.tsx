import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: import.meta.env.VITE_MOVIE_API_KEY,
  },
});

export interface MovieCredits {
  id: number;
  name: string;
  vote_average: number;
  release_date: string;
  title: string;
  poster_path: string;
}

export const fetchMovies = async () => {
  const response = await api.get(`/discover/movie`);
  const { data } = response;
  return data.results;
};

export const fetchMovieCredits = async (id: number) => {
  const response = await api.get(`/movie/${id}/credits`);
  const { data } = response;
  return data.cast || [];
};
