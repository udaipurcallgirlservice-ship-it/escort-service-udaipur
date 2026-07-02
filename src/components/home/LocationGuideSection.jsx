import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Heart, Shield } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const locationsData = [
  {
    name: "Lake Pichola Heritage Zone",
    keyword: "call girl in Udaipur Lake Pichola",
    description: "Lake Pichola is the crown jewel of Udaipur, surrounded by grand palaces and five-star heritage hotels like Taj Lake Palace, Trident, and The Leela. Hiring a companion like a call girl in Udaipur Lake Pichola is the ultimate way to elevate your lakeside stay. She can accompany you on a private sunset boat ride, share an intimate candlelight dinner, or enjoy quiet moments overlooking the sparkling lake waters.",
    image: "/assets/exclusive-escort-service-udaipur.jpg",
    tag: "Romantic Lakeside"
  },
  {
    name: "Fateh Sagar Scenic Drive",
    keyword: "Udaipur call girl Fateh Sagar",
    description: "Fateh Sagar Lake offers stunning mountain views, vibrant lakeside cafes, and peaceful walks along the promenade. Sharing this serene experience with a beautiful Udaipur call girl Fateh Sagar companion makes it twice as enjoyable. Whether you want to enjoy cold coffee at the stalls, take a drive around the lake, or take a boat trip to Nehru Park, our companions make perfect partners.",
    image: "/assets/classy-escort-service-udaipur.jpg",
    tag: "Scenic & Casual"
  },
  {
    name: "City Palace Heritage Tour",
    keyword: "escort service Udaipur City Palace",
    description: "Immerse yourself in Rajasthan's royal history at the historic City Palace complex. Our exclusive escort service Udaipur City Palace option connects you with highly intelligent, sophisticated, and polished companions who act as elegant social partners. They blend in perfectly at high-end heritage museums, art galleries, and upscale palaces, making your historical walk an absolute delight.",
    image: "/assets/professional-udaipur-escorts.jpg",
    tag: "Royal & Elite"
  },
  {
    name: "Udaipur Near Me & Hotel Outcalls",
    keyword: "call girl in Udaipur near me",
    description: "No matter where you are staying in the city, finding a call girl in Udaipur near me is easy and hassle-free. Our escort service in Udaipur provides complete city-wide coverage. We deliver premium hotel outcalls to areas including Hiran Magri, Sobhagpura, Sukhadia Circle, and Sukher, ensuring our gorgeous companions reach your luxury hotel room or private villa within 30 to 45 minutes of booking confirmation.",
    image: "/assets/premium-escort-service-udaipur.jpg",
    tag: "24/7 Fast Delivery"
  }
];

const LocationGuideSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-pink-600 font-bold tracking-wider uppercase text-sm bg-pink-50 px-4 py-1.5 rounded-full inline-block mb-4">
            Local Tourism Guide
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-normal text-gray-900 mb-6">
            Explore Udaipur with a <span className="gradient-text">Premium Companion</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Enhance your travel experience in the City of Lakes. Our professional companions are available across Udaipur's top spots and luxury hotels to keep you company.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {locationsData.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col md:flex-row group"
            >
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <OptimizedImage
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                  {location.tag}
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center text-pink-500 font-semibold text-sm">
                    <MapPin className="w-4 h-4 mr-1.5" />
                    <span>{location.name}</span>
                  </div>
                  <h3 className="text-2xl font-normal text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                    {location.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {location.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Target Search:
                  </span>
                  <span className="text-xs font-semibold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md">
                    {location.keyword}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-3xl border border-gray-100 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 flex-shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-normal text-gray-900">Are you staying at a premium hotel or resort?</h4>
              <p className="text-sm text-gray-500">We offer swift and completely confidential hotel delivery to all areas of Udaipur.</p>
            </div>
          </div>
          <a
            href="https://wa.me/918000253680?text=Hello,%20I%20am%20interested%20in%20booking%20a%20companion%20for%20my%20stay%20in%20Udaipur.%20Please%20share%20profiles."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
            >
              Book Lakeside Outcall
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationGuideSection;
