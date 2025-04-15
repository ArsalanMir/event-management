// src/components/TestimonialsSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Johnson",
    feedback:
      "EventElite made our wedding stress-free and absolutely magical. The decor, food, and coordination were top notch!",
  },
  {
    name: "Mike Thompson",
    feedback:
      "Professional and seamless corporate event planning. Every detail was perfect and the catering was superb!",
  },
  {
    name: "Emily & David",
    feedback:
      "Our engagement party was a dream! Their team handled everything beautifully, from lights to bites!",
  },
];

const TestimonialsSlider = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1A535C] mb-10">What Our Clients Say</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="px-4"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#F5F5F5] rounded-2xl p-8 shadow-md">
                <p className="text-gray-700 text-lg italic mb-4">
                  “{testimonial.feedback}”
                </p>
                <h4 className="text-[#0077B6] font-semibold text-xl">
                  — {testimonial.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
