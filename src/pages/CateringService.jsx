import React from 'react';
import serImg from '../assets/service.jpg'
import banner from '../assets/firstimg.png'
import wedding from '../assets/Wedding.jpg'
import birthday from '../assets/birthday.jpg'
import seeman from '../assets/Seemandham.jpg'
import industrial from '../assets/industrial.jpg'
import corporate from '../assets/corporate.jpg'
import college from '../assets/college.jpg'
import lunch from '../assets/lunch.jpg'
import breakfast from '../assets/breakfast.jpg'
import dinner from '../assets/dinner.jpg'
import tea from '../assets/hightea.jpg'
import CustomerReview from '../components/CustomerReview';

const CateringService = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Hero Banner with Image */}
      <section className="w-full mb-16">
      <img
  src={banner}
  alt="Catering Service Banner"
  className="w-auto h-auto object-contain mx-auto"
/>

</section>

      {/* Introduction Section with Image */}
<section className="mb-16">
  <h2 className="text-5xl font-bold text-gray-800 mb-6">Catering Service</h2>
  <div className="grid md:grid-cols-2 gap-8 items-center">

    {/* Image on Left */}
    <div>
      <img
        src={serImg}
        alt="Catering Presentation"
        className="rounded-xl shadow-xl w-full h-auto object-cover"
      />
    </div>

    {/* Card on Right */}
    <div className="relative bg-orange-50 p-8 rounded-xl shadow-lg text-gray-700">
      {/* Decorative Corners */}
      <span className="absolute top-0 left-0 w-6 h-6 bg-orange-400 rounded-br-full"></span>
      <span className="absolute top-0 right-0 w-6 h-6 bg-orange-400 rounded-bl-full"></span>
      <span className="absolute bottom-0 left-0 w-6 h-6 bg-orange-400 rounded-tr-full"></span>
      <span className="absolute bottom-0 right-0 w-6 h-6 bg-orange-400 rounded-tl-full"></span>

      <p className="mb-4">
        <strong>Catering Service</strong><br />
        Years of involvement and experience in catering services in Chennai mean we know precisely how to do that.
        We will carry our creativity to furnish you with a totally unique service. Reveal to us your arrangements and we
        will go to the kitchen ideas to make a menu experience for your occasion. We will deliver bites that sparkle
        discussion and unite individuals. Whatever your events, be it a wedding, a major birthday, or simply that night
        with family and companions you've been signed to improve the situation months, we are there for you.
      </p>

      <p className="mb-4">
        Inemai caterers, the Best catering services in Chennai considers every one of the elements that you think about
        when arranging your gathering. Big or small budget per pax, the size, the setups, and what you want to achieve
        with your special events. We have a mixed scope of food presentations, including canapes, food bowls, afternoon
        tea and boxed bites, so there is plenty to choose from our catering service in Chennai.
      </p>

      <p className="mb-4">
        <strong>inemai.com</strong> mentioned as Best Catering Services in Chennai by many of our customers, likewise
        provide friendly and efficient staff who arrive with a smile and a great attitude. Our caterers' sufficient energy
        to look into.
      </p>

      <p>
        We are glad to bring our plans to your home and put a face to our business. For large events, we would likewise
        love to mastermind a tasting and a site visit to go over the plan of action.
      </p>
    </div>

  </div>
</section>


      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Outdoor Catering Services in Chennai</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { title: "Wedding Catering", desc: "Exquisite menus for your special day.", img: wedding },
            { title: "Birthday Catering", desc: "Delicious spreads that make celebrations memorable.", img: birthday },
            { title: "Seemandham", desc: "Traditional catering for cultural ceremonies.", img: seeman },
            { title: "College Catering", desc: "Affordable and tasty options.", img: college },
            { title: "Industrial Catering", desc: "Efficient service for factories.", img: industrial},
            { title: "Corporate Catering", desc: "Professional catering for meetings.", img: corporate},
          ].map((service, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
              <img src={service.img} alt={service.title} className="w-full h-40 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

    {/* Pricing Section */}
<section className="mb-16 bg-gradient-to-br from-orange-50 via-white to-orange-100 py-12 px-6 rounded-2xl shadow-inner">
  <h2 className="text-4xl font-extrabold text-gray-800 mb-3 text-center tracking-wide uppercase">
    Catering Service Price
  </h2>
  <p className="text-lg text-gray-600 mb-10 text-center font-medium">
    We made it easy menu for you
  </p>

  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
    {[
      { type: "Breakfast", price: "Rs.110/Pax", image: breakfast },
      { type: "Lunch", price: "Rs.150/Pax", image: lunch },
      { type: "Dinner", price: "Rs.170/Pax", image: dinner },
      { type: "High Tea", price: "Rs.70/Pax", image: tea },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300"
      >
        <img
          src={item.image}
          alt={item.type}
          className="w-full h-36 object-cover mb-4 rounded-lg"
        />
        <h3 className="text-2xl font-semibold text-gray-800 mb-1">{item.type}</h3>
        <p className="text-xl font-bold text-orange-500">{item.price} <span className="text-sm font-medium text-gray-500">Onwards</span></p>
      </div>
    ))}
  </div>
</section>
< CustomerReview />
    </div>
    
  );
};

export default CateringService;
