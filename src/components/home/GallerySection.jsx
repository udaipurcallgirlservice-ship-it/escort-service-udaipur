import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';

const GallerySection = () => {
  const galleryImages = [
    "/assets/e3dddcd8688f722667464a77821e16b6.jpg",
    "/assets/45188e517813de1ca113b665ed99bd2d.jpg",
    "/assets/8e3087176fce921df3ad0bee2676c5d2.jpg",
    "/assets/b5f23c6fbf8ce0d8400a90d582a08190.jpg",
    "/assets/8acafb7c53d21d13196a7ec71d851be5.jpg",
    "/assets/bbe7066d771050a49d9053fec6842636.jpg",
    "/assets/3a68fde96c4e521b54758e6cb966a2bc.jpg",
    "/assets/a98099e2f64a96da870cca70d497e9ef.jpg",
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