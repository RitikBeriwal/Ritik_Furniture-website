import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const CategoryProducts = () => {
    const { type } = useParams(); // bed / sofa / chair etc
    const [activeCategory, setActiveCategory] = useState("All");

    /* ================= DATA ================= */

    const furnitureSections = [
        {
            heading: "Bedroom Furniture",
            category: "Bedroom",
            description:
                "Transform your bedroom into a refined retreat with thoughtfully designed beds and storage.",
            items: [
                {
                    name: "Luxury Bed",
                    type: "Bed",
                    typeKey: "bed",
                    bg: "#D1C4B2",
                    image:
                        "https://i.pinimg.com/736x/ef/ff/34/efff34937ef6991f999af0dc07a723ff.jpg",
                },
                {
                    name: "Modern Wardrobe",
                    type: "Storage",
                    typeKey: "wardrobe",
                    bg: "#BFDCE5",
                    image:
                        "https://i.pinimg.com/1200x/32/b3/9e/32b39e7a85a97f1a07df6484a14c82b1.jpg",
                },
            ],
        },

        {
            heading: "Living Room Furniture",
            category: "Living",
            description:
                "Create an inviting living space with modern sofas and accent seating.",
            items: [
                {
                    name: "Luxury Sofa Set",
                    type: "Sofa",
                    typeKey: "sofa",
                    bg: "#1E5F74",
                    image:
                        "https://i.pinimg.com/1200x/af/bd/cf/afbdcf71db5b292e7f58d84ba6bc407d.jpg",
                },
                {
                    name: "Accent Chair",
                    type: "Chair",
                    typeKey: "chair",
                    bg: "#B6A44C",
                    image:
                        "https://i.pinimg.com/1200x/00/71/11/0071110882356dcfe138a82494212e1f.jpg",
                },
            ],
        },

        {
            heading: "Study Furniture",
            category: "Study",
            description:
                "Design a focused workspace with ergonomic furniture.",
            items: [
                {
                    name: "Study Table",
                    type: "Desk",
                    typeKey: "studytable",
                    bg: "#E3B23C",
                    image:
                        "https://i.pinimg.com/1200x/d5/fb/23/d5fb23f8a9a02376da29570e9d70157a.jpg",
                },
            ],
        },

        {
            heading: "Bathroom Furniture",
            category: "Bathroom",
            description:
                "Sleek storage and functional furniture for modern bathrooms.",
            items: [
                {
                    name: "Vanity Unit",
                    type: "Vanity",
                    typeKey: "vanity",
                    bg: "#E2DED6",
                    image:
                        "https://i.pinimg.com/1200x/8b/49/25/8b49255acfa55b3177ceb58a7d728e62.jpg",
                },
            ],
        },

        {
            heading: "Garden Furniture",
            category: "Garden",
            description:
                "Relax outdoors with durable and elegant garden furniture.",
            items: [
                {
                    name: "Outdoor Sofa Set",
                    type: "Seating",
                    typeKey: "outdoorsofa",
                    bg: "#D6E2D1",
                    image:
                        "https://i.pinimg.com/1200x/38/46/bc/3846bc52ece40f7926c1e3a8be68caea.jpg",
                },
            ],
        },

        {
            heading: "Kitchen Furniture",
            category: "Kitchen",
            description:
                "Optimize space with functional and elegant kitchen furniture.",
            items: [
                {
                    name: "Kitchen Island",
                    type: "Island",
                    typeKey: "kitchenisland",
                    bg: "#DAD1C3",
                    image:
                        "https://i.pinimg.com/1200x/71/bb/cb/71bbcb9c8561f9c9ad34dbe68982d67a.jpg",
                },
            ],
        },
    ];

    /* ================= FILTER LOGIC ================= */

    const filteredSections = furnitureSections
        .map((section) => ({
            ...section,
            items: section.items.filter(
                (item) =>
                    (!type || item.typeKey === type) &&
                    (activeCategory === "All" ||
                        section.category === activeCategory)
            ),
        }))
        .filter((section) => section.items.length > 0);

    /* ================= UI ================= */

    return (
        <div className="bg-[#FAF7F2] min-h-screen">
            {/* HERO */}
            <section className="m-6 md:m-10 relative h-[420px] rounded-3xl overflow-hidden">
                <img
                    src="https://i.pinimg.com/736x/fc/5d/01/fc5d01f42f2cb6ef995b51d59ed26f15.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Hero"
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-white text-4xl md:text-5xl font-serif font-bold">
                        Curated Furniture Categories
                    </h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {/* FILTER */}
                    <aside className="sticky top-24 h-fit rounded-2xl p-6 bg-[#E6D5C3]">
                        <h3 className="font-semibold mb-4">Category</h3>

                        {[
                            "All",
                            "Bedroom",
                            "Living",
                            "Study",
                            "Bathroom",
                            "Garden",
                            "Kitchen",
                        ].map((cat) => (
                            <p
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`cursor-pointer mb-2 ${activeCategory === cat
                                    ? "text-[#C9A24D] font-semibold"
                                    : "text-[#3E2723]"
                                    }`}
                            >
                                {cat}
                            </p>
                        ))}
                    </aside>

                    {/* SECTIONS */}
                    <div className="lg:col-span-3 space-y-20">
                        {filteredSections.map((section) => (
                            <div key={section.heading}>
                                <h2 className="text-3xl font-serif mb-2">
                                    {section.heading}
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    {section.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {section.items.map((item) => (
                                        <motion.div
                                            key={item.name}
                                            whileHover={{ y: -8 }}
                                            className="bg-[#E6D5C3] rounded-2xl overflow-hidden shadow"
                                        >
                                            <Link to={`/category/${item.typeKey}`}>
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-52 w-full object-cover"
                                                />
                                                <div className="p-4 relative">
                                                    <h3 className="font-semibold">
                                                        {item.name}
                                                    </h3>
                                                    <span className="absolute right-4 bottom-4 w-9 h-9 rounded-full bg-[#3E2723] text-white flex items-center justify-center">
                                                        →
                                                    </span>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CategoryProducts;
