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

export const fetchsearch = async () => {
  const response = await api.get(`/search/movie`);
  const { data } = response;
  return data.query;
};

export const fetchMovie = async (id: number) => {
  const response = await api.get(`/movie/${id}`);
  const { data } = response;
  return data;
};

export const fetchMovieCredits = async (id: number) => {
  const response = await api.get(`/movie/${id}/credits`);
  const { data } = response;
  return data.cast || [];
};

export const fetchLogo = async (id: number) => {
  const response = await api.get(`/movie/${id}/images`);
  const { data } = response;
  return data.logos || [];
};

export const fetchTrailer =async (id:number) => {
  const response = await api.get(`/movie/${id}/videos`)
  const {data} = response
  return data.results[0].key 
}

export const fetchBackdrop = async (id: number) => {
  const response = await api.get(`/movie/${id}/images`);
  const { data } = response;
  return data.backdrops || [];
};
export const fetchDirectors = async (id: number) => {
  const response = await api.get(`/movie/${id}/credits`);
  const { data } = response;
  return data.crew || [];
};

export const fetchCollection = async (id: number) => {
  const response = await api.get(`/collection/${id}`);
  const { data } = response;
  return data;
};