import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const AboutIntroSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              About Our <span className="gradient-text">Udaipur Escort Service</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are a premium escort service provider in Udaipur, dedicated to offering our clients an exceptional experience. Our agency is known for its professionalism, discretion, and a roster of beautiful, educated, and high-class call girls. We understand the needs of our discerning clients and strive to provide a service that is both satisfying and memorable.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to ensure that every client feels valued and gets the companionship they desire. Whether you need a partner for a social event, a relaxing evening, or a romantic dinner, our escorts are trained to fit perfectly into any situation.
            </p>
            <Link to="/about">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage 
                  className="w-full h-auto object-cover" 
                  alt="Beautiful escort posing elegantly in a luxury setting in Udaipur"
               src="/assets/164c8eaf7dd6c47d742e0890b15d1f5e.webp" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;