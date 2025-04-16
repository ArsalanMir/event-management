import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Priya S",
    comment: "These seed balls are amazing! I used them for my wedding return gifts and everyone loved the idea.",
    rating: 5,
  },
  {
    name: "Ravi Kumar",
    comment: "Great initiative! I threw a few on my trip and was surprised to see saplings sprouting weeks later.",
    rating: 4,
  },
  {
    name: "Lakshmi N",
    comment: "Eco-friendly and affordable. The packaging is simple yet effective. Highly recommended!",
    rating: 5,
  },
];

const SeedballReview = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="py-16 bg-green-50">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-10">Customer Reviews</h2>
      <div className="max-w-3xl mx-auto px-4">
        <Slider {...settings}>
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 mx-4 text-center"
            >
              <p className="text-gray-700 text-lg italic mb-4">"{review.comment}"</p>
              <div className="text-yellow-500 mb-2">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <p className="font-semibold text-green-700">- {review.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SeedballReview;
