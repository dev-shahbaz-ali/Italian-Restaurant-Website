import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { fadeUp, stagger, hoverLift } from "../utils/motion";
import { site } from "../data/site";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      details: site.address,
      link: "#",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone Number",
      details: site.phone,
      link: `tel:${site.phone.replace(/\s/g, "")}`,
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Address",
      details: site.email,
      link: `mailto:${site.email}`,
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Opening Hours",
      details: "Mon-Sun: 11AM - 11PM",
      link: "#",
    },
  ];

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={stagger}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-black/50 mb-3">Contact</p>
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-black font-display mb-4"
            variants={fadeUp}
          >
            Get in Touch
          </motion.h1>
          <motion.p className="text-lg text-black/60 max-w-3xl mx-auto" variants={fadeUp}>
            Reservations, events, and delivery.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-3xl shadow-xl p-8 border border-black/10"
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              variants={stagger}
            >
              <h2 className="text-3xl font-bold text-black mb-8 flex items-center">
                <span className="w-1 h-8 bg-black rounded-full mr-4"></span>
                Contact Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-black/10 hover:border-black/30"
                    variants={fadeUp}
                    whileHover={hoverLift.whileHover}
                    transition={hoverLift.transition}
                  >
                    <div className="w-12 h-12 rounded-2xl border border-black/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                      <div className="text-black">{info.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">{info.title}</h3>
                    <a
                      href={info.link}
                      className="text-black/60 text-sm leading-relaxed hover:text-black transition duration-300 block"
                    >
                      {info.details}
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 rounded-2xl p-6 group text-black hover:shadow-xl transition-all duration-300 border border-black/10 hover:border-black/30"
                variants={fadeUp}
                whileHover={hoverLift.whileHover}
                transition={hoverLift.transition}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl border border-black/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Clock className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-black/60">Quick Response</p>
                    <p className="text-xl font-bold">Reply within 24 hours</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-black/10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUp}
          >
            {isSubmitted ? (
              <div className="text-center py-16 px-4">
                <div className="w-24 h-24 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-12 w-12 text-black" />
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Message Sent</h3>
                <p className="text-black/60 text-lg mb-8">We will reply soon.</p>
                <div className="w-16 h-1 bg-black rounded-full mx-auto"></div>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-black flex items-center">
                    <span className="w-1 h-8 bg-black rounded-full mr-4"></span>
                    Send us a Message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-black font-semibold mb-2 text-sm uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border border-black/10 transition duration-300 bg-white focus:outline-none focus:border-black"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-black font-semibold mb-2 text-sm uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border border-black/10 transition duration-300 bg-white focus:outline-none focus:border-black"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-black font-semibold mb-2 text-sm uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-black/10 transition duration-300 bg-white focus:outline-none focus:border-black"
                      placeholder={site.phone}
                    />
                  </div>

                  <div>
                    <label className="block text-black font-semibold mb-2 text-sm uppercase tracking-wide">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-5 py-4 rounded-xl border border-black/10 transition duration-300 bg-white resize-none focus:outline-none focus:border-black"
                      placeholder="Write your message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 rounded-xl hover:bg-black/90 transition duration-300 font-bold text-lg flex items-center justify-center gap-3 shadow-lg cursor-pointer"
                  >
                    Send Message <Send className="h-5 w-5" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;