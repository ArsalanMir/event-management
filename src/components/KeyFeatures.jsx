const KeyFeatures = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Catering Service */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Inemai Catering & Event</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">Catering Service</h3>
              <p className="text-gray-600 mb-4">
                We do outdoor Catering Service in Chennai with familiar menus of Veg and Non-Veg. 
                We serve Breakfast, Lunch, Dinner & Snacks in Buffet or Leaf service. 
                You can explore the menu and price here. Get Catering instant Price Estimation.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">Event Management</h3>
              <p className="text-gray-600">
                We make your event as much as Grand & Sweetly. Astonish your guest with many memorable moments 
                and leave positive feedback by <strong>Event Management</strong> in Chennai. 
                Book us for Birthdays, Engagements, Wedding receptions & Corporate events/outings.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Journey</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500">24,900</div>
                <div className="text-gray-600">Plates Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500">190</div>
                <div className="text-gray-600">Happy Events</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500">15</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500">245</div>
                <div className="text-gray-600">Menu items</div>
              </div>
            </div>

            {/* Appointment Form */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Book An APPOINTMENT</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-lg" />
                <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" />
                <input type="tel" placeholder="Phone" className="w-full px-4 py-2 border rounded-lg" />
                <input type="date" placeholder="mm/dd/yyyy" className="w-full px-4 py-2 border rounded-lg" />
                <input type="time" className="w-full px-4 py-2 border rounded-lg" />
                <input type="text" placeholder="Address to Meet" className="w-full px-4 py-2 border rounded-lg" />
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full w-full transition duration-300">
                  SCHEDULE NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default KeyFeatures;