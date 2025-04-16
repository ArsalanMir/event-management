import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20" id="contact">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Get in Touch</h2>
      <p className="text-center text-gray-600 mb-12">We'd love to hear from you. Contact us for queries or custom orders!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-md">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input type="text" placeholder="Your Name" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input type="email" placeholder="you@example.com" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Subject</label>
            <input type="text" placeholder="Subject" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea rows="5" placeholder="Your Message" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
          </div>

          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-orange-50 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
          <p className="text-gray-700 mb-4"><strong>Phone:</strong> <a href="tel:+919445668787" className="text-orange-500">+91 94456 68787</a></p>
          <p className="text-gray-700 mb-4"><strong>Email:</strong> <a href="mailto:info@inemai.com" className="text-orange-500">info@inemai.com</a></p>
          <p className="text-gray-700"><strong>Address:</strong><br /> Inemai Caterers, Chennai, Tamil Nadu, India</p>

          <div className="mt-8">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              className="w-full h-48 rounded-lg border"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
