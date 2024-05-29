import disney from "./../assets/Images/disney.png";
import marvel from "./../assets/Images/marvel.png";
import nationalG from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import starwar from "./../assets/Images/starwar.png";

import disneyV from "./../assets/Videos/disney.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import nationalGeographicV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";
import starwarV from "./../assets/Videos/star-wars.mp4";

const productionHouseList = [
  {
    id: 1,
    image: disney,
    video: disneyV,
  },
  {
    id: 2,
    image: pixar,
    video: pixarV,
  },
  {
    id: 3,
    image: marvel,
    video: marvelV,
  },
  {
    id: 4,
    image: starwar,
    video: starwarV,
  },
  {
    id: 5,
    image: nationalG,
    video: nationalGeographicV,
  },
];

const ProductionHouse = () => {
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {productionHouseList.map((list, index) => (
        <div
          key={index}
          className="border-[2px] border-gray-600 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 relative shadow-xl shadow-gray-800"
        >
          <img src={list.image} alt="" className="w-full z-[1]" />
          <video
            src={list.video}
            autoPlay
            loop
            playsInline
            className="absolute top-0 z-0 rounded-lg opacity-0 hover:opacity-50"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
