import { useEffect, useState } from "react";
import { getMovieByGenreId } from "../services/apiRequest";
import MovieCard from "./MovieCard";

const MovieList = ({ genreId }: { genreId: number }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieByGenreId(genreId).then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="flex overflow-x-auto gap-8 scrollbar-none pt-3 md:pt-5 px-3 pb-5 md:pb-10">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
