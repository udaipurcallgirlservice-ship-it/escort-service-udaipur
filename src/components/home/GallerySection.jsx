import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';

const GallerySection = () => {
  const galleryImages = [
    "/assets/beautiful-escort-girls-udaipur.jpg",
    "/assets/hot-escort-girls-udaipur.jpg",
    "/assets/model-escorts-in-udaipur.jpg",
    "/assets/young-escort-girls-udaipur.jpg",
    "/assets/high-class-call-girls-udaipur.jpg",
    "/assets/beautiful-model-escort-udaipur.jpg",
    "/assets/elite-call-girl-service-udaipur.jpg",
    "/assets/premium-vip-call-girl-udaipur.jpg",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Stunning Companions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse into our gallery of beautiful and sophisticated escorts available in Udaipur.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="aspect-w-1 aspect-h-1"
            >
              <OptimizedImage src={src} alt={`Udaipur Escort Gallery Image ${index + 1}`} className="object-cover w-full h-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" />
            </motion.div>
          ))}
        </div>
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/gallery">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Full Gallery
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;