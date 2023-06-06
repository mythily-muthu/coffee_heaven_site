import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeState, setActiveState] = useState("Home");
  let navigate = useNavigate();
  let navList = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Menu",
      link: "/menu",
    },
    {
      title: "Gallery",
      link: "/gallery",
    },
    {
      title: "Team",
      link: "/team",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  const handleNavList = (e, item) => {
    e.preventDefault();
    setActiveState(item.link);
    navigate(item.link);
  };
  return (
    <div className="flex h-14 md:h-16 lg:h-20 w-full items-center justify-between px-44 shadow-lg">
      <div className="flex cursor-pointer items-center w-11 h-11">
        <img
          src="https://gokul-coffee-shop.netlify.app/images/logo.png"
          alt="logo"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex gap-7 cursor-pointer items-center text-black text-base md:text-lg lg:text-xl ">
        {navList.map((item) => {
          return (
            <p
              className={`${activeState === item.title && text- }`}
              onClick={handleNavList}
            >
              {item.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
