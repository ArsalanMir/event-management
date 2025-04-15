// src/components/HeroSection.jsx
import { Link } from "react-router-dom";

const Hero= () => {
  return (
    <section className="relative bg-[#F5F5F5]">
      {/* Background Image (optional) */}
      {/* <div className="absolute inset-0 bg-[url('/src/assets/hero-bg.jpg')] bg-cover bg-center opacity-20 z-0" /> */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0077B6] to-[#6D9886] opacity-20 z-0" />


      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#1A535C] mb-6">
          Crafting Memorable Events & Exceptional Catering
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          From weddings to corporate events, we handle everything with elegance, creativity, and taste.
        </p>
        <div className="space-x-4">
          <Link
            to="/services"
            className="bg-[#0077B6] text-white px-6 py-3 rounded-xl shadow hover:bg-[#005f8e] transition"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="bg-[#FFD700] text-[#1A535C] px-6 py-3 rounded-xl shadow hover:bg-yellow-400 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
