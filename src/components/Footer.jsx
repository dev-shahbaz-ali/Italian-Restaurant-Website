import React from "react";
import { Link } from "react-router-dom";
import { Utensils, Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react";
import { site } from "../data/site";

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
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center">
                <Utensils className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold font-display">
                {site.brandName}
              </span>
            </Link>
            <p className="text-white/70 mb-6">{site.story}</p>
            <div className="flex items-center gap-3 text-white/70 text-sm mb-6">
              <MapPin className="h-4 w-4" />
              {site.locationShort}
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-6">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-white transition duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Join our monthly menu notes and seasonal specials.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-lg text-white bg-black border border-white/20 focus:outline-none"
              />
              <button className="bg-white text-black px-4 py-2 rounded-r-lg hover:bg-white/90 transition duration-300 cursor-pointer hover-lift">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>
            &copy; {new Date().getFullYear()} {site.brandName}. All rights
            reserved.
          </p>
          <p className="mt-2">Built for portfolio showcase</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;