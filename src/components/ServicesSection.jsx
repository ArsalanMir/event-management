// src/components/ServicesSection.jsx
const services = [
    {
      title: "Wedding Planning",
      description: "Elegant weddings tailored to your dreams, from venue to vows.",
      icon: "💍",
    },
    {
      title: "Corporate Events",
      description: "Professional events and conferences with seamless coordination.",
      icon: "🏢",
    },
    {
      title: "Birthday Parties",
      description: "Fun, themed, and memorable birthday celebrations for all ages.",
      icon: "🎉",
    },
    {
      title: "Catering Services",
      description: "Delicious cuisine for every occasion, crafted by expert chefs.",
      icon: "🍽️",
    },
  ];
  
  const ServicesSection = () => {
    return (
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A535C] mb-10">
            Our Services
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#0077B6] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  