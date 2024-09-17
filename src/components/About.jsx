import React from "react";
import Director from "../assets/director.jpg";

const About = () => {
  return (
    <div className="border-t-4">
      <div className="md:flex md:flex-col md:items-start">
        <button className="mx-5 mt-10 py-2 px-6 border border-black rounded-full font-semibold">
          Orion Gallery
        </button>
      </div>
      <div>
        <div className="m-5 flex flex-col items-center justify-center md:flex-row">
          <div className="md:w-1/2 md:mx-10">
            <h2 className="text-3xl font-bold md:text-5xl lg:text-6xl overflow-hidden">
              About Us
            </h2>
            <p className="my-8 md:text-lg lg:text-xl xl:text-3xl">
              <span className="font-bold text-lg md:text-xl lg:text-2xl">
                Orion Gallery
              </span>{" "}
              is a haven for art enthusiasts, dedicated to showcasing the finest
              works. Our mission is to foster a vibrant cultural environment,
              inspiring dialogue and appreciation for diverse artistic
              expressions. We believe that art has the power to transform lives,
              spark creativity, and connect us on a deeper level.
            </p>
            <p className="text-right text-gray-700 md:text-lg lg:text-xl xl:text-3xl">
              Whether you're a seasoned collector or simply seeking a unique
              cultural experience, our gallery offers a curated selection of
              works by emerging artists. From thought-provoking installations to
              breathtaking paintings, we strive to present a diverse range of
              styles and mediums.
            </p>
          </div>
          <div className="my-5 text-center md:w-1/2 lg:w-1/4">
            <img src={Director} alt="director of orion gallery" />
            <h3 className="font-bold text-lg">Diretor Of Orion Gallery</h3>
            <p className="font-bold">Eileen Ashley Crow </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
