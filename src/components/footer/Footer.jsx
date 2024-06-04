import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

export default function Footer() {
  const footerRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
          }
        });
      },
      {
        threshold: 0.2, // Adjust the threshold as needed
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const footerSize = "h-[50vh]";

  const animatedBackground = useSpring({
    from: { background: "linear-gradient(to right, #2e3b48, #485864)" },
    to: { background: "linear-gradient(to right, #1a232f, #2a3a4a)" },
    config: { duration: 5000 },
  });

  const textColor = "text-gray-300";

  const fadeUpAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: {
      opacity: isIntersecting ? 1 : 0,
      transform: isIntersecting ? "translateY(0)" : "translateY(20px)",
    },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      ref={footerRef}
      style={animatedBackground}
      className={`footer ${footerSize} flex flex-col items-center justify-center`}
    >
      <animated.a
        href="#"
        className={`footer__logo text-4xl font-bold ${textColor}`}
        style={fadeUpAnimation}
      >
        ED CELL
      </animated.a>
      <ul className="permalinks flex space-x-4 mt-4" style={fadeUpAnimation}>
        <li>
          <a href="#" className={`text-lg ${textColor}`}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={`text-lg ${textColor}`}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" className={`text-lg ${textColor}`}>
            Events
          </a>
        </li>
        <li>
          <a href="#services" className={`text-lg ${textColor}`}>
            Gallery
          </a>
        </li>
        <li>
          <a href="#portfolio" className={`text-lg ${textColor}`}>
            Team
          </a>
        </li>
        <li>
          <a href="#contact" className={`text-lg ${textColor}`}>
            Contact
          </a>
        </li>
      </ul>

      <div
        className="footer__socials flex space-x-4 mt-6"
        style={fadeUpAnimation}
      >
        <a href="https://facebook.com" className={`text-3xl ${textColor}`}>
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" className={`text-3xl ${textColor}`}>
          <FaInstagram />
        </a>
        <a href="https://facebook.com" className={`text-3xl ${textColor}`}>
          <FaTwitter />
        </a>
      </div>

      <animated.div
        className={`footer__copyright text-lg mt-8 ${textColor}`}
        style={fadeUpAnimation}
      >
        <small>&copy;  VNR VJIET. All rights reserved</small>
      </animated.div>
    </animated.div>
  );
}
