type MovieTypes = {
  id: number;
  backdrop_path: string;
};

import { useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { image_Base_URL } from "../constant/MovieImageURL";
import { getTrendingVideos } from "../services/apiRequest";

const screenWidth = window.innerWidth;

const Slider = () => {
  const [movielist, setMovielist] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getTrendingVideos().then((res) => setMovielist(res.data.results));
  }, []);

  const scrollLeft = (element: HTMLDivElement) => {
    element.scrollLeft -= screenWidth - 110;
  };

  const scrollRight = (element: HTMLDivElement) => {
    element.scrollLeft += screenWidth - 110;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block absolute mx-3 mt-[150px] text-white text-5xl cursor-pointer"
        onClick={() => scrollLeft(elementRef.current!)}
      />
      <HiChevronRight
        className="hidden md:block absolute right-0 mx-3 mt-[150px] text-white text-5xl cursor-pointer"
        onClick={() => scrollRight(elementRef.current!)}
      />

      <div
        className="flex overflow-x-auto w-full px-5 md:px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movielist.map((movie: MovieTypes) => {
          return (
            <img
              key={movie.id}
              src={image_Base_URL + movie.backdrop_path}
              alt=""
              className="min-w-full md:h-[350px] object-cover object-top mr-3 md:mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all 
              duration-100 ease-in"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
