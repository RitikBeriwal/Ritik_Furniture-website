import React, { useState, useEffect } from "react";
import {
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  Truck,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom"

const mayWeSuggest = [
  {
    id: 1,
    name: "Oakwood Side chair",
    price: "₹9,999",
    rating: 4.2,
    reviews: 18,
    colors: {
      Oak: {
        colorCode: "#E2D8C3",
        images: [
          "https://i.pinimg.com/1200x/58/68/9f/58689ff8068023795f5e6aa2c7cdd20b.jpg",
          "https://i.pinimg.com/736x/16/33/6c/16336c3a50cb20615658c3f5a038a20f.jpg",
          "https://i.pinimg.com/736x/ae/89/69/ae89697bf960c3cbebec5f0a923c817e.jpg",
        ],
      },
    },
  },
  {
    id: 2,
    name: "Classic Arm Chair",
    price: "₹18,499",
    rating: 4,
    reviews: 20,
    colors: {
      Walnut: {
        colorCode: "#6B4F2A",
        images: [
          "https://i.pinimg.com/736x/ad/0e/d9/ad0ed94f250af3cf2ea46ba6f183d43a.jpg",
          "https://i.pinimg.com/736x/03/dd/46/03dd462eec8f2584200c469663c96075.jpg",
          "https://i.pinimg.com/1200x/84/ac/8b/84ac8b1b71d33f0e2ec913bf02e5b6cc.jpg",
        ],
      },
    },
  },
  {
    id: 3,
    name: "Modern Coffee Table",
    price: "₹14,299",
    rating: 4.3,
    reviews: 31,
    colors: {
      Brown: {
        colorCode: "#8B5E3C",
        images: [
          "https://i.pinimg.com/736x/f1/30/22/f130229242db444ae2e29ece8f3858dd.jpg",
          "https://i.pinimg.com/736x/fc/b3/0d/fcb30da0cc15852a115376bfb9ad2ad6.jpg",
          "https://i.pinimg.com/736x/5b/3d/b3/5b3db332a7e116855e9a85ae9a5472d7.jpg",
        ],
      },
    },
  },
  {
    id: 4,
    name: "Minimal Sofa",
    price: "₹55,999",
    rating: 4.1,
    reviews: 12,
    colors: {
      Grey: {
        colorCode: "#B8B8B8",
        images: [
          "https://i.pinimg.com/1200x/87/87/76/878776b41c2a608e357392baddac952b.jpg",
          "https://i.pinimg.com/736x/ef/33/5f/ef335fe793ac8ae5837c6dbd1651070c.jpg",
          "https://i.pinimg.com/736x/87/ff/59/87ff598b18de6b3ef220a7d2f114ca8c.jpg",
        ],
      },
    },
  },
  {
    id: 5,
    name: "Royal Upholstered Bed",
    price: "₹74,799",
    rating: 4.5,
    reviews: 24,
    colors: {
      Beige: {
        colorCode: "#D6C5B3",
        images: [
          "https://i.pinimg.com/736x/2e/33/73/2e3373090d86a0542792bd3dc02ab83f.jpg",
          "https://i.pinimg.com/1200x/8d/24/8b/8d248b25776f7683d0ed01d19b2e6924.jpg",
          "https://i.pinimg.com/1200x/2e/6f/6a/2e6f6a1f7b78312785442c0b2ad202c2.jpg",
        ],
      },
    },
  },
  {
    id: 6,
    name: "self",
    price: "₹14,799",
    rating: 4.5,
    reviews: 46,
    colors: {
      Beige: {
        colorCode: "#D6C5B3",
        images: [
          "https://i.pinimg.com/736x/6d/de/64/6dde647a457ad3a1b3b991618db23ab2.jpg",
          "https://i.pinimg.com/736x/37/f0/97/37f097d75808dd7fa882196f1ca93251.jpg",
          "https://i.pinimg.com/736x/51/bb/91/51bb915cd641c5242220e9c6cf8a5a87.jpg",
        ],
      },
    },
  },
  {
    id: 7,
    name: "Green Velvet Fabric Sofa",
    price: "55,678",
    rating: 4.0,
    reviews: 20,
    colors: {
      Beige: {
        colorCode: "#D6C5B3",
        images: [
          "https://i.pinimg.com/1200x/a6/ea/1a/a6ea1abf6041b5473d46129554ffaa66.jpg",
          "https://assets.wfcdn.com/im/46530601/resize-h1200-w1200%5Ecompr-r85/3186/318628699/Deluxe+solid+wood+chair-107742151.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQy6TdWhdfWiqWFG4SLnwFOl8Jdtwj-bxMw&s",
        ],
      },
    },
  },
  {
    id: 8,
    name: "center table;",
    price: "₹74,609",
    rating: 4.4,
    reviews: 24,
    colors: {
      Beige: {
        colorCode: "#D6C5B3",
        images: [
          "https://i.pinimg.com/736x/91/7c/18/917c1802c036a8367bad873283f4290c.jpg",
          "https://i.pinimg.com/736x/50/46/43/504643e9bc4f0ba6ae09c9bf2b249ead.jpg",
          "https://i.pinimg.com/736x/b9/5d/e7/b95de7470f96285f80898f576ebd9a41.jpg",

        ],
      },
    },
  },
  {
    id: 9,
    name: " Dinning table",
    price: "₹53,398",
    rating: 4.1,
    reviews: 29,
    colors: {
      Beige: {
        colorCode: "#D6C5B3",
        images: [
          "https://i.pinimg.com/1200x/96/d0/ac/96d0acddf95c1f3a2551e51cce6047fc.jpg",
          "https://i.pinimg.com/736x/c1/dd/b8/c1ddb813a8959ac58f7f3c27d36a3e97.jpg",
          "https://i.pinimg.com/1200x/88/e8/1b/88e81b1cbf1170baab139afc707b6896.jpg",
        ],
      },
    },
  },
  {
    id: 10,
    name: " wooden temple",
    price: "₹24,945",
    rating: 5.5,
    reviews: 24,
    colors: {
      Beige: {
        colorCode: "#D6C5B3",
        images: [
          "https://i.etsystatic.com/25545088/r/il/394c9a/6463603060/il_1588xN.6463603060_9v28.jpg",
          "https://i.etsystatic.com/25545088/r/il/f33df3/6463603070/il_1588xN.6463603070_iq3y.jpg",
          "https://i.etsystatic.com/25545088/r/il/62a876/6463603074/il_1588xN.6463603074_mlza.jpg",

        ],
      },
    },
  },
];


/* ===================== DATA ===================== */
 /* 🔴 SAME DATA AS YOUR CODE (NO CHANGE) */;

/* ===================== COMPONENT ===================== */
export default function ProductDetailPage() {
  const location = useLocation();
  const productFromList = location.state?.product;

  const buildMainProductFromItem = (item) => {
    if (!item) return mayWeSuggest[0];

    const priceString =
      typeof item.price === "number" ? `₹${item.price}` : item.price || "₹0";

    return {
      id: item.id,
      name: item.name,
      price: priceString,
      rating: item.rating || 4.3,
      reviews: item.reviews || 10,
      colors: {
        Default: {
          colorCode: "#D6C5B3",
          images: [item.image, item.image, item.image],
        },
      },
    };
  };

  const initialMainProduct = buildMainProductFromItem(productFromList);
  const initialColor = Object.keys(initialMainProduct.colors)[0];

  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("info");
  const [activeImage, setActiveImage] = useState(0);
  const [mainProduct, setMainProduct] = useState(null);
  const [activeColor, setActiveColor] = useState(null);

  const VISIBLE_COUNT = 5;
  const [suggestIndex, setSuggestIndex] = useState(0);
  const maxIndex = Math.max(mayWeSuggest.length - VISIBLE_COUNT, 0);

  useEffect(() => {
    if (mayWeSuggest.length > 0) {
      const p = mayWeSuggest[0];
      setMainProduct(p);
      setActiveColor(Object.keys(p.colors)[0]);
      setActiveImage(0);
    }
  }, []);

  if (!mainProduct || !activeColor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading…
      </div>
    );
  }


  const activeImages = mainProduct.colors[activeColor].images;

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < full
            ? "fill-[#C9A24D] text-[#C9A24D]"
            : "text-gray-300"
        }
      />
    ));
  };

  const handleSuggestClick = (item) => {
    setMainProduct(item);
    setActiveColor(Object.keys(item.colors)[0]);
    setActiveImage(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextSuggest = () =>
    setSuggestIndex((p) =>
      p + VISIBLE_COUNT > maxIndex ? maxIndex : p + VISIBLE_COUNT
    );

  const prevSuggest = () =>
    setSuggestIndex((p) => (p - VISIBLE_COUNT < 0 ? 0 : p - VISIBLE_COUNT));

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B2B2B] mt-20">

      {/* ================= PRODUCT ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 grid md:grid-cols-2 gap-14">

        {/* LEFT */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <img
            src={activeImages[activeImage]}
            className="rounded-2xl w-full h-[300px] md:h-[420px] object-cover"
          />

          <div className="flex gap-3 mt-4 overflow-x-auto">
            {activeImages.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(i)}
                className={`w-20 h-20 cursor-pointer rounded-lg border-2 ${activeImage === i
                  ? "border-[#C9A24D]"
                  : "border-[#E6D5C3]"
                  }`}
              />
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-3xl font-serif mb-3">{mainProduct.name}</h2>
          <p className="text-2xl text-[#C9A24D] mb-4">{mainProduct.price}</p>

          <div className="flex items-center gap-1 mb-4">
            {renderStars(mainProduct.rating)}
            <span className="text-sm ml-2">
              ({mainProduct.reviews} reviews)
            </span>
          </div>

          {/* COLORS */}
          <div className="mb-6">
            <p className="text-sm mb-2">
              Color: <strong>{activeColor}</strong>
            </p>
            <div className="flex gap-3">
              {Object.entries(mainProduct.colors).map(([color, data]) => (
                <button
                  key={color}
                  onClick={() => {
                    setActiveColor(color);
                    setActiveImage(0);
                  }}
                  className={`w-10 h-10 rounded-full border-2 ${activeColor === color ? "ring-2 ring-black" : ""
                    }`}
                  style={{ backgroundColor: data.colorCode }}
                />
              ))}
            </div>
          </div>

          {/* ✅ QTY + CART (RESPONSIVE FIX) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <div className="flex border rounded-lg w-fit mx-auto sm:mx-0">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4">−</button>
              <span className="px-4">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-4">+</button>
            </div>

            <Link to="/" className="w-full sm:w-auto">
              <button className="w-full bg-[#C9A24D] text-white px-6 py-3 rounded-xl">
                Buy Now
              </button>
            </Link>

            <Heart className="mx-auto sm:mx-0" />
          </div>

          {/* TRUST */}

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm mb-6">
            <div className="flex gap-2"><Truck size={16} /> Free Delivery</div>
            <div className="flex gap-2"><RefreshCcw size={16} /> Easy Returns</div>
            <div className="flex gap-2"><ShieldCheck size={16} /> 5 Yr Warranty</div>

          </div>

          {/* TABS */}
          <div className="flex gap-6 border-b mt-1 mb-8">
            {["info", "delivery", "reviews"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 ${activeTab === tab ? "border-b-2 border-[#C9A24D]" : ""
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "info" && (
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Premium solid wood construction</li>
              <li>Handcrafted by skilled artisans</li>
              <li>Matte finish with scratch resistance</li>
              <li>Suitable for living & lounge areas</li>
            </ul>
          )}

          {activeTab === "delivery" && (
            <div className="text-sm space-y-2">
              <p>🚚 Delivery within 5–7 working days</p>
              <p>🔄 7-day hassle-free return</p>
              <p>🛠 Free installation assistance</p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="text-sm space-y-3">
              <p>⭐ ⭐ ⭐ ⭐ ⭐ – “Excellent quality & finish”</p>
              <p>⭐ ⭐ ⭐ ⭐ – “Looks premium in living room”</p>
            </div>
          )}
        </motion.div>
      </section>

      {/* ================= MAY WE SUGGEST (RESPONSIVE SLIDER) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-1">
        <h3 className="text-xl mb-6 font-serif">May We Suggest</h3>

        <div className="relative hidden md:block">
          <button
            onClick={prevSuggest}
            disabled={suggestIndex === 0}
            className="absolute -left-10 top-1/2"
          >
            <ChevronLeft />
          </button>

          <div className="grid grid-cols-5 gap-16">
            {mayWeSuggest
              .slice(suggestIndex, suggestIndex + VISIBLE_COUNT)
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSuggestClick(item)}
                  className="cursor-pointer text-center hover:scale-105 transition"
                >
                  <img
                    src={Object.values(item.colors)[0].images[0]}
                    className="h-40 mx-auto rounded-xl object-cover"
                  />
                  <p className="mt-3 font-medium">{item.name}</p>
                  <p className="opacity-70">{item.price}</p>
                  <div className="flex justify-center mt-1">
                    {renderStars(item.rating)}
                  </div>
                </div>
              ))}
          </div>

          <button
            onClick={nextSuggest}
            disabled={suggestIndex === maxIndex}
            className="absolute -right-10 top-1/2"
          >
            <ChevronRight />
          </button>
        </div>

        {/* 📱 MOBILE SLIDER */}
        <div className="flex md:hidden gap-5 overflow-x-auto pb-4">
          {mayWeSuggest.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSuggestClick(item)}
              className="min-w-[160px] text-center cursor-pointer"
            >
              <img
                src={Object.values(item.colors)[0].images[0]}
                className="h-36 w-full rounded-xl object-cover"
              />
              <p className="mt-2 text-sm font-medium">{item.name}</p>
              <p className="text-sm opacity-70">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
