import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "interior",
      title: "Restaurant Interior",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2081&q=80",
      category: "food",
      title: "Delicious Pizza",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      category: "food",
      title: "Pasta Dish",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      category: "interior",
      title: "Dining Area",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      category: "food",
      title: "Italian Cuisine",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      category: "chef",
      title: "Our Chef",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "interior",
      title: "Bar Area",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "food",
      title: "Desserts",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      category: "interior",
      title: "Outdoor Seating",
    },
  ];

  const categories = ["all", "interior", "food", "chef"];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id,
    );
    let nextIndex;

    if (direction === "next") {
      nextIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      nextIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual tour of our restaurant, dishes, and the passion behind
            our cooking
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-amber-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-amber-100"
              } font-semibold capitalize`}
            >
              {category === "all" ? "All Photos" : category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">{image.title}</h3>
                  <p className="text-sm opacity-90 capitalize">
                    {image.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-amber-400 transition duration-300"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-6 text-white hover:text-amber-400 transition duration-300"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-6 text-white hover:text-amber-400 transition duration-300"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            <div className="max-w-4xl mx-auto p-4">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[80vh] w-auto mx-auto rounded-lg"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-gray-300 capitalize">
                  {selectedImage.category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
