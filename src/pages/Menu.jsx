import React, { useState } from "react";
import { Star, ChefHat, Flame, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [imageLoading, setImageLoading] = useState({});

  const categories = [
    { id: "all", name: "All", icon: <ChefHat className="h-5 w-5" /> },
    { id: "starters", name: "Starters", icon: <Flame className="h-5 w-5" /> },
    { id: "main", name: "Main Course", icon: <ChefHat className="h-5 w-5" /> },
    { id: "desserts", name: "Desserts", icon: <Leaf className="h-5 w-5" /> },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Bruschetta",
      price: "Rs 550",
      description:
        "Toasted bread topped with tomatoes, garlic, and fresh basil",
      image:
        "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      category: "starters",
      rating: 4.8,
      popular: true,
    },
    {
      id: 2,
      name: "Chicken Burger",
      price: "Rs 650",
      description: "Grilled chicken patty with fresh lettuce and special sauce",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1998&q=80",
      category: "main",
      rating: 4.5,
      popular: true,
    },
    {
      id: 3,
      name: "Margherita Pizza",
      price: "Rs 1,200",
      description:
        "Classic pizza with tomato sauce, mozzarella, and fresh basil",
      image:
        "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      category: "main",
      rating: 4.9,
      popular: true,
    },
    {
      id: 4,
      name: "Pasta Carbonara",
      price: "Rs 950",
      description: "Spaghetti with eggs, cheese, pancetta, and black pepper",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "main",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Caesar Salad",
      price: "Rs 700",
      description: "Fresh romaine with croutons, parmesan, and Caesar dressing",
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "starters",
      rating: 4.3,
    },
    {
      id: 6,
      name: "Tiramisu",
      price: "Rs 750",
      description: "Layers of coffee-soaked ladyfingers and mascarpone cream",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "desserts",
      rating: 4.9,
      popular: true,
    },
    {
      id: 7,
      name: "Garlic Bread",
      price: "Rs 450",
      description: "Crispy bread with garlic butter and herbs",
      image:
        "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "starters",
      rating: 4.4,
    },
    {
      id: 8,
      name: "Lasagna",
      price: "Rs 1,100",
      description: "Layered pasta with meat sauce, cheese, and béchamel",
      image:
        "https://images.unsplash.com/photo-1629115916087-7e8c114a24ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80",
      category: "main",
      rating: 4.8,
    },
    {
      id: 9,
      name: "Ravioli",
      price: "Rs 850",
      description: "Handmade pasta filled with ricotta and spinach",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlVtZw-pEbXmfLeFnvJJ5X312cI6SGK3h8oA&s",
      category: "main",
      rating: 4.6,
    },
    {
      id: 10,
      name: "Minestrone Soup",
      price: "Rs 500",
      description: "Traditional Italian vegetable soup with beans and pasta",
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      category: "starters",
      rating: 4.2,
    },
    {
      id: 11,
      name: "Gelato",
      price: "Rs 400",
      description: "Authentic Italian ice cream in various flavors",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "desserts",
      rating: 4.7,
    },
    {
      id: 12,
      name: "Espresso",
      price: "Rs 300",
      description: "Strong Italian coffee served in a demitasse cup",
      image:
        "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "desserts",
      rating: 4.8,
    },
  ];

  const handleImageLoad = (id) => {
    setImageLoading((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  const handleImageError = (id) => {
    setImageLoading((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const getEmojiForCategory = (category) => {
    switch (category) {
      case "starters":
        return "🥗";
      case "main":
        return "🍝";
      case "desserts":
        return "🍰";
      default:
        return "🍕";
    }
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover authentic Italian flavors prepared with the finest
            ingredients
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition duration-300 cursor-pointer ${
                activeCategory === category.id
                  ? "bg-amber-600 text-white"
                  : "bg-white text-gray-700 hover:bg-amber-100"
              } font-semibold shadow-md`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group h-full flex flex-col"
            >
              {/* Image Section with loading state */}
              <div className="relative h-64 overflow-hidden">
                {/* Loading skeleton */}
                {imageLoading[item.id] !== false && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center justify-center">
                    <div className="text-center animate-pulse">
                      <div className="text-6xl mb-2">
                        {getEmojiForCategory(item.category)}
                      </div>
                      <p className="text-gray-500">Loading image...</p>
                    </div>
                  </div>
                )}

                {/* Actual Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full h-full object-cover group-hover:scale-110 transition duration-500 ${
                    imageLoading[item.id] !== false
                      ? "opacity-0"
                      : "opacity-100"
                  }`}
                  onLoad={() => handleImageLoad(item.id)}
                  onError={() => handleImageError(item.id)}
                  loading="lazy"
                />

                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                  {item.category === "starters" && "🥗 Starter"}
                  {item.category === "main" && "🍝 Main Course"}
                  {item.category === "desserts" && "🍰 Dessert"}
                </div>

                {item.popular && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Popular
                  </div>
                )}

                {/* Price overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="text-white text-2xl font-bold">
                    {item.price}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 line-clamp-1">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(item.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{item.rating}</span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-sm text-gray-500 capitalize">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-gray-600 line-clamp-2 mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Action Buttons - positioned at bottom */}
                <div className="mt-auto flex items-center justify-between">
                  <button
                    onClick={() => {
                      // Add to cart logic here
                      console.log(`Added ${item.name} to cart`);
                    }}
                    className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition duration-300 font-semibold cursor-pointer flex items-center gap-2"
                  >
                    <span>Add to Cart</span>
                  </button>
                  <button
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-full font-medium cursor-pointer transition duration-300 flex items-center gap-2"
                  >
                    <span>View Details</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Items Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No items found in this category
            </h3>
            <p className="text-gray-600">
              Try selecting a different category or check back later for new
              additions.
            </p>
          </div>
        )}

        {/* Category Summary */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Menu Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.slice(1).map((category) => {
              const categoryItems = menuItems.filter(
                (item) => item.category === category.id,
              );
              return (
                <div
                  key={category.id}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-amber-100 rounded-lg">
                      {category.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">
                        {category.name}
                      </h4>
                      <p className="text-gray-600">
                        {categoryItems.length} items
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveCategory(category.id)}
                    className="w-full py-3 border border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition duration-300 font-medium cursor-pointer"
                  >
                    View {category.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
