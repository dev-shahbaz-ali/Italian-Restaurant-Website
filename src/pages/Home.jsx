import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Phone, Star, Sparkles, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { fadeIn, fadeUp, stagger, hoverLift } from "../utils/motion";
import { site } from "../data/site";

const Home = () => {
  const { addItem, openCart } = useCart();

  const features = [
    { icon: <Clock className="h-6 w-6" />, title: "Open Hours", description: "Mon-Sun: 11AM - 11PM" },
    { icon: <MapPin className="h-6 w-6" />, title: "Location", description: site.locationShort },
    { icon: <Phone className="h-6 w-6" />, title: "Call Us", description: site.phone },
    { icon: <Star className="h-6 w-6" />, title: "Rating", description: "4.9/5 (1200+ Reviews)" },
  ];

  const specials = products.filter((item) => item.popular).slice(0, 3);

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2070&q=80")',
          }}
          initial="hidden"
          animate="show"
          variants={fadeIn}
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <motion.div className="max-w-3xl" initial="hidden" animate="show" variants={stagger}>
            <p className="text-white/70 uppercase tracking-[0.35em] text-sm mb-5">
              {site.tagline}
            </p>
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white font-display leading-tight mb-6"
              variants={fadeUp}
            >
              {site.brandName} - modern Italian, made daily.
            </motion.h1>
            <motion.p className="text-lg md:text-xl text-white/80 mb-8" variants={fadeUp}>
              Fresh pasta, slow sauces, and a calm room.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeUp}>
              <Link
                to="/menu"
                className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition duration-300 flex items-center justify-center gap-2"
              >
                View Menu <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300 cursor-pointer text-center"
              >
                Book a Table
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-b border-black/10">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={stagger}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="border border-black/10 rounded-3xl p-6 hover:shadow-xl transition duration-300"
              variants={fadeUp}
              whileHover={hoverLift.whileHover}
              transition={hoverLift.transition}
            >
              <div className="h-12 w-12 rounded-2xl border border-black/10 flex items-center justify-center mb-4 text-black">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-black/60">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={stagger}
          >
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-black/50 mb-3">Chef Picks</p>
              <h2 className="text-4xl md:text-5xl font-bold text-black font-display">
                Signature Plates
              </h2>
              <p className="text-black/60 mt-4 max-w-xl">Top picks, ready to order.</p>
            </div>
            <motion.div className="flex items-center gap-3 text-sm text-black/60" variants={fadeUp}>
              <Sparkles className="h-4 w-4" />
              Seasonal menu refresh
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={stagger}
          >
            {specials.map((item) => (
              <motion.div
                key={item.id}
                className="border border-black/10 rounded-3xl overflow-hidden hover:shadow-2xl transition duration-300 bg-white"
                variants={fadeUp}
                whileHover={hoverLift.whileHover}
                transition={hoverLift.transition}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-semibold text-black">{item.name}</h3>
                    <span className="text-lg font-semibold text-black">Rs {item.price}</span>
                  </div>
                  <p className="text-black/60 mt-3 mb-6">{item.description}</p>
                  <button
                    onClick={() => {
                      addItem(item, 1);
                      openCart();
                    }}
                    className="w-full bg-black text-white py-3 rounded-full hover:bg-black/90 transition duration-300 font-semibold cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-t border-black/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} variants={stagger}>
            <p className="text-sm uppercase tracking-[0.35em] text-black/50 mb-4">Our Story</p>
            <motion.h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-black" variants={fadeUp}>
              Small kitchen, big heart.
            </motion.h2>
            <motion.p className="text-black/70 mb-6" variants={fadeUp}>
              {site.story}
            </motion.p>
            <motion.div className="border border-black/10 rounded-2xl p-5 bg-white" variants={fadeUp}>
              <p className="text-sm uppercase tracking-[0.2em] text-black/40 mb-2">Chef's Note</p>
              <p className="text-black/70">{site.chefNote}</p>
            </motion.div>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={stagger}
          >
            {site.testimonials.map((item, index) => (
              <motion.div
                key={index}
                className="border border-black/10 rounded-2xl p-6 hover:shadow-lg transition bg-white"
                variants={fadeUp}
                whileHover={hoverLift.whileHover}
                transition={hoverLift.transition}
              >
                <Quote className="h-5 w-5 text-black/40 mb-3" />
                <p className="text-black/70 mb-4">{item.quote}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-black">{item.name}</span>
                  <span className="text-black/50">{item.meta}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-t border-black/10 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/50 mb-4">House Experience</p>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Relaxed dining, focused flavors.</h2>
            <p className="text-white/70 mb-8">Soft light, open kitchen, easy pace.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/gallery"
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition"
              >
                Explore Gallery
              </Link>
              <Link
                to="/contact"
                className="border border-white/40 px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                Reserve a Table
              </Link>
            </div>
          </div>
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={stagger}
          >
            {products.slice(0, 4).map((item) => (
              <motion.div
                key={item.id}
                className="bg-white/10 border border-white/10 rounded-2xl p-4"
                variants={fadeUp}
                whileHover={hoverLift.whileHover}
                transition={hoverLift.transition}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">{item.category}</p>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-white/70 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;