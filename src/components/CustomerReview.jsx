import React from 'react';
import Slider from 'react-slick';
import { FaStar, FaRegStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
  {
    name: "Ravi Kumar",
    review: "Absolutely loved their catering! Food was delicious and service was top-notch.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    review: "Great menu variety and timely service. Everyone at our event was impressed!",
    rating: 4
  },
  {
    name: "Ajith R",
    review: "Professional team and tasty food. Highly recommend for any family functions.",
    rating: 5
  },
  {
    name: "Sneha L",
    review: "The dinner was a hit! We’ll definitely hire them again.",
    rating: 4
  }
];

const CustomerReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  };

  return (
    <section className="bg-orange-50 py-12 px-4 rounded-2xl mt-16 shadow-inner">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">What Our Customers Say</h2>
      <div className="max-w-3xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <p className="text-lg text-gray-700 mb-4 italic">"{testimonial.review}"</p>
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) =>
                  i < testimonial.rating ? (
                    <FaStar key={i} className="text-orange-400" />
                  ) : (
                    <FaRegStar key={i} className="text-orange-200" />
                  )
                )}
              </div>
              <h4 className="text-xl font-semibold text-gray-800">{testimonial.name}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerReview;
