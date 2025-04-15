import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#0077B6]">
          EventElite
        </Link>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#0077B6] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-[#1A535C] font-medium mx-auto">
          <Link to="/" className="hover:text-[#0077B6]">Home</Link>
          <Link to="/about" className="hover:text-[#0077B6]">About</Link>
          <Link to="/services" className="hover:text-[#0077B6]">Services</Link>
          <Link to="/catering" className="hover:text-[#0077B6]">Catering</Link>
          <Link to="/booking" className="hover:text-[#0077B6]">Booking</Link>
          <Link to="/contact" className="hover:text-[#0077B6]">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-[#1A535C] font-medium">
          <Link to="/" className="block hover:text-[#0077B6]">Home</Link>
          <Link to="/about" className="block hover:text-[#0077B6]">About</Link>
          <Link to="/services" className="block hover:text-[#0077B6]">Services</Link>
          <Link to="/catering" className="block hover:text-[#0077B6]">Catering</Link>
          <Link to="/booking" className="block hover:text-[#0077B6]">Booking</Link>
          <Link to="/contact" className="block hover:text-[#0077B6]">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
