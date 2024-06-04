import React, { useState } from "react";
//  // Add your CSS file for additional styling

function Popup({meeting}) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl text-gray-600 font-semibold">{meeting.name}</h2>
              <button
                className="text-gray-500 hover:text-gray-600"
                onClick={handleClose}
              >
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
              </button>
            </div>
            <div className="overflow-y-auto max-h-72">
              <p className="text-gray-600">
                {meeting.description}
              </p>
              {/* Add more content as needed */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
