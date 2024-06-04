import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useSpring, animated } from "react-spring";

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
      photoUrl: "https://via.placeholder.com/150",
      description: "Executive",
    },
    {
      id: 4,
      name: "Sriya Sayala",
      photoUrl: "https://via.placeholder.com/150",
      description: "Executive",
    },
    {
      id: 5,
      name: "Pavan Elephant",
      photoUrl: "https://via.placeholder.com/150",
      description: "Executive",
    },
    {
      id: 6,
      name: "Pradhyuth Mohan",
      photoUrl: "https://via.placeholder.com/150",
      description: "Event Advisor",
    },
    {
      id: 7,
      name: "Sohail Shaik",
      photoUrl: "https://via.placeholder.com/150",
      description: "Event Advisor",
    },
    {
      id: 8,
      name: "Srujan Akkineni",
      photoUrl: "https://via.placeholder.com/150",
      description: "PR & Networking Advisor",
    },
    {
      id: 9,
      name: "Nishita",
      photoUrl: "https://via.placeholder.com/150",
      description: "PR & Networking Advisor",
    },
    {
      id: 10,
      name: "Viswas",
      photoUrl: "https://via.placeholder.com/150",
      description: "Logistics and Finance Advisor",
    },
    {
      id: 11,
      name: "Poorna Sai",
      photoUrl: "https://via.placeholder.com/150",
      description: "Logistics and Finance Advisor",
    },
    {
      id: 12,
      name: "Sreeja Sailu",
      photoUrl: "https://via.placeholder.com/150",
      description: "Design Advisor",
    },
    {
      id: 12,
      name: "Dhanush",
      photoUrl: "https://via.placeholder.com/150",
      description: "Design Advisor",
    },
    {
      id: 12,
      name: "Anoop Srivastava",
      photoUrl: "https://via.placeholder.com/150",
      description: "Design Advisor",
    },
  
  
    // Add more team members as needed
  ];
  

export default function TeamPage() {
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
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="w-full h-44 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.description}</p>
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
