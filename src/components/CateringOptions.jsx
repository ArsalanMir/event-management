// src/components/CateringOptions.jsx
const cateringItems = [
    {
      title: "Buffet Catering",
      description: "Customizable buffets with a wide selection of cuisines and desserts.",
      icon: "🍽️",
    },
    {
      title: "Plated Meals",
      description: "Elegant multi-course plated meals for weddings and formal events.",
      icon: "🍷",
    },
    {
      title: "Live Counters",
      description: "Interactive food stations like pasta, tacos, grills, and more.",
      icon: "🔥",
    },
    {
      title: "Corporate Lunches",
      description: "Timely, healthy, and delicious meals for business meetings.",
      icon: "🥗",
    },
  ];
  
  const CateringOptions = () => {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A535C] mb-10">
            Our Catering Options
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cateringItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#0077B6] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CateringOptions;
  