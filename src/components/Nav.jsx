import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="p-5 ">
      <div className="sm:hidden md:flex md:items-center md:justify-between ">
        <p className="text-lg font-bold lg:text-2xl">OG/</p>
        <ul className="h-full w-3/4 flex items-center justify-between bg-white">
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="About">
            <li>About Us</li>
          </a>
          <li>
            CONTACT@ORIONGALLERY.COM
            <p>(+555) 867-4321</p>
          </li>
        </ul>
      </div>
      <div className="text-sm flex justify-between items-center relative md:hidden">
        <p className="text-sm font-bold">OG/</p>
        <RxHamburgerMenu onClick={handleToggle} size={18} />
        {toggle && (
          <div className="h-screen w-full fixed top-0 left-0 z-40">
            <IoCloseOutline
              className="absolute right-3 top-5"
              size={24}
              onClick={handleToggle}
            />

            <ul className="h-full flex flex-col items-center justify-evenly bg-white">
              <a href="">
                <li>Home</li>
              </a>
              <a href="">
                <li>About Us</li>
              </a>
              <li>
                CONTACT@ORIONGALLERY.COM
                <p>(+555) 867-4321</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
