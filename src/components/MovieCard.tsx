import { image_Base_URL } from "../constant/MovieImageURL";

type MovieCardProps = {
  movie: {
    poster_path: string;
  };
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <>
      <img
        src={image_Base_URL + movie.poster_path}
        alt=""
        className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in"
      />
    </>
  );
};

export default MovieCard;
