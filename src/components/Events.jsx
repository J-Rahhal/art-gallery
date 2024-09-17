import React from "react";
import { EventsInfo } from "../constants";

const Events = () => {
  return (
    <div className="flex flex-col items-center justify-center  " id="events">
      <div className="py-4 md:my-12 border-t-4 bg-black text-white w-full">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl text-center">
          Events In London
        </h2>
      </div>
      <div className="grid grid-cols-1 my-8 gap-4 md:grid-cols-2 md:gap-24 lg:gap-48 md:mx-8 lg:mx-12">
        {EventsInfo.map((event) => {
          return (
            <div
              key={event.location}
              className="border-4  border-black rounded-xl flex flex-col items-center font-bold py-4 relative overflow-hidden"
            >
              <h2 className="absolute h-full flex items-center justify-center text-6xl text-black">
                OG
              </h2>

              <img src={event.img} alt="" className="p-4 opacity-50" />
              <h4 className="text-xl md:text-3xl lg:text-4xl">{event.name}</h4>
              <p className="md:text-xl lg:text-2xl">{event.location}</p>
              <p className="text-gray-600 md:text-lg lg:text-xl">
                {event.date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
