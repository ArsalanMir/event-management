import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Inemai Caterers</h2>
          <p className="text-sm leading-relaxed">
            Bringing unforgettable taste and experience to your events. We also offer seed balls to promote a greener planet.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/catering" className="hover:underline">Catering Services</a></li>
            <li><a href="/seedballs" className="hover:underline">Seed Balls</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <a href="tel:+919445668787" className="hover:underline">+91 94456 68787</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <a href="mailto:info@inemai.com" className="hover:underline">info@inemai.com</a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Chennai, Tamil Nadu, India
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-200"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-orange-200"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-sm text-orange-100 border-t border-orange-400 pt-4">
        © {new Date().getFullYear()} Inemai Caterers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
