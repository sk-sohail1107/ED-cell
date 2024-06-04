import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import me from "../../assets/logo.png";
import { useSpring, animated } from "react-spring";


export default function Gallery() {

  const animatedBackground = useSpring({
    from: { background: "linear-gradient(to right, #2e3b48, #485864)" },
    to: { background: "linear-gradient(to right, #1a232f, #2a3a4a)" },
    config: { duration: 5000 }, // Adjust animation duration
  });

  // Text color for dark theme
  const textColor = "text-gray-300";

  const settingsAbove = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Set autoplay speed in milliseconds
  };

  const settingsBelow = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 15100, // Set autoplay speed in milliseconds
  };

  return (
    <animated.div style={animatedBackground} className="py-20 px-8">
      <h2 className="text-blue-500 text-center p-2 text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Gallery
      </h2>
      <div className="slider-container mb-4">
        <Slider {...settingsAbove} className="slick-slider">
          {[...Array(12)].map((_, index) => (
            <div className="slide p-4" key={index}>
              <img src={me} alt={`slide ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="slider-container slider-container-reverse">
        <Slider {...settingsBelow} className="slick-slider">
          {[...Array(12)].map((_, index) => (
            <div className="slide p-4" key={index}>
              <img src={me} alt={`slide ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </animated.div>
  );
}
