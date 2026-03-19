import React from "react";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const formatPrice = (value) => `Rs ${value.toLocaleString("en-PK")}`;

const CartDrawer = () => {
  const navigate = useNavigate();
  const {
    items,
    setQuantity,
    removeItem,
    clearCart,
    subtotal,
    isCartOpen,
    closeCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center">
              <ShoppingBag className="h-5 w-5 text-black" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-black/50">
                Your Cart
              </p>
              <p className="text-lg font-semibold text-black">Order Summary</p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-black/5 transition"
            aria-label="Close cart"
          >
            <X className="h-5 w-5 text-black" />
          </button>
        </div>

        <div className="flex-1 overflow-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl font-semibold text-black mb-2">
                Your cart is empty
              </p>
              <p className="text-black/60">
                Add items from the menu to start your order.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border border-black/10 rounded-2xl p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-base font-semibold text-black">
                          {item.name}
                        </h4>
                        <p className="text-sm text-black/60">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 rounded-full hover:bg-black/5 transition"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4 text-black" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3 border border-black/10 rounded-full px-3 py-1">
                        <button
                          onClick={() => setQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full hover:bg-black/10 transition"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-6 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full hover:bg-black/10 transition"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="font-semibold text-black">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-black/10 px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm uppercase tracking-[0.2em] text-black/50">
              Subtotal
            </span>
            <span className="text-xl font-semibold text-black">
              {formatPrice(subtotal)}
            </span>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => {
                closeCart();
                navigate("/checkout");
              }}
              className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-black/90 transition hover-lift cursor-pointer"
              disabled={items.length === 0}
            >
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full border border-black/10 py-3 rounded-full font-semibold text-black hover:bg-black/5 transition hover-lift cursor-pointer"
              disabled={items.length === 0}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;