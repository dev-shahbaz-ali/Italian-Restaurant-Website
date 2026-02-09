import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Clock,
  ChefHat,
  Flame,
  Plus,
  Minus,
  ShoppingBag,
  Share2,
  Heart,
} from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("regular");
  const [isFavorite, setIsFavorite] = useState(false);

  // This would normally come from an API or database
  const productData = {
    1: {
      name: "Bruschetta",
      price: 550,
      originalPrice: 650,
      description:
        "Toasted bread topped with fresh tomatoes, garlic, basil, and premium olive oil. Our bruschetta is made with authentic Italian ciabatta bread and locally sourced organic tomatoes.",
      category: "starters",
      rating: 4.8,
      reviewCount: 125,
      preparationTime: "15-20 mins",
      calories: "320 cal",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      ingredients: [
        "Ciabatta Bread",
        "Fresh Tomatoes",
        "Garlic",
        "Basil",
        "Extra Virgin Olive Oil",
        "Balsamic Glaze",
        "Sea Salt",
      ],
      allergens: ["Gluten"],
      chefRecommendation: true,
    },
    2: {
      name: "Chicken Burger",
      price: 650,
      originalPrice: 750,
      description:
        "Juicy grilled chicken patty served in a brioche bun with fresh lettuce, tomatoes, onions, and our special signature sauce. Served with crispy fries.",
      category: "main",
      rating: 4.5,
      reviewCount: 89,
      preparationTime: "20-25 mins",
      calories: "680 cal",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1998&q=80",
      ingredients: [
        "Chicken Patty",
        "Brioche Bun",
        "Lettuce",
        "Tomato",
        "Onion",
        "Signature Sauce",
        "French Fries",
      ],
      allergens: ["Gluten", "Eggs", "Dairy"],
      chefRecommendation: false,
    },
    3: {
      name: "Margherita Pizza",
      price: 1200,
      originalPrice: 1400,
      description:
        "Classic Neapolitan-style pizza with San Marzano tomatoes, fresh mozzarella, basil, and extra-virgin olive oil. Cooked in our wood-fired oven for authentic flavor.",
      category: "main",
      rating: 4.9,
      reviewCount: 210,
      preparationTime: "25-30 mins",
      calories: "850 cal",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      ingredients: [
        "Pizza Dough",
        "San Marzano Tomatoes",
        "Fresh Mozzarella",
        "Basil",
        "Extra Virgin Olive Oil",
        "Sea Salt",
      ],
      allergens: ["Gluten", "Dairy"],
      chefRecommendation: true,
    },
    // Add more products as needed
  };

  const product = productData[id] || productData[1];

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const item = {
      id,
      name: product.name,
      price: product.price,
      quantity,
      size: selectedSize,
      image: product.image,
    };
    // In real app, you would dispatch to cart or call API
    console.log("Added to cart:", item);
    alert(`${quantity} ${product.name} added to cart!`);
  };

  const sizeOptions = [
    { id: "regular", name: "Regular", price: 0 },
    { id: "medium", name: "Medium", price: product.price * 0.3 },
    { id: "large", name: "Large", price: product.price * 0.6 },
  ];

  const relatedProducts = [
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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 py-4 text-gray-700 hover:text-amber-600 transition duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Menu</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Section */}
          <div>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
              <div className="relative h-96">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.popular && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full font-semibold">
                    Popular
                  </div>
                )}
                {product.chefRecommendation && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                    <ChefHat className="h-4 w-4" />
                    Chef's Choice
                  </div>
                )}
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                <Clock className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Prep Time</p>
                <p className="font-semibold">{product.preparationTime}</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                <Flame className="h-6 w-6 text-red-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Calories</p>
                <p className="font-semibold">{product.calories}</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                <Star className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Rating</p>
                <p className="font-semibold">{product.rating}/5</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                <div className="h-6 w-6 text-green-600 mx-auto mb-2">🔥</div>
                <p className="text-sm text-gray-600">Category</p>
                <p className="font-semibold capitalize">{product.category}</p>
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div>
            <div className="mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-3 rounded-full hover:bg-red-50 transition duration-300"
                >
                  <Heart
                    className={`h-6 w-6 ${
                      isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Price Section */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-4xl font-bold text-gray-800">
                    Rs {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-2xl text-gray-400 line-through">
                      Rs {product.originalPrice}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                      Save Rs {product.originalPrice - product.price}
                    </span>
                  )}
                </div>
                <p className="text-green-600 font-medium">
                  • 10% discount on online orders
                </p>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Select Size</h3>
              <div className="flex gap-4">
                {sizeOptions.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`flex-1 py-4 rounded-xl border-2 transition duration-300 ${
                      selectedSize === size.id
                        ? "border-amber-500 bg-amber-50"
                        : "border-gray-200 hover:border-amber-300"
                    }`}
                  >
                    <div className="font-semibold text-gray-800">
                      {size.name}
                    </div>
                    {size.price > 0 ? (
                      <div className="text-gray-600">+ Rs {size.price}</div>
                    ) : (
                      <div className="text-green-600">Included</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white rounded-full border border-gray-300">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    className="p-4 hover:bg-gray-100 rounded-l-full transition duration-300"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="px-8 py-4 text-xl font-bold min-w-[80px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    className="p-4 hover:bg-gray-100 rounded-r-full transition duration-300"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <div className="text-gray-700">
                  Total:{" "}
                  <span className="text-2xl font-bold text-amber-600">
                    Rs {product.price * quantity}
                  </span>
                </div>
              </div>
            </div>

            {/* Ingredients & Allergens */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Allergens:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.allergens.map((allergen, index) => (
                    <span
                      key={index}
                      className="bg-red-50 text-red-700 px-4 py-1 rounded-full text-sm"
                    >
                      ⚠️ {allergen}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-amber-600 text-white py-4 rounded-full hover:bg-amber-700 transition duration-300 font-semibold text-lg flex items-center justify-center gap-3"
              >
                <ShoppingBag className="h-6 w-6" />
                Add to Cart • Rs {product.price * quantity}
              </button>
              <button className="px-8 py-4 border-2 border-amber-600 text-amber-600 rounded-full hover:bg-amber-50 transition duration-300 font-semibold flex items-center justify-center gap-2">
                <Share2 className="h-5 w-5" />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            You may also like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-amber-600 font-bold text-lg">
                    Rs {product.price}
                  </p>
                  <button className="w-full mt-4 py-3 border border-amber-600 text-amber-600 rounded-full hover:bg-amber-50 transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews (Optional) */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Customer Reviews
          </h2>
          <div className="space-y-6">
            {[
              {
                name: "Ahmed R.",
                rating: 5,
                comment:
                  "Absolutely delicious! The best Italian food I've had in Lahore.",
                date: "2 days ago",
              },
              {
                name: "Sara K.",
                rating: 4,
                comment:
                  "Great quality and taste. Will definitely order again!",
                date: "1 week ago",
              },
              {
                name: "Ali H.",
                rating: 5,
                comment:
                  "Authentic flavors, fresh ingredients. Highly recommended!",
                date: "2 weeks ago",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-6 last:border-0"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold text-gray-800">{review.name}</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
