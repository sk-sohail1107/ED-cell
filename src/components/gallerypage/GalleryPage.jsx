import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useSpring, animated } from "react-spring";
import me from "../../assets/logo.png";

const images = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  // Add more image paths here
];

export default function GalleryPage() {
  const animatedBackground = useSpring({
    from: { background: "linear-gradient(to right, #2e3b48, #485864)" },
    to: { background: "linear-gradient(to right, #1a232f, #2a3a4a)" },
    config: { duration: 5000 }, // Adjust animation duration
  });

  // Text color for dark theme
  const textColor = "text-gray-300";

  return (
    <animated.div style={animatedBackground}>
      <Header />
      <div className="py-20 px-8">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full relative cursor-pointer transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-auto rounded"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className={`-26 bg-black p-2 mb-2 rounded ${textColor}`}>
                    MBIH
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </animated.div>
  );
}
