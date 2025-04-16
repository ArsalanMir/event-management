// src/pages/Breakfast.jsx
import React from 'react';
import idly from '../assets/idly.jpg'
import vada from '../assets/vadai.jpg'
import dosa from '../assets/Dosa.png'
import pon from '../assets/pongal.jpg'

const breakfastItems = [
  { name: "Idli & Sambar", description: "Soft idlis with spicy sambar", image: idly },
  { name: "Dosa", description: "Crispy dosa served with chutneys", image: dosa },
  { name: "Pongal", description: "South Indian rice breakfast dish", image: pon },
  { name: "Vada", description: "Fried savory snack", image: vada },
];

const Breakfast = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-[#0077B6] mb-8">Breakfast Menu</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {breakfastItems.map((item, index) => (
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

export default Breakfast;
