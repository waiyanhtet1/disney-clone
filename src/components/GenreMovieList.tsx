type GenreListObject = {
  id: number;
  name: string;
};

import { genereList } from "../constant/GenreList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <>
      {genereList.map(
        (genre: GenreListObject, index) =>
          index <= 4 && (
            <div className="mt-5  px-3 md:px-16">
              <h1 className="text-sm md:text-[20px] text-white font-bold">
                {genre.name}
              </h1>
              <MovieList genreId={genre.id} />
            </div>
          )
      )}
    </>
  );
};

export default GenreMovieList;
