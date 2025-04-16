const PricingSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">CATERING SERVICE PRICE</h2>
        <p className="text-xl text-center text-gray-600 mb-12">WE MADE IT EASY MENU FOR YOU</p>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-orange-50 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Breakfast</h3>
            <p className="text-orange-500 font-bold text-xl">Rs.110/Pax Onwards</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Lunch</h3>
            <p className="text-orange-500 font-bold text-xl">Rs.150/Pax Onwards</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Dinner</h3>
            <p className="text-orange-500 font-bold text-xl">Rs.170/Pax Onwards</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">High Tea</h3>
            <p className="text-orange-500 font-bold text-xl">Rs.70/Pax Onwards</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 inline-flex items-center">
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;