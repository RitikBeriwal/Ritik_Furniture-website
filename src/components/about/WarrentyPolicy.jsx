import { ShieldCheck, RefreshCw, Award } from "lucide-react";

export default function WarrantyPolicy() {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#2B2B2B]">
            Warranty & Care Promise
          </h2>
          <p className="text-[#3E2723] mt-3 max-w-2xl mx-auto">
            We stand behind our craftsmanship with reliable warranty coverage
            and hassle-free replacement support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-[#E6D5C3]/50 p-8 rounded-2xl border border-[#E6D5C3] hover:shadow-lg transition">
            <ShieldCheck className="w-10 h-10 text-[#C9A24D] mb-4" />
            <h3 className="font-serif text-lg font-semibold mb-2 text-[#2B2B2B]">
              1-Year Warranty
            </h3>
            <p className="text-[#3E2723] text-sm leading-relaxed">
              All products come with a 1-year manufacturing warranty,
              ensuring long-lasting durability and peace of mind.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#E6D5C3]/50 p-8 rounded-2xl border border-[#E6D5C3] hover:shadow-lg transition">
            <RefreshCw className="w-10 h-10 text-[#C9A24D] mb-4" />
            <h3 className="font-serif text-lg font-semibold mb-2 text-[#2B2B2B]">
              Free Replacement
            </h3>
            <p className="text-[#3E2723] text-sm leading-relaxed">
              Any manufacturing defects or damaged parts are replaced
              free of cost within the warranty period.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#E6D5C3]/50 p-8 rounded-2xl border border-[#E6D5C3] hover:shadow-lg transition">
            <Award className="w-10 h-10 text-[#C9A24D] mb-4" />
            <h3 className="font-serif text-lg font-semibold mb-2 text-[#2B2B2B]">
              Quality Assurance
            </h3>
            <p className="text-[#3E2723] text-sm leading-relaxed">
              Every piece goes through strict quality checks before
              delivery to meet our craftsmanship standards.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
