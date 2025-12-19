export default function Craftsmanship() {
  return (
    <section
      className="relative py-28"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Walnut Overlay */}
      <div className="absolute inset-0 bg-[#3E2723]/80"></div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10  h-0.5 bg-[#C9A24D]"></span>
            <span className="text-sm uppercase tracking-widest text-[#C9A24D]">
              Our Expertise
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#FAF7F2]">
            Craftsmanship <br /> & Quality
          </h2>

          <p className="text-[#E6D5C3] text-lg">
            We combine premium materials, skilled artisans, and
            meticulous attention to detail to create furniture that
            stands the test of time.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Premium Wood Selection",
            "Expert Artisans",
            "Precision Finishing",
            "Strict Quality Control",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#FAF7F2]/10 backdrop-blur-md p-6 rounded-2xl border border-[#E6D5C3]/40 hover:bg-[#FAF7F2]/20 transition"
            >
              <p className="font-semibold text-[#FAF7F2]">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
