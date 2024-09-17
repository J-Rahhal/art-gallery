import React from "react";
import Carousel from "./Carousel";
import { TopPiecesThree } from "../constants/index";

const TopPieces = () => {
  return (
    <div className="m-5 md:flex md:items-center">
      <div className="md:flex md:flex-col md:items-start">
        <button className="py-2 px-6 border border-black rounded-full font-semibold">
          Top
        </button>
        <h3 className="text-3xl font-bold my-4 lg:text-6xl overflow-y-hidden">
          Top Three Pieces
        </h3>
        <p className="text-sm md:text-md lg:text-2xl lg:w-1/2">
          Our exhibition showcases a diverse collection of stunning paintings,
          each representing a unique blend of styles and artistic expressions.
          From abstract masterpieces to lifelike portraits, the variety in form
          and technique promises a captivating experience for every viewer.{" "}
        </p>
      </div>
      <Carousel slides={TopPiecesThree} />
    </div>
  );
};

export default TopPieces;
