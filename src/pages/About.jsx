// src/pages/About.jsx
const About = () => {
  return (
    <div className="bg-[#F5F5F5] py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-[#1A535C] text-center">
          About EventElite
        </h2>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          EventElite is your trusted partner in creating unforgettable moments. Whether it's a
          luxurious wedding, a grand corporate event, or an intimate celebration, our team
          brings passion, precision, and professionalism to every detail.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
            alt="Event Planning"
            className="rounded-2xl shadow-md"
          />
          <div>
            <h3 className="text-2xl font-semibold text-[#0077B6] mb-4">
              What We Do
            </h3>
            <ul className="list-disc space-y-2 list-inside text-gray-700">
              <li>Full-scale event planning & management</li>
              <li>Custom catering solutions</li>
              <li>Venue selection & decoration</li>
              <li>Entertainment & logistics coordination</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-semibold text-[#1A535C] mb-2">Reliability</h4>
            <p className="text-gray-600">We deliver excellence, on time — every time.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-semibold text-[#1A535C] mb-2">Creativity</h4>
            <p className="text-gray-600">Unique themes, thoughtful touches, and unforgettable ambiance.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-semibold text-[#1A535C] mb-2">Client First</h4>
            <p className="text-gray-600">We tailor every detail to your vision and comfort.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
