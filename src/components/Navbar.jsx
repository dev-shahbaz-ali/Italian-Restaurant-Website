import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Utensils, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { site } from "../data/site";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { itemCount, toggleCart } = useCart();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur border-b border-black/10 sticky w-full top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full border border-black/15 flex items-center justify-center">
              <Utensils className="h-5 w-5 text-black" />
            </div>
            <div>
              <span className="text-2xl font-bold text-black font-display block leading-tight">
                {site.brandName}
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-black/40">
                Trattoria
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-black/70 hover:text-black font-medium transition duration-300"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleCart}
              className="relative border border-black/15 text-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition duration-300 font-semibold hover-lift cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                Cart
              </span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 h-5 min-w-[20px] px-1 rounded-full bg-black text-white text-xs flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => navigate("/menu")}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-black/90 transition duration-300 font-semibold cursor-pointer hover-lift"
            >
              Order Now
            </button>
          </div>

          <button
            className="md:hidden border border-black/10 p-2 rounded-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="px-2 pt-2 space-y-2 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-black/70 hover:text-black font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={toggleCart}
                className="w-full mt-4 border border-black/15 text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition duration-300"
              >
                View Cart {itemCount > 0 ? `(${itemCount})` : ""}
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/menu");
                }}
                className="w-full bg-black text-white px-6 py-2 rounded-full hover:bg-black/90 transition duration-300"
              >
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