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
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
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
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Number",
      details: "+92 300 1234567",
      link: "tel:+923001234567",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: "info@bellaitalia.com",
      link: "mailto:info@bellaitalia.com",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Opening Hours",
      details: "Mon-Sun: 11AM - 11PM",
      link: "#",
    },
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for reservations, inquiries, or feedback
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Visit Our Restaurant
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <div className="text-amber-600">{info.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-amber-600 transition duration-300"
                      >
                        {info.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Find Us on Map
                </h3>
                <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl p-8 text-white text-center h-64 flex items-center justify-center">
                  <div>
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p className="text-xl font-semibold">
                      Google Maps Integration
                    </p>
                    <p className="opacity-90 mt-2">(Embed Google Maps here)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Send us a Message
            </h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition duration-300"
                    placeholder="+92 300 1234567"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition duration-300"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-4 rounded-full hover:bg-amber-700 transition duration-300 font-semibold text-lg flex items-center justify-center gap-2"
                >
                  Send Message <Send className="h-5 w-5" />
                </button>
              </form>
            )}

            {/* Social Media */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {["Facebook", "Instagram", "Twitter"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="flex-1 bg-gray-100 hover:bg-amber-600 hover:text-white text-gray-700 py-3 rounded-lg text-center font-medium transition duration-300"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Do you take reservations?",
                a: "Yes, we accept reservations for parties of all sizes. You can book online or call us directly.",
              },
              {
                q: "Is there parking available?",
                a: "We have dedicated parking space for our customers at the front of the restaurant.",
              },
              {
                q: "Do you offer vegetarian options?",
                a: "Yes, we have a dedicated vegetarian menu with various Italian vegetarian dishes.",
              },
              {
                q: "Are you open on holidays?",
                a: "We are open 7 days a week, including most holidays. Check our social media for special hours.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-amber-50 transition duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
