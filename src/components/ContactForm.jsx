// src/components/ContactForm.jsx
const ContactForm = () => {
    return (
      <section className="bg-[#F5F5F5] py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-[#1A535C] mb-8">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Tell us about your event..."
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full bg-[#0077B6] text-white py-3 rounded-xl hover:bg-[#005f8e] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactForm;
  