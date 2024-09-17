import React from "react";
import { EventsInfo } from "../constants";

const Events = () => {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="py-4 md:my-12 border-t-4 border-b-4 border-black w-full">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl text-center">
          Events In London
        </h2>
      </div>
      <div className="grid grid-cols-1 my-8 gap-4 md:grid-cols-2 md:gap-24 lg:gap-48 md:mx-8 lg:mx-12">
        {EventsInfo.map((event) => {
          return (
            <div
              key={event.location}
              className="border-4  border-gray-500 rounded-xl flex flex-col items-center bg-gray-200 font-bold py-4 relative overflow-hidden"
            >
              <h4 className="text-xl md:text-2xl lg:text-3xl">{event.name}</h4>
              <img src={event.img} alt="" className="p-4 opacity-50" />
              <p className="md:text-xl lg:text-2xl">{event.location}</p>
              <p className="text-gray-600 md:text-lg lg:text-xl">
                {event.date}
              </p>
              <h2 className="absolute h-full flex items-center justify-center text-6xl text-black">
                OG
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
