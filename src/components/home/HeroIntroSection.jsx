import React from 'react';
import { motion } from 'framer-motion';

const HeroIntroSection = () => {
  return (
    <section className="pt-16 lg:pt-20 pb-8 bg-gradient-to-br from-pink-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Premier Escort Service in Udaipur
            <span className="block gradient-text mt-2">Cash on Delivery & 100% Genuine Call Girls</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Searching for the finest escort service in Udaipur? You've arrived. We connect you with 100% genuine, top-tier, professional call girls in Udaipur with cash on delivery options. Experience discretion, luxury, and satisfaction with our elite escorts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroIntroSection;