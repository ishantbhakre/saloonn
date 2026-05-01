export default function Services() {
  const services = [
    "Advanced Hair Cut & Styling",
    "Global Highlights & Botox",
    "Professional Extensions",
    "Acrylic Permanent Extension",
    "Premium Manicure",
    "O3 De-tan Cleanup",
  ];

  return (
    <section className="py-20">
      <h2 className="text-center text-3xl font-bold text-gold mb-10">
        Our Expertise
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-10">
        {services.map((s, i) => (
          <div key={i} className="glass p-6 rounded-xl hover:scale-105 transition">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
