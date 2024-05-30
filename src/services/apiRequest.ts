// https://api.themoviedb.org/3/trending/all/day?api_key=f5d29e675d3c8ccb9022644b6e0d3b66

import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const api_key = "f5d29e675d3c8ccb9022644b6e0d3b66";
const movieByGenreBaseURL = `${baseUrl}discover/movie?api_key=${api_key}`;

export const getTrendingVideos = () =>
  axios.get(`${baseUrl}/trending/all/day?api_key=${api_key}`);

export const getMovieByGenreId = (id: number) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);
