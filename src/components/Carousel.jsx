import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ slides }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 345,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div className="my-5 ">
      <Slider {...settings}>
        {slides.map((slide) => {
          return (
            <div
              key={slide.id}
              className="w-full flex items-center justify-center text-white relative gap-4"
            >
              <div className="h-full flex items-center">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="absolute bottom-2 left-2">
                <p className="text-sm font-bold md:text-lg lg:text-xl">
                  {slide.name}
                </p>
                <p className="text-xs md:text-sm lg:text-lg ">{slide.author}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
