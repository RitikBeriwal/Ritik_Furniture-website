export const furnitureData = {
    sofa: {
        basePrice: 500,
        colors: ["Gray", "Blue", "Beige"],
        materials: [
            { name: "Fabric", price: 0 },
            { name: "Leather", price: 200 }
        ],
        sizes: ["2-Seater", "3-Seater"],
        features: [
            { name: "Armrests", price: 50 },
            { name: "Extra Cushions", price: 80 }
        ],
        image: "/assets/sofa.png"
    },
    chair: {
        basePrice: 200,
        colors: ["Black", "White"],
        materials: [
            { name: "Wood", price: 0 },
            { name: "Metal", price: 100 }
        ],
        sizes: ["Standard", "Large"],
        features: [{ name: "Cushion", price: 40 }],
        image: "/assets/chair.png"
    }
};
