import axios from "axios";

export const fetchApi = async (page: number = 1, query: string = '') => {
  const baseUrl = 'https://api.themoviedb.org/3';
  const apiKey = 'bf849ac9154ddcf14074361fb0f94011';

  const url =
    query !== ""
      ? `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}&page=${page}`
      : `${baseUrl}/trending/movie/day?api_key=${apiKey}&page=${page}`;
  const movies = await axios.get(url);

  return movies;

};
