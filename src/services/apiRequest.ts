// https://api.themoviedb.org/3/trending/all/day?api_key=f5d29e675d3c8ccb9022644b6e0d3b66

import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const api_key = "f5d29e675d3c8ccb9022644b6e0d3b66";

export const getTrendingVideos = () =>
  axios.get(`${baseUrl}/trending/all/day?api_key=${api_key}`);
