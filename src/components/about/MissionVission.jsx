export default function MissionVision() {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12  h-0.5 bg-[#C9A24D]"></span>
            <span className="text-sm uppercase tracking-widest text-[#C9A24D] font-medium">
              Our Purpose
            </span>
            <span className="w-12  h-0.5 bg-[#C9A24D]"></span>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* MISSION */}
          <div className="bg-[#E6D5C3]/40 p-10 rounded-2xl border border-[#E6D5C3] hover:shadow-lg transition">
            <h3 className="font-serif text-2xl font-semibold mb-4 text-[#2B2B2B]">
              Our Mission
            </h3>
            <p className="text-[#3E2723] leading-relaxed">
              To design and deliver durable, elegant furniture crafted with
              precision, premium materials, and a deep understanding of our
              customers’ lifestyles.
            </p>
          </div>

          {/* VISION */}
          <div className="bg-[#E6D5C3]/40 p-10 rounded-2xl border border-[#E6D5C3] hover:shadow-lg transition">
            <h3 className="font-serif text-2xl font-semibold mb-4 text-[#2B2B2B]">
              Our Vision
            </h3>
            <p className="text-[#3E2723] leading-relaxed">
              To become a trusted name in custom and luxury furniture by setting
              benchmarks in craftsmanship, design innovation, and customer
              satisfaction.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
