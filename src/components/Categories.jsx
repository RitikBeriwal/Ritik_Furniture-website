import React, { useState } from 'react'
import { motion } from "framer-motion";

const Categories = () => {
    const categories = [
        "Sofa Sets",
        "Dining Tables",
        "Beds",
        "Study Tables",
        "Wardrobes",
        "Outdoor Furniture",
        "Decor Items",
    ];

    const products = [
        {
            id: 1,
            name: "Luxury Fabric Sofa",
            category: "Sofa Sets",
            price: "₹45,000",
            image:
                "https://images.unsplash.com/photo-1615873968403-89e068629265",
        },
        {
            id: 2,
            name: "Modern Leather Sofa",
            category: "Sofa Sets",
            price: "₹58,000",
            image:
                "https://images.unsplash.com/photo-1582582425600-6c8c2a1f07e2",
        },
        {
            id: 3,
            name: "Wooden Dining Table",
            category: "Dining Tables",
            price: "₹38,000",
            image:
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        },
        {
            id: 4,
            name: "King Size Bed",
            category: "Beds",
            price: "₹52,000",
            image:
                "https://images.unsplash.com/photo-1616627451515-cbc80e5ece2c",
        },
    ];

    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter((p) => p.category === activeCategory);

    return (
        <div style={{ backgroundColor: "#FAF7F2" }}>
            {/* HERO BACKGROUND */}
            <section className="relative h-[420px] rounded-b-[40px] overflow-hidden">
                <img
                    src="/mnt/data/74e7de62-0845-4867-a1d8-d9a946239500.png"
                    alt="Luxury Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
                >
                    <p className="tracking-widest text-[#C9A24D] text-sm mb-2">
                        READY FOR PRODUCTION
                    </p>

                    <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                        Curated Luxury <br /> Categories
                    </h1>

                    <p className="max-w-2xl text-gray-300 mt-4">
                        Discover premium furniture categories crafted with elegance,
                        dimensional accuracy, and timeless finishes.
                    </p>
                </motion.div>
            </section>

            {/* CONTENT */}
            <section className="max-w-7xl mx-auto px-4 py-14">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {/* FILTER SIDEBAR */}
                    <motion.aside
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-2xl p-6 sticky top-24 h-fit"
                        style={{ backgroundColor: "#E6D5C3" }}
                    >
                        <h3
                            className="text-lg font-semibold mb-6"
                            style={{ color: "#3E2723" }}
                        >
                            Filter By
                        </h3>

                        {/* CATEGORY FILTER */}
                        <div className="mb-8">
                            <p className="font-medium mb-3">Categories</p>
                            <ul className="space-y-2">
                                <li
                                    onClick={() => setActiveCategory("All")}
                                    className="cursor-pointer"
                                    style={{
                                        color:
                                            activeCategory === "All"
                                                ? "#C9A24D"
                                                : "#3E2723",
                                    }}
                                >
                                    All Products
                                </li>

                                {categories.map((cat) => (
                                    <li
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className="cursor-pointer"
                                        style={{
                                            color:
                                                activeCategory === cat
                                                    ? "#C9A24D"
                                                    : "#3E2723",
                                        }}
                                    >
                                        {cat}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* PRICE FILTER (UI Only) */}
                        <div>
                            <p className="font-medium mb-3">Price Range</p>
                            <input
                                type="range"
                                className="w-full accent-[#C9A24D]"
                            />
                        </div>
                    </motion.aside>

                    {/* PRODUCTS */}
                    <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="rounded-2xl overflow-hidden shadow-md"
                                style={{ backgroundColor: "#E6D5C3" }}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-56 w-full object-cover"
                                />

                                <div className="p-5">
                                    <h4
                                        className="text-lg font-semibold"
                                        style={{ color: "#2B2B2B" }}
                                    >
                                        {product.name}
                                    </h4>

                                    <p className="text-sm mb-2">{product.category}</p>

                                    <div className="flex justify-between items-center">
                                        <span
                                            className="font-bold"
                                            style={{ color: "#C9A24D" }}
                                        >
                                            {product.price}
                                        </span>

                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            className="px-4 py-1.5 rounded-full text-sm"
                                            style={{
                                                backgroundColor: "#3E2723",
                                                color: "#FAF7F2",
                                            }}
                                        >
                                            View
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Categories