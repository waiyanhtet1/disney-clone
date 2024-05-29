import { useState } from "react";
import { HiDotsVertical, HiHome, HiPlus, HiStar } from "react-icons/hi";
import { HiMagnifyingGlass, HiPlayCircle, HiTv } from "react-icons/hi2";
import logo from "../assets/Images/logo.png";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-5 md:gap-8 items-center">
        <img
          src={logo}
          alt=""
          className="w-[90px] md:w-[115px] object-contain"
        />

        <div className="hidden lg:flex gap-8 items-center">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* small screen */}
        <div className="flex lg:hidden gap-5 items-center">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem key={index} name={""} Icon={item.icon} />
          )}
          <div
            className="lg:hidden cursor-pointer relative"
            onClick={() => setToggle((prev) => !prev)}
          >
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute right-5 mt-3 bg-[#121212] border-[1px] p-3 px-3 py-4">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        key={index}
                        name={item.name}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full"
      />
    </div>
  );
};

export default Header;
