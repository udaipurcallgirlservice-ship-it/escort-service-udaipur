import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Heart, CheckCircle } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Verified Profiles',
      description: 'All our escorts go through a rigorous verification process. You can be assured that you are meeting genuine and professional individuals.'
    },
    {
      icon: Shield,
      title: '100% Discretion',
      description: 'We prioritize your privacy. All your information is kept confidential, and our services are provided with the utmost discretion.'
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction',
      description: 'Our primary goal is your satisfaction. We go the extra mile to ensure that your experience with our escorts is nothing short of perfect.'
    },
    {
      icon: CheckCircle,
      title: 'High-Class Escorts',
      description: 'We have a selection of high-class, educated, and sophisticated escorts who can accompany you to any high-profile event or a private evening.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Why Choose Our <span className="gradient-text">Escort Service in Udaipur?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When you choose our escort service, you are opting for quality, reliability, and an unparalleled experience. We stand out from the rest.
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

export default WhyChooseUsSection;