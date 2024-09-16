import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="p-4  ">
      <div className="hidden md:flex md:items-center md:justify-between ">
        <ul className="h-full w-3/4 flex items-center justify-start gap-24 bg-white">
          <a href="#home" className="cursor-pointer">
            <li>Home</li>
          </a>
          <a href="collection" className="cursor-pointer">
            <li>Collection</li>
          </a>
        </ul>
        <p className="font-bold lg:text-xl">Orion Gallery</p>
        <ul className="h-full w-3/4 flex items-center justify-end gap-24 bg-white">
          <a href="#event" className="cursor-pointer">
            <li>Event</li>
          </a>
          <a href="#about" className="cursor-pointer">
            <li>About Us</li>
          </a>
        </ul>
      </div>
      <div className="text-sm flex justify-between items-center gap-4 relative md:hidden">
        <p className="text-sm font-bold">Orion Gallery</p>
        <RxHamburgerMenu onClick={handleToggle} size={18} />
        {toggle && (
          <div className="h-screen w-full fixed top-0 left-0 z-40 bg-white flex items-center justify-center">
            <IoCloseOutline
              className="absolute right-3 top-5 cursor-pointer"
              size={24}
              onClick={handleToggle}
            />

            <ul className="h-full w-3/4 flex flex-col items-center justify-center gap-24 bg-white">
              <a href="#home" className="cursor-pointer">
                <li>Home</li>
              </a>
              <a href="collection" className="cursor-pointer">
                <li>Collection</li>
              </a>
              <a href="#event" className="cursor-pointer">
                <li>Event</li>
              </a>
              <a href="#about" className="cursor-pointer">
                <li>About Us</li>
              </a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
