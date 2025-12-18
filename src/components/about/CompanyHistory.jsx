export default function CompanyHistory() {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT - TEXT */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <span className="w-10  h-0.5 bg-[#C9A24D]"></span>
            <span className="text-sm uppercase tracking-widest text-[#C9A24D] font-medium">
              Our Story
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#2B2B2B]">
            A Journey of Craftsmanship
          </h2>

          <p className="text-[#3E2723] leading-relaxed mb-4">
            Founded in 2015, our furniture studio began with a simple vision —
            to craft timeless furniture that blends traditional artistry with
            modern living.
          </p>

          <p className="text-[#3E2723] leading-relaxed">
            Every piece we create reflects attention to detail, premium
            materials, and the passion of skilled artisans who believe furniture
            should last for generations.
          </p>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
            alt="Furniture craftsmanship"
            className="rounded-2xl shadow-lg border border-[#E6D5C3]"
          />

          {/* Accent Box */}
          <div className="absolute -bottom-6 -left-6 bg-[#C9A24D] text-[#FAF7F2] px-6 py-4 rounded-xl shadow-lg">
            <p className="text-2xl font-bold">10+</p>
            <p className="text-sm uppercase tracking-wide">
              Years of Excellence
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
