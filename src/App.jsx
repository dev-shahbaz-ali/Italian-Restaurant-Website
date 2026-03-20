import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";
import Checkout from "./pages/Checkout";

function App() {
  const [screenshotMode, setScreenshotMode] = useState(
    typeof window !== "undefined" &&
      window.location.search.includes("screenshot=1"),
  );

  const toggleScreenshotMode = () => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (url.searchParams.get("screenshot") === "1") {
      url.searchParams.delete("screenshot");
      setScreenshotMode(false);
    } else {
      url.searchParams.set("screenshot", "1");
      setScreenshotMode(true);
    }
    window.location.href = url.toString();
  };

  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
          <Footer />
          <CartDrawer />

          <button
            onClick={toggleScreenshotMode}
            className="fixed bottom-6 right-6 z-50 bg-black text-white px-5 py-3 rounded-full text-sm font-semibold shadow-lg hover:bg-black/90 transition cursor-pointer"
          >
            {screenshotMode ? "Exit Screenshot Mode" : "Screenshot Mode"}
          </button>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
