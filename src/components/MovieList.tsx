import { useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { getMovieByGenreId } from "../services/apiRequest";
import MovieCard from "./MovieCard";

const MovieList = ({ genreId }: { genreId: number }) => {
  const [movies, setMovies] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId(genreId).then((res) => setMovies(res.data.results));
  }, []);

  const scrollLeft = (element: HTMLDivElement) => {
    element.scrollLeft -= 500;
  };

  const scrollRight = (element: HTMLDivElement) => {
    element.scrollLeft += 500;
  };

  return (
    <>
      <HiChevronLeft
        className="hidden md:block absolute left-0 mx-3 mt-[150px] text-white text-5xl cursor-pointer"
        onClick={() => scrollLeft(elementRef.current!)}
      />
      <HiChevronRight
        className="hidden md:block absolute right-0 mx-3 mt-[150px] text-white text-5xl cursor-pointer"
        onClick={() => scrollRight(elementRef.current!)}
      />
      <div
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-3 md:pt-5 px-3 pb-5 md:pb-10"
        ref={elementRef}
      >
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
