import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-black/5 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-black" />
          </div>
          <h1 className="text-3xl font-bold text-black mb-3">Order Placed</h1>
          <p className="text-black/60 mb-8">We will confirm your order soon.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-black/90 transition cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-14">
      <div className="max-w-6xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-black/60 hover:text-black mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="border border-black/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Full name"
                required
                className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-black"
              />
              <input
                type="tel"
                placeholder="Phone"
                required
                className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-black"
              />
              <input
                type="text"
                placeholder="Address"
                required
                className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-black"
              />
              <textarea
                placeholder="Order note (optional)"
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-black/90 transition cursor-pointer"
                disabled={items.length === 0}
              >
                Place Order
              </button>
            </form>
          </div>

          <div className="border border-black/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Order Summary</h2>
            {items.length === 0 ? (
              <p className="text-black/60">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-black">{item.name}</p>
                      <p className="text-sm text-black/60">
                        Qty {item.quantity} • Rs {item.price}
                      </p>
                    </div>
                    <p className="font-semibold text-black">
                      Rs {item.price * item.quantity}
                    </p>
                  </div>
                ))}
                <div className="border-t border-black/10 pt-4 flex items-center justify-between">
                  <span className="text-black/60">Subtotal</span>
                  <span className="font-semibold text-black">Rs {subtotal}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;