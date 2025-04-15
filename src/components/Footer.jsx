// src/components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1A535C] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">EventElite</h2>
          <p className="text-gray-300">
            Delivering unforgettable events & exceptional catering with elegance and precision.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-300">Email: info@eventelite.com</p>
          <p className="text-gray-300">Phone: +1 (234) 567-890</p>
          <p className="text-gray-300">Location: New York, NY</p>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} EventElite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
