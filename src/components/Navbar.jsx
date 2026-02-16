import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Utensils } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky w-full top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Utensils className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-800">
              Bella Italia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-amber-600 font-medium transition duration-300"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => navigate("/menu")}
              className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition duration-300 font-semibold cursor-pointer"
            >
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-gray-700 hover:text-amber-600 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full mt-4 bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition duration-300">
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
