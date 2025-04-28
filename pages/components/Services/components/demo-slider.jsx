import React, { useRef } from "react";
import Slider from "react-slick";

const AutoPlayMethods = ({ children }) => {
  let sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    centerMode: true,
    pauseOnHover: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings} className="flex justify-center">
        {children}
      </Slider>
    </div>
  );
};

export default AutoPlayMethods;
