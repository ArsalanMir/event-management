// src/pages/Services.jsx
const services = [
    {
      title: "Wedding Planning",
      description:
        "We craft unforgettable weddings with detailed planning, stunning decor, and seamless coordination.",
      image: "https://images.unsplash.com/photo-1520777311684-19d3be1d7bad", // Optional
    },
    {
      title: "Corporate Events",
      description:
        "From conferences to product launches, we manage professional events with precision and style.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    },
    {
      title: "Birthday Parties",
      description:
        "Celebrate life’s milestones with creative themes, vibrant decor, and personalized setups.",
      image: "https://images.unsplash.com/photo-1608571426270-2fddaeec7f57",
    },
    {
      title: "Anniversary Celebrations",
      description:
        "Mark special milestones with elegance, intimacy, and meaningful experiences.",
      image: "https://images.unsplash.com/photo-1594148777112-3d27e8503e5c",
    },
    {
      title: "Concerts & Shows",
      description:
        "From stage setup to crowd engagement, we organize thrilling entertainment events.",
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    },
    {
      title: "Theme Decor & Styling",
      description:
        "We bring your vision to life with custom themes, decorations, and lighting solutions.",
      image: "https://images.unsplash.com/photo-1545235617-9465d2da1800",
    },
  ];
  
  const Services = () => {
    return (
      <div className="bg-[#F5F5F5] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1A535C] text-center mb-10">
            Our Services
          </h2>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-[#0077B6]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;
  