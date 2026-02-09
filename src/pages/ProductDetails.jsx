import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Clock,
  Plus,
  Minus,
  ShoppingBag,
  Heart,
} from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const productData = {
    1: {
      name: "Bruschetta",
      price: 550,
      description:
        "Toasted bread topped with fresh tomatoes, garlic, and basil.",
      category: "starters",
      rating: 4.8,
      time: "15-20 mins",
      image:
        "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      ingredients: [
        "Ciabatta Bread",
        "Tomatoes",
        "Garlic",
        "Basil",
        "Olive Oil",
      ],
    },
    2: {
      name: "Chicken Burger",
      price: 650,
      description:
        "Juicy grilled chicken patty with lettuce and special sauce.",
      category: "main",
      rating: 4.5,
      time: "20-25 mins",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1998&q=80",
      ingredients: [
        "Chicken Patty",
        "Brioche Bun",
        "Lettuce",
        "Tomato",
        "Signature Sauce",
      ],
    },
    3: {
      name: "Margherita Pizza",
      price: 1200,
      description: "Classic pizza with tomatoes, mozzarella, and basil.",
      category: "main",
      rating: 4.9,
      time: "25-30 mins",
      image:
        "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      ingredients: [
        "Pizza Dough",
        "Tomatoes",
        "Mozzarella",
        "Basil",
        "Olive Oil",
      ],
    },
  };

  const product = productData[id] || productData[1];

  const handleQuantity = (type) => {
    if (type === "increase") setQuantity(quantity + 1);
    else if (type === "decrease" && quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    alert(`✅ ${quantity} ${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <div className="bg-white border-b py-4">
        <div className="max-w-6xl mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-700 hover:text-amber-600"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Menu</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div>
            <div className="relative rounded-2xl overflow-hidden mb-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover"
              />
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
              >
                <Heart
                  className={`h-6 w-6 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                />
              </button>
            </div>

            {/* Info Cards */}
            <div className="flex gap-4">
              <div className="flex-1 bg-amber-50 p-4 rounded-xl text-center">
                <Clock className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Prep Time</p>
                <p className="font-bold">{product.time}</p>
              </div>
              <div className="flex-1 bg-amber-50 p-4 rounded-xl text-center">
                <div className="h-6 w-6 text-amber-600 mx-auto mb-2 flex items-center justify-center">
                  ⭐
                </div>
                <p className="text-sm text-gray-600">Rating</p>
                <p className="font-bold">{product.rating}/5</p>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div>
            {/* Product Info */}
            <div className="mb-8">
              <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {product.category}
              </span>

              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-amber-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.rating})</span>
              </div>

              <p className="text-gray-600 text-lg mb-6">
                {product.description}
              </p>

              <div className="mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-gray-800">
                    Rs {product.price}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    Rs {product.price + 100}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                    Save Rs 100
                  </span>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Quantity
              </h3>
              <div className="flex items-center gap-6">
                <div className="flex items-center bg-gray-100 rounded-full">
                  <button
                    onClick={() => handleQuantity("decrease")}
                    className="p-4 hover:bg-gray-200 rounded-l-full"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="px-8 py-4 text-2xl font-bold min-w-[80px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantity("increase")}
                    className="p-4 hover:bg-gray-200 rounded-r-full"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <div className="text-xl">
                  Total:{" "}
                  <span className="font-bold text-amber-600">
                    Rs {product.price * quantity}
                  </span>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-amber-600 text-white py-4 rounded-full hover:bg-amber-700 font-bold text-lg flex items-center justify-center gap-3"
            >
              <ShoppingBag className="h-6 w-6" />
              Add to Cart • Rs {product.price * quantity}
            </button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                id: 4,
                name: "Pasta Carbonara",
                price: 950,
                image:
                  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              },
              {
                id: 5,
                name: "Caesar Salad",
                price: 700,
                image:
                  "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              },
              {
                id: 6,
                name: "Tiramisu",
                price: 750,
                image:
                  "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-amber-600 font-bold text-lg mb-4">
                    Rs {item.price}
                  </p>
                  <button
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="w-full py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 font-semibold"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Customer Reviews
          </h2>
          <div className="space-y-6">
            {[
              {
                name: "Ahmed R.",
                rating: 5,
                comment: "Absolutely delicious! Best Italian food in Lahore.",
                time: "2 days ago",
              },
              {
                name: "Sara K.",
                rating: 4,
                comment: "Great quality and taste. Will order again!",
                time: "1 week ago",
              },
              {
                name: "Ali H.",
                rating: 5,
                comment: "Authentic flavors, fresh ingredients.",
                time: "2 weeks ago",
              },
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < review.rating ? "text-amber-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">{review.rating}/5</span>
                </div>
                <p className="text-gray-800 mb-4">{review.comment}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-800">{review.name}</span>
                  <span className="text-gray-500">{review.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
