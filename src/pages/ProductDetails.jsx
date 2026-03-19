import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Clock,
  Plus,
  Minus,
  ShoppingBag,
  Heart,
} from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { fadeUp, stagger, hoverLift } from "../utils/motion";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = useMemo(() => {
    const match = products.find((item) => item.id === Number(id));
    return match || products[0];
  }, [id]);

  const categoryLabel = {
    starters: "Starters",
    main: "Main Course",
    desserts: "Desserts",
  };

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 3);

  const handleQuantity = (type) => {
    if (type === "increase") setQuantity(quantity + 1);
    if (type === "decrease" && quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    openCart();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white border-b border-black/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-black/70 hover:text-black hover:bg-black/5 transition cursor-pointer rounded-full px-4 py-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Menu</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 border border-black/10 rounded-3xl shadow-lg p-8 bg-white"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <div className="relative rounded-2xl overflow-hidden border border-black/10">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md hover:shadow-lg transition"
              >
                <Heart
                  className={`h-5 w-5 ${
                    isFavorite ? "fill-black text-black" : "text-black/60"
                  }`}
                />
              </button>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="flex-1 border border-black/10 p-4 rounded-2xl text-center">
                <Clock className="h-5 w-5 text-black mx-auto mb-1" />
                <p className="text-sm text-black/50">Prep Time</p>
                <p className="font-semibold">{product.time}</p>
              </div>
              <div className="flex-1 border border-black/10 p-4 rounded-2xl text-center">
                <div className="flex justify-center mb-1">
                  <Star className="h-5 w-5 text-black fill-black" />
                </div>
                <p className="text-sm text-black/50">Rating</p>
                <p className="font-semibold">{product.rating}/5</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] mb-4">
              {categoryLabel[product.category] || product.category}
            </span>

            <h1 className="text-4xl font-bold text-black mb-4 font-display">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-black fill-black"
                        : "text-black/20"
                    }`}
                  />
                ))}
              </div>
              <span className="text-black/60">({product.rating})</span>
            </div>

            <p className="text-black/60 text-lg mb-6">{product.description}</p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-black">
                Rs {product.price}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-black mb-3">
                Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((item, index) => (
                  <span
                    key={index}
                    className="border border-black/10 text-black px-4 py-2 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-black mb-3">
                Quantity
              </h3>
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-black/10 rounded-full">
                  <button
                    onClick={() => handleQuantity("decrease")}
                    className="p-3 hover:bg-black/5 rounded-l-full transition cursor-pointer"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-16 text-center font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantity("increase")}
                    className="p-3 hover:bg-black/5 rounded-r-full transition cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-black/60">
                  Total:{" "}
                  <span className="font-bold text-black">
                    Rs {product.price * quantity}
                  </span>
                </span>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-4 rounded-full hover:bg-black/90 font-bold text-lg flex items-center justify-center gap-3 transition cursor-pointer"
            >
              <ShoppingBag className="h-5 w-5" />
              Add to Cart - Rs {product.price * quantity}
            </button>
          </motion.div>
        </motion.div>

        {relatedProducts.length > 0 && (
          <motion.div
            className="mt-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={stagger}
          >
            <h2 className="text-2xl font-bold text-black mb-6">
              You May Also Like
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((item) => (
                <motion.div
                  key={item.id}
                  className="border border-black/10 rounded-2xl hover:shadow-lg transition overflow-hidden bg-white"
                  variants={fadeUp}
                  whileHover={hoverLift.whileHover}
                  transition={hoverLift.transition}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-black mb-1">{item.name}</h3>
                    <p className="text-black font-bold mb-3">Rs {item.price}</p>
                    <button
                      onClick={() => navigate(`/product/${item.id}`)}
                      className="w-full py-2 border border-black/20 text-black rounded-lg hover:bg-black hover:text-white transition font-medium cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
