import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

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
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: "DHA Phase 5, Street 10, Lahore, Pakistan",
      link: "#",
      bgColor: "bg-orange-100",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Number",
      details: "+92 300 1234567",
      link: "tel:+923001234567",
      bgColor: "bg-orange-100",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: "info@bellaitalia.com",
      link: "mailto:info@bellaitalia.com",
      bgColor: "bg-orange-100",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Opening Hours",
      details: "Mon-Sun: 11AM - 11PM",
      link: "#",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-amber-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with decorative elements */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-x-0 -top-10 flex justify-center"></div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Get in{" "}
            <span className="text-amber-600 relative">
              Touch
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q25,0 50,5 T100,5"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For reservations, home delivery, or any special request, please
            contact us. We’re here to serve you and will respond promptly to
            your inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information - Redesigned Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <span className="w-1 h-8 bg-amber-500 rounded-full mr-4"></span>
                Contact Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200"
                  >
                    <div
                      className={`${info.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-amber-600">{info.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {info.title}
                    </h3>
                    <a
                      href={info.link}
                      className="text-gray-600 text-sm leading-relaxed hover:text-amber-600 transition duration-300 block"
                    >
                      {info.details}
                    </a>
                  </div>
                ))}
              </div>

              {/* Additional Info Card */}
              <div className="mt-8 rounded-2xl p-6 group text-black hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <div className="bg-orange-100 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Clock className="h-6 w-6 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Quick Response</p>
                    <p className="text-xl font-bold">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Redesigned */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-16 px-4">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Message Sent!
                </h3>
                <p className="text-gray-600 text-lg mb-8">
                  Thank you for contacting us. We'll get back to you shortly.
                </p>
                <div className="w-16 h-1 bg-green-500 rounded-full mx-auto"></div>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 flex items-center">
                    <span className="w-1 h-8 bg-amber-500 rounded-full mr-4"></span>
                    Send us a Message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200  transition duration-300 bg-gray-50"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200  transition duration-300 bg-gray-50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200  transition duration-300 bg-gray-50"
                      placeholder="+92 300 1234567"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200  transition duration-300 bg-gray-50 resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl hover:from-amber-600 hover:to-orange-600 transition duration-300 font-bold text-lg flex items-center justify-center gap-3 shadow-lg cursor-pointer"
                  >
                    Send Message <Send className="h-5 w-5" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
