import React from 'react';
import image from "../assets/catering.jpg";

const Hero = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            Your Guests Love <span className="text-orange-500">Inemai</span>
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Special Guidance to Choose the Right Menu & Make Events Memorable
          </p>

          <div className="flex flex-col md:items-start items-center space-y-5">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300">
              Pick Menu
            </button>

            <div className="flex items-center text-gray-700">
              <svg
                className="w-6 h-6 text-orange-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-lg font-medium">Call: +91 94456 68787</span>
            </div>

            <p className="text-sm text-gray-500">
              Please use this button to get in touch with us!
            </p>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="md:w-1/2">
          <img
            src={image}
            alt="Catering Service"
            className="w-full rounded-xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
