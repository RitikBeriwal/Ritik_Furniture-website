import { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Ruler, Upload, Check } from "lucide-react";

export default function CustomFurnitureBuilder() {
    const [style, setStyle] = useState("Mid-Century");
    const [fabric, setFabric] = useState("Emerald Royal Velvet");
    const [wood, setWood] = useState("American Black Walnut");
    const [width, setWidth] = useState(220);
    const [depth, setDepth] = useState(95);

    const estimatedPrice = 2400 + (width - 200) * 3 + (depth - 90) * 2;

    return (
        <div className="min-h-screen bg-[#F7F3EE] px-4 md:px-10 py-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT SECTION */}
                <div className="lg:col-span-2 space-y-10">
                    <header>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#3E2723]">
                            Design Your Masterpiece
                        </h1>
                        <p className="text-gray-600 mt-2 max-w-xl">
                            Customize every detail to match your space and style.
                        </p>
                    </header>

                    {/* 1. STYLE SELECTION */}
                    <section>
                        <h2 className="font-semibold mb-4">1. Select Style</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {["Mid-Century", "Contemporary", "Classic"].map((item) => (
                                <motion.div
                                    key={item}
                                    whileHover={{ scale: 1.03 }}
                                    onClick={() => setStyle(item)}
                                    className={`cursor-pointer rounded-xl p-4 shadow bg-white border ${style === item ? "border-[#3E2723]" : "border-transparent"
                                        }`}
                                >
                                    <div className="h-32 bg-gray-200 rounded mb-3" />
                                    <p className="font-medium">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* 2. MATERIAL SELECTION */}
                    <section>
                        <h2 className="font-semibold mb-4">2. Material Selection</h2>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-medium mb-2">Upholstery</p>
                                <div className="flex flex-wrap gap-3">
                                    {["Emerald Royal Velvet", "Ash Grey Linen", "Charcoal Leather"].map(
                                        (item) => (
                                            <button
                                                key={item}
                                                onClick={() => setFabric(item)}
                                                className={`px-4 py-2 rounded-full border text-sm ${fabric === item
                                                    ? "bg-[#3E2723] text-white"
                                                    : "bg-white"
                                                    }`}
                                            >
                                                {item}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-medium mb-2">Base Finish</p>
                                <div className="flex gap-3">
                                    {["American Black Walnut", "Natural Oak", "Dark Teak"].map(
                                        (item) => (
                                            <button
                                                key={item}
                                                onClick={() => setWood(item)}
                                                className={`px-4 py-2 rounded-full border text-sm ${wood === item
                                                    ? "bg-[#3E2723] text-white"
                                                    : "bg-white"
                                                    }`}
                                            >
                                                {item}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. DIMENSIONS */}
                    <section>
                        <h2 className="font-semibold mb-4">3. Custom Dimensions</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white p-4 rounded-xl shadow">
                                <label className="text-sm font-medium">Width ({width} cm)</label>
                                <input
                                    type="range"
                                    min="180"
                                    max="300"
                                    value={width}
                                    onChange={(e) => setWidth(+e.target.value)}
                                    className="w-full mt-3"
                                />
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow">
                                <label className="text-sm font-medium">Depth ({depth} cm)</label>
                                <input
                                    type="range"
                                    min="80"
                                    max="140"
                                    value={depth}
                                    onChange={(e) => setDepth(+e.target.value)}
                                    className="w-full mt-3"
                                />
                            </div>
                        </div>
                    </section>

                    {/* 4. REFERENCE */}
                    <section>
                        <h2 className="font-semibold mb-4">4. Inspiration Reference</h2>
                        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-3">
                            <Upload size={18} />
                            <input
                                type="text"
                                placeholder="Paste image link or upload reference"
                                className="w-full outline-none text-sm"
                            />
                        </div>
                    </section>
                </div>

                {/* RIGHT SUMMARY */}
                <aside className="bg-white rounded-2xl shadow-xl p-6 h-fit sticky top-6">
                    <div className="h-40 bg-gray-200 rounded-xl mb-4" />
                    <h3 className="font-semibold">The Kensington</h3>
                    <p className="text-sm text-gray-500 mb-4">{style} Custom Sofa</p>

                    <ul className="text-sm space-y-1 mb-4">
                        <li><Check size={14} className="inline" /> {fabric}</li>
                        <li><Check size={14} className="inline" /> {wood}</li>
                        <li><Check size={14} className="inline" /> {width} × {depth} cm</li>
                    </ul>

                    <div className="border-t pt-4">
                        <p className="text-sm text-gray-500">Estimated Price</p>
                        <p className="text-2xl font-bold text-[#3E2723]">
                            ₹{estimatedPrice.toLocaleString()}
                        </p>
                    </div>

                    <button className="mt-6 w-full bg-[#3E2723] text-white py-3 rounded-xl">
                        Send Custom Request
                    </button>
                </aside>
            </div>
        </div>
    );
}
