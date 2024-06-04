import React from "react";
import me from "../../assets/logo.png";
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Aboutus = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animatedBackground = useSpring({
    from: { background: 'linear-gradient(to right, #2a3a4a, #485864)' },
    to: { background: 'linear-gradient(to right, #1a232f, #2a3a4a)' },
    config: { duration: 5000 },
  });

  const fadeUpAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(40px)' },
    config: {duration: 2000},
  });

  const textColor = 'text-gray-300';

  return (
    <animated.div style={animatedBackground} id="about" className=" justify-center align-center py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:order-2 md:p-2 sm:p-6 md:ml-6 sm:m-0">
            <img
              src={me}
              alt="About Us"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2  md:mt-0 mt-4">
            <animated.div
              ref={ref}
              style={{ ...fadeUpAnimation }}
            >
              <h2 className="text-blue-500 text-center text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                About Us
      </h2>
              <p className={`text-gray-300 leading-relaxed text-justify ${textColor}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                porttitor purus ut augue interdum ultrices. Nullam nec urna nec
                dolor consequat iaculis at ac nulla. Nulla facilisi. Suspendisse
                potenti. Cras at risus et nunc cursus auctor. Sed ultrices sem ut
                libero vehicula bibendum.
              </p>
            </animated.div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Aboutus;
