const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO, TechNova",
    review:
      "This CRM has transformed the way we manage our customers. Our sales increased by 35% in just a few months.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Sales Manager, Bright Solutions",
    review:
      "Easy to use, powerful features, and excellent customer support. Highly recommended!",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Founder, Growth Labs",
    review:
      "The automation tools save our team hours every week. A fantastic CRM for growing businesses.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-5 md:py-10 px-10 md:px-6 mt-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 mt-3">
            Trusted by businesses around the world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 hover:border-gray-200 p-4 md:p-6 rounded-xl shadow-xl hover:shadow-xl transition"
            >
              {/* Stars */}
              <div className="text-yellow-500 text-xl mb-1 md:mb-4">★★★★★</div>

              {/* Review */}
              <p className="text-gray-600 italic text-sm md:text-md">"{item.review}"</p>

              {/* User */}
              <div className="mt-2 md:mt-6">
                <h3 className="font-mono md:font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;