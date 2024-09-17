import React from "react";
import HeaderImg from "../assets/header/image1.jpg";

const Header = () => {
  return (
    <div className="m-3 rounded-lg relative">
      <img src={HeaderImg} alt="" />
      <div className="absolute inset-0 bg-black opacity-70 z-20 rounded-xl"></div>
      <div className="absolute inset-0 z-30 text-white flex flex-col items-center justify-evenly md:justify-end">
        <h1 className="font-bold text-lg text-center md:text-3xl lg:text-5xl overflow-hidden xl:text-6xl">
          Dive Into Creativity With Our Gallery Collection
        </h1>
        <div className=" h-1/2 flex items-center  flex-col justify-end gap-4 md:flex-row md:justify-between md:items-end md:m-4 ">
          <p className="text-xs text-gray-300 text-center w-1/2 md:text-lg lg:text-2xl lg:w-1/3">
            Immerse yourself in the captivating stories behind each artwork, as
            our artists draw inspiration from cultures, natures, and everyday
            life
          </p>
          <button className=" text-xs p-2 border-black bg-gray-500 rounded-full cursor-pointer md:text-lg md:mb-10 lg:text-xl">
            Visit Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
