import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChefHat, Flame, Leaf, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { categories, products } from "../data/products";
import { useCart } from "../context/CartContext";
import { fadeUp, stagger, hoverLift } from "../utils/motion";

const categoryIcons = {
  all: <ChefHat className="h-4 w-4" />,
  starters: <Flame className="h-4 w-4" />,
  main: <ChefHat className="h-4 w-4" />,
  desserts: <Leaf className="h-4 w-4" />,
};

const Menu = () => {
  const navigate = useNavigate();
  const { addItem, openCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="py-14 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={stagger}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-black/50 mb-3">
            Our Menu
          </p>
          <motion.h1
            className="text-5xl font-bold text-black font-display mb-4"
            variants={fadeUp}
          >
            Starters, Mains, Desserts
          </motion.h1>
          <motion.p className="text-lg text-black/60 max-w-3xl mx-auto" variants={fadeUp}>
            Simple, fresh, and ready to order.
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition duration-300 cursor-pointer border ${
                activeCategory === category.id
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black/10 hover:border-black/30"
              } font-semibold`}
            >
              {categoryIcons[category.id]}
              {category.name}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={stagger}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="border border-black/10 rounded-3xl overflow-hidden hover:shadow-2xl transition duration-300 bg-white"
              variants={fadeUp}
              whileHover={hoverLift.whileHover}
              transition={hoverLift.transition}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-black text-white px-4 py-1 rounded-full text-xs uppercase tracking-[0.2em]">
                    Popular
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white text-2xl font-semibold">Rs {item.price}</div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-black mb-2">{item.name}</h3>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(item.rating)
                            ? "text-black fill-black"
                            : "text-black/20"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-black/60">{item.rating}</span>
                </div>

                <p className="text-black/60 mb-6">{item.description}</p>

                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={() => {
                      addItem(item, 1);
                      openCart();
                    }}
                    className="flex-1 bg-black text-white px-5 py-3 rounded-full hover:bg-black/90 transition duration-300 font-semibold cursor-pointer flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="flex-1 border border-black/20 text-black hover:bg-black hover:text-white px-5 py-3 rounded-full font-semibold cursor-pointer transition duration-300"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-black mb-2">No items found</h3>
            <p className="text-black/60">Try another category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;