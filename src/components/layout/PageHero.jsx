import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/ui/OptimizedImage';

const PageHero = ({ title, subtitle, imageSrc, breadcrumbs }) => {
  const defaultImage = "/assets/f8441e649912a570483966ddd70b37de.webp";

  return (
    <section 
      className="relative py-20 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: `url('${imageSrc || defaultImage}')` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {breadcrumbs && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-sm"
          >
            {breadcrumbs}
          </motion.div>
        )}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-display font-bold mb-4 text-shadow"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;