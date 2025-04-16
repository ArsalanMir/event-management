import React from 'react';
import seedball from '../assets/seedball.png';
import SeedballReview from '../components/SeedballReview';

const SeedballSection = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Buy Seed Balls in Chennai</h2>
      
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* Image and Button */}
        <div className="text-center">
          <img
            src={seedball}
            alt="Seed Ball"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
          <button className="mt-6 bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition">
            Order Now
          </button>
        </div>

        {/* Text Content */}

        <div className="text-gray-700 text-lg space-y-4">
          <p><strong>Seed Balls in Chennai</strong><br />
          Seed balls are seeds wrapped in a ball of red soil or clay. They are used for reforestation and symbolize your care for the environment — perfect for return gifts.</p>

          <p>While traveling, these seed balls should be thrown on the ground and forgotten. The clay shell protects the seeds from birds, ants, and rats. They sprout naturally when enough water or rain is available — no planting needed!</p>

          <p>We’re ready to deliver seed balls in Chennai and across Tamil Nadu. Call us at <strong className="text-green-800">+91 9445668787</strong> for more information.</p>

          <p><strong>We Deliver All Over India</strong></p>

          <p><strong>Why Our Seed Balls?</strong><br />
          - Supercharged with 3 kinds of compost<br />
          - Tested for germination and high viability<br />
          - Organic seeds collected across South India</p>

          <p><strong>Price:</strong> Rs.15/- Onwards <br />
          Call us for customized packs.</p>

          <p><strong>How Do We Make & Pack?</strong><br />
          Seeds are scarified (if needed), hand-rolled into clay balls, and air-dried. We pack them in recyclable paper boxes — eco-friendly and simple.</p>
        </div>
      </div>
      <SeedballReview/>
    </section>
  );
};

export default SeedballSection;
