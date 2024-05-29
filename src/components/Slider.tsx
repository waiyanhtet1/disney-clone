type MovieTypes = {
  id: number;
  backdrop_path: string;
};

import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { getTrendingVideos } from "../services/apiRequest";
const image_Base_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
  const [movielist, setMovielist] = useState([]);

  useEffect(() => {
    getTrendingVideos().then((res) => {
      console.log(res.data.results);
      setMovielist(res.data.results);
    });
  }, []);

  return (
    <div>
      <HiChevronLeft className="hidden md:block absolute mx-3 mt-[150px] text-white text-5xl cursor-pointer" />
      <HiChevronRight className="hidden md:block absolute right-0 mx-3 mt-[150px] text-white text-5xl cursor-pointer" />

      <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none">
        {movielist.map((movie: MovieTypes) => {
          return (
            <img
              key={movie.id}
              src={image_Base_URL + movie.backdrop_path}
              alt=""
              className="min-w-full md:h-[350px] object-cover object-left-top mr-5 rounded-md"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
