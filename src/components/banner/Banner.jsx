import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Typed from "react-typed";
import "./Banner.css";

function Banner() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  // Dark-themed background animation
  const animatedBackground = useSpring({
    from: { background: "linear-gradient(to right, #2a3a4a, #485864)" },
    to: { background: "linear-gradient(to right, #1a232f, #2a3a4a)" },
    config: { duration: 5000 }, // Adjust animation duration
  });

  const fadeUpAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: {
      opacity: isIntersecting ? 1 : 0,
      transform: isIntersecting ? "translateY(0)" : "translateY(20px)",
    },
    config: { duration: 1000 },
  });
  // Text color for dark theme
  const textColor = "text-gray-300";

  return (
    <animated.div className="banner" style={animatedBackground}>
      <div className="w-full bg-gray-900 py-3 text-white text-center">
        <marquee
          behavior="scroll"
          direction="left"
          className="text-sm md:text-base"
        >
          Disclaimer: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Eveniet enim voluptatibus nobis blanditiis nulla error laborum
          mollitia animi incidunt omnis? Atque labore nam doloremque ullam
          accusantium laborum accusamus illum corporis?
        </marquee>
      </div>
      <div className="container mx-auto px-4 pt-16 text-center">
        <h1 className={`text-3xl md:text-5xl font-bold ${textColor} mb-10`}>
          Welcome to ED Cell
        </h1>
        <Typed
          className={`text-2xl md:text-4xl ${textColor} mb-8`}
          strings={["Discover", "Innovate", "Collaborate"]}
          typeSpeed={70}
          backSpeed={40}
          loop
        />
        <p className={`text-lg mt-8 mb-8 ${textColor}`}>
          We are a student chapter of passionate individuals dedicated to
          innovation and entrepreneurship. Join us on our journey to create a
          better future.
        </p>
        <button
          className={`bg-blue-500 hover:bg-blue-600 ${textColor} font-semibold py-2 px-4 mt-2 rounded-full`}
        >
          Learn More
        </button>

        <div
          className="footer__socials flex justify-center mt-12 md:space-x-60 space-x-20"
          style={fadeUpAnimation}
        >
          <a href="https://facebook.com" className={`text-3xl ${textColor}`}>
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" className={`text-3xl ${textColor}`}>
            <FaInstagram />
          </a>
          <a href="https://facebook.com" className={`text-3xl ${textColor}`}>
          <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://facebook.com" className={`text-3xl ${textColor}`}>
            <FontAwesomeIcon icon={faCircleDown} shake />
          </a>
        </div>
      </div>
    </animated.div>
  );
}

export default Banner;
