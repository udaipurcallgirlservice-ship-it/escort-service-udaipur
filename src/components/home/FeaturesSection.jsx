import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Clock, Heart } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Discreet & Professional',
      description: 'Complete privacy and confidentiality guaranteed for all our clients.'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Only the finest companions with exceptional beauty and intelligence.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock service to accommodate your schedule and preferences.'
    },
    {
      icon: Heart,
      title: 'Personalized Experience',
      description: 'Tailored services to meet your unique desires and requirements.'
    }
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
            Why Choose <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We pride ourselves on delivering exceptional experiences with the highest standards of professionalism and discretion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-red-50 hover:shadow-xl transition-all duration-300 card-hover group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;