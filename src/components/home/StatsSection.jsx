import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Premium Escorts' },
    { number: '24/7', label: 'Support' },
    { number: '100%', label: 'Satisfaction' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;