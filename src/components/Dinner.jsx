// src/pages/Dinner.jsx
import React from 'react';
import potato from '../assets/Potato-Peas.jpg'
import paneer from '../assets/Paneer.jpg'
import gobi from '../assets/Cauliflower.jpg'
import fried from '../assets/fried.jpg'

const dinnerItems = [
  { name: "Potato-Peas", description: "Layered flatbread with curry", image: potato },
  { name: "Veg Fried Rice", description: "Stir-fried rice with vegetables", image: fried },
  { name: "Paneer-Butter", description: "Grilled Paneer pieces", image: paneer },
  { name: "Gobi Manchurian", description: "Indo-Chinese cauliflower dish", image: gobi },
];

const Dinner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-[#0077B6] mb-8">Dinner Menu</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dinnerItems.map((item, index) => (
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

export default Dinner;
