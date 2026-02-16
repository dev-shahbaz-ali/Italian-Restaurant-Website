import React from "react";
import { Link } from "react-router-dom";
import { Utensils, Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { name: "Home", path: "/" },
      { name: "Menu", path: "/menu" },
      { name: "Gallery", path: "/gallery" },
      { name: "Contact", path: "/contact" },
    ],
    Categories: [
      { name: "Appetizers", path: "/menu" },
      { name: "Main Course", path: "/menu" },
      { name: "Desserts", path: "/menu" },
      { name: "Drinks", path: "/menu" },
    ],
    Legal: [
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
      { name: "Cookie Policy", path: "#" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Utensils className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">Bella Italia</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Serving authentic Italian cuisine since 2015. Experience the taste
              of Italy in the heart of Lahore.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-6">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-amber-400 transition duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new dishes and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-lg text-white border border-amber-600 focus:outline-none"
              />
              <button className="bg-amber-600 px-4 py-2 rounded-r-lg hover:bg-amber-700 transition duration-300 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Bella Italia Restaurant. All
            rights reserved.
          </p>
          <p className="mt-2">Designed with ❤️ for Upwork Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
