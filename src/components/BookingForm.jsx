// src/components/BookingForm.jsx
const BookingForm = () => {
    return (
      <section className="py-16 px-4 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-center text-[#1A535C] mb-8">
            Book Your Event
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
              />
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone Number"
                className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
              />
              <input
                type="date"
                className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
              />
            </div>
  
            <div>
              <select className="w-full border p-3 rounded-xl text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0077B6]">
                <option>Select Event Type</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Corporate</option>
                <option>Other</option>
              </select>
            </div>
  
            <div>
              <textarea
                rows="4"
                placeholder="Additional notes or requirements..."
                className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full bg-[#0077B6] text-white py-3 rounded-xl hover:bg-[#005f8e] transition"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default BookingForm;
  