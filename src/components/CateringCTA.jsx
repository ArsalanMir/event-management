// src/components/CateringCTA.jsx
import { Link } from "react-router-dom";

const CateringCTA = () => {
  return (
    <section className="bg-[#0077B6] text-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
      <p className="mb-6 text-lg">
        Let’s craft an unforgettable experience with world-class catering.
      </p>
      <Link
        to="/contact"
        className="bg-[#FFD700] text-[#1A535C] px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
      >
        Contact Our Team
      </Link>
    </section>
  );
};

export default CateringCTA;
