import React from "react";
import ArtistCarousel from "./ArtistCarousel";
import { Artists } from "../constants";

const MeetOurArtists = () => {
  return (
    <div className="bg-black text-white p-4" id="meet-our-artists">
      <button className="m-2 px-4 py-2 border-2 border-white rounded-full cursor-none">
        Artists
      </button>
      <div className="flex flex-col items-center gap-2 p-2 md:flex-row md:justify-between">
        <h3 className="font-bold text-2xl md:text-3xl lg:text-6xl overflow-hidden">
          Meet Our Artists
        </h3>
        <p className="text-xs text-gray-400 w-1/2 text-center md:text-right md:text-lg lg:w-1/3 lg:text-2xl">
          Meet our talented team for this exhibition, each bringing a unique
          voice and perspective to the canvas.{" "}
        </p>
      </div>
      <div className="">
        <ArtistCarousel slides={Artists} />
      </div>
    </div>
  );
};

export default MeetOurArtists;
