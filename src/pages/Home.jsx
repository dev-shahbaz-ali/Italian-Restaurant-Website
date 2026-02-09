import React from "react";
import { ArrowRight, Clock, MapPin, Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Open Hours",
      description: "Mon-Sun: 11AM - 11PM",
      bgColor: "bg-amber-50",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Location",
      description: "DHA Phase 5, Lahore",
      bgColor: "bg-red-50",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Us",
      description: "+92 300 1234567",
      bgColor: "bg-emerald-50",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Rating",
      description: "4.9/5 (1200+ Reviews)",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-opacity-50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Best Italian Food <span className="text-amber-400">in Lahore</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Authentic Italian cuisine made with love and passion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition duration-300 flex items-center justify-center gap-2"
            >
              View Menu <ArrowRight className="h-5 w-5" />
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300 cursor-pointer">
              Book a Table
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} p-6 rounded-2xl text-center hover:shadow-xl transition duration-300`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4">
                  <div className="text-amber-600">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Today's Special
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience our chef's recommended dishes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Truffle Pasta",
                price: "Rs 1,850",
                description: "Creamy pasta with black truffle and parmesan",
                image:
                  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              },
              {
                name: "Wood-Fired Pizza",
                price: "Rs 1,200",
                description: "Traditional Neapolitan style pizza",
                image:
                  "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
              },
              {
                name: "Tiramisu",
                price: "Rs 750",
                description: "Classic Italian dessert with mascarpone",
                image:
                  "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <span className="text-2xl font-bold text-amber-600">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <button className="w-full bg-amber-600 text-white py-3 rounded-full hover:bg-amber-700 transition duration-300 font-semibold cursor-pointer">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
