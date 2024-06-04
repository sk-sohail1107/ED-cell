import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const textColor = 'text-gray-700'; // Text color for dark theme

  return (
    <nav className="bg-gradient-to-r from-gray-700 to-blue-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className={`text-white text-2xl font-semibold ${textColor}`}>
          ED Cell
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`text-white text-2xl focus:outline-none ${textColor}`}
          >
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className={`md:flex space-x-4 ${textColor}`}>
            <li>
              <Link
                to="/"
                className={`hover:underline hover:text-gray-300 ${textColor}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/gallerypage"
                className={`hover:underline hover:text-gray-300 ${textColor}`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/teampage"
                className={`hover:underline hover:text-gray-300 ${textColor}`}
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:underline hover:text-gray-300 ${textColor}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
