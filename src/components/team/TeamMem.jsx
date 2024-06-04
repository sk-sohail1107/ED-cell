import React from "react";
import "tailwindcss/tailwind.css";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import suraj from "../../assets/Suraj.png";
import shriya from "../../assets/Shriya.png";
import pavan from "../../assets/pavan.png";
import pradhyuth from "../../assets/pradhyuth.png";
import sohail from "../../assets/Sohail.png";
import srujan from "../../assets/Srujan.png";
import nishitha from "../../assets/Nishitha.png";
import viswas from "../../assets/Viswas.png";
import poorna from "../../assets/Poorna.png";
import sreeja from "../../assets/Sreeja.png";
import dhanush from "../../assets/Dhanush.png";
import anoop from "../../assets/Anup.png";


const teamMembers = [
  {
    id: 1,
    name: "Ananya Akka",
    photoUrl: "https://via.placeholder.com/150",
    description: "Chair",
  },
  {
    id: 2,
    name: "Varun Anna",
    photoUrl: "https://via.placeholder.com/150",
    description: "Chair",
  },
  {
    id: 3,
    name: "Suraj Sanganabhatla",
    photoUrl: suraj,
    description: "Executive",
  },
  {
    id: 4,
    name: "Shriya Sayala",
    photoUrl: shriya,
    description: "Executive",
  },
  {
    id: 5,
    name: "Pavan Elephant",
    photoUrl: pavan,
    description: "Executive",
  },
  {
    id: 6,
    name: "Pradhyuth Mohan",
    photoUrl: pradhyuth,
    description: "Event Advisor",
  },
  {
    id: 7,
    name: "Sohail Shaik",
    photoUrl: sohail,
    description: "Event Advisor",
  },
  {
    id: 8,
    name: "Srujan Akkineni",
    photoUrl: srujan,
    description: "PR & Networking Advisor",
  },
  {
    id: 9,
    name: "Nishitha",
    photoUrl: nishitha,
    description: "PR & Networking Advisor",
  },
  {
    id: 10,
    name: "Viswas",
    photoUrl: viswas,
    description: "Logistics and Finance Advisor",
  },
  {
    id: 11,
    name: "Poorna Sai",
    photoUrl: poorna,
    description: "Logistics and Finance Advisor",
  },
  {
    id: 12,
    name: "Sreeja Sailu",
    photoUrl: sreeja,
    description: "Design Advisor",
  },
  {
    id: 13,
    name: "Dhanush",
    photoUrl: dhanush,
    description: "Design Advisor",
  },
  {
    id: 14,
    name: "Anoop Srivastava",
    photoUrl: anoop,
    description: "Design Advisor",
  },

  // Add more team members as needed
];

const TeamMem = () => {

  const animatedBackground = useSpring({
    from: { background: "linear-gradient(to right, #2e3b48, #485864)" },
    to: { background: "linear-gradient(to right, #1a232f, #2a3a4a)" },
    config: { duration: 5000 }, // Adjust animation duration
  });

  // Text color for dark theme
  const textColor = "text-gray-300";

  return (
    <animated.div style={animatedBackground} className="py-20 px-8">
      <h2 className="text-blue-500 text-center p-2 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Team
      </h2>
      <div className="max-w-screen-xl mx-auto mt-16">
        <div className="flex overflow-x-auto hide-scroll">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-100 rounded-lg shadow-lg m-4 w-72 flex-none"
            >
              <img
                src={member.photoUrl}
                alt={member.name}
                className="w-full h-46 object-fit rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
          <div className="mt-4 flex items-center justify-center">
            <Link
              to="/teampage"
              className={`hover:underline hover:text-gray-300 ${textColor}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className={`text-blue-500 text-3xl hover:text-blue-600 transition-all duration-300`}
              />
            </Link>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default TeamMem;
