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

export const fetchMovie = async (id: number) => {
  const response = await api.get(`/movie/${id}`);
  const { data } = response;
  return data;
};

export const fetcghNowPlaying = async () => {
  const response = await api.get(`movie/now_playing`);
  const { data } = response;
  return data.results;
};
export const fetchTopRated = async () => {
  const response = await api.get(`/movie/top_rated`);
  const { data } = response;
  return data.results;
};

export const fetchsearch = async () => {
  const response = await api.get(`/search/movie`);
  const { data } = response;
  return data.query;
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

export const fetchTrailer = async (id: number) => {
  const response = await api.get(`/movie/${id}/videos`);
  const { data } = response;
  return data.results.length > 0 ? data.results[0].key : [];
};


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

export const fetchSimilar = async (id: number) => {
  const response = await api.get(`/movie/${id}/similar`);
  const { data } = response;
  return data || [];
};
export const fetchRecommendation = async (id: number) => {
  const response = await api.get(`/movie/${id}/recommendations`);
  const { data } = response;
  return data || [];
};

export const fetchPeople = async () => {
  const response = await api.get(`person/popular`);
  const { data } = response;
  return data.results;
};

export const fetchCollections = async () => {
  const response = await api.get(`/discover/movie`, {
    params: {
      with_collections: true,
      sort_by: 'popularity.desc',
      page: 1,
      per_page: 10
    }
  });
  const { data } = response;
  return data.results;
};
