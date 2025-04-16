// src/pages/Lunch.jsx
import React from 'react';
import rasam from '../assets/Rasam.jpg'
import biryani from '../assets/veg-biryani.jpg'
import onion from '../assets/onion-raitha.png'
import jangiri from '../assets/Mini-jangiri.png'


const lunchItems = [
  { name: "Rasam", description: "Traditional thali with rice, curry, and sides", image: rasam },
  { name: "Veg-Biryani", description: "Spiced rice with chicken", image: biryani },
  { name: "onion-Raitha", description: "Creamy paneer curry", image: onion },
  { name: "Mini-jangiri", description: "South Indian style fish curry", image: jangiri },
];

const Lunch = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-[#0077B6] mb-8">Lunch Menu</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {lunchItems.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4 text-center">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-3" />
            <h3 className="text-xl font-semibold text-[#1A535C]">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lunch;
