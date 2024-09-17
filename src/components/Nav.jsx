import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleNavigation = (event) => {
    event.preventDefault();
    handleToggle();
  };
  return (
    <div className="p-4  ">
      <div className="hidden md:flex md:items-center md:justify-between ">
        <ul className="h-full w-3/4 flex items-center justify-start gap-24 bg-white lg:text-xl">
          <a href="#home" className="cursor-pointer">
            <li className=" hover:underline hover:underline-offset-4">Home</li>
          </a>
          <a href="#meet-our-artists" className="cursor-pointer">
            <li className=" hover:underline hover:underline-offset-4">
              Meet Our Artists
            </li>
          </a>
        </ul>
        <Link to={"/"} className="font-bold lg:text-2xl">
          Orion Gallery
        </Link>
        <ul className="h-full w-3/4 flex items-center justify-end gap-24 bg-white lg:text-xl">
          <a href="#event" className="cursor-pointer">
            <li className=" hover:underline hover:underline-offset-4">Event</li>
          </a>
          <a href="#about" className="cursor-pointer">
            <li className=" hover:underline hover:underline-offset-4">
              About Us
            </li>
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
              <a
                href="#meet-our-artists"
                onClick={handleNavigation}
                className="cursor-pointer"
              >
                <li>Meet Our Artists</li>
              </a>
              <a href="#event" className="cursor-pointer">
                <li onClick={handleNavigation}>Event</li>
              </a>
              <a href="#about" className="cursor-pointer">
                <li onClick={handleNavigation}>About Us</li>
              </a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
