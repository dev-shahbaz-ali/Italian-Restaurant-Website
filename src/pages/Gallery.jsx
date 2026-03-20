import { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { fadeUp, stagger, hoverLift, getInViewProps } from "../utils/motion";
import { site } from "../data/site";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const inViewProps = getInViewProps();

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "interior",
      title: "Dining Room",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2081&q=80",
      category: "food",
      title: "Stone Pizza",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      category: "food",
      title: "Fresh Pasta",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      category: "interior",
      title: "Main Hall",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      category: "food",
      title: "Seasonal Plate",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      category: "chef",
      title: "Chef at Work",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "interior",
      title: "Bar Corner",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "food",
      title: "Dessert",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      category: "interior",
      title: "Outdoor Table",
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
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % filteredImages.length
        : (currentIndex - 1 + filteredImages.length) % filteredImages.length;

    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="py-14 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          {...inViewProps}
          variants={stagger}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-black/50 mb-3">
            Gallery
          </p>
          <motion.h1
            className="text-5xl font-bold text-black font-display mb-4"
            variants={fadeUp}
          >
            Inside {site.brandName}
          </motion.h1>
          <motion.p className="text-lg text-black/60 max-w-3xl mx-auto" variants={fadeUp}>
            A quick look at our food and space.
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition duration-300 cursor-pointer border ${
                activeCategory === category
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black/10 hover:border-black/30"
              } font-semibold capitalize`}
            >
              {category === "all" ? "All Photos" : category}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          {...inViewProps}
          variants={stagger}
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-3xl cursor-pointer border border-black/10"
              onClick={() => openLightbox(image)}
              variants={fadeUp}
              whileHover={hoverLift.whileHover}
              transition={hoverLift.transition}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">{image.title}</h3>
                  <p className="text-sm opacity-90 capitalize">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-white/70 transition duration-300"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-6 text-white hover:text-white/70 transition duration-300"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-6 text-white hover:text-white/70 transition duration-300"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            <div className="max-w-4xl mx-auto p-4">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[80vh] w-auto mx-auto rounded-2xl"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-white/70 capitalize">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;

