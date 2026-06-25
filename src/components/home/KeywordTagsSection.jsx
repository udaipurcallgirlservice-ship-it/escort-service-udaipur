import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

const KeywordTagsSection = () => {
  const keywordGroups = [
    {
      title: 'Core Keywords',
      keywords: [
        'Udaipur Escort Service',
        'Udaipur Call Girls',
        'Call Girls in Udaipur',
        'Escorts in Udaipur',
        'Udaipur Independent Escorts',
        'Udaipur VIP Escorts',
        'Luxury Escorts in Udaipur',
        'Female Escorts in Udaipur'
      ]
    },
    {
      title: 'Payment Focused Keywords',
      keywords: [
        'Udaipur Call Girls Cash on Delivery',
        'Udaipur Escorts Service Cash Payment'
      ]
    },
    {
      title: 'Experience & Service Keywords',
      keywords: [
        'Udaipur Girlfriend Experience Escorts',
        'High Profile Call Girls in Udaipur',
        'College Girls Escorts Udaipur',
        'Housewife Escorts in Udaipur',
        'Russian Escorts in Udaipur',
        'Udaipur Night Call Girls',
        'Udaipur Erotic Massage Escorts'
      ]
    },
    {
      title: 'Strong Buyer-Intent Keywords',
      keywords: [
        'Book Udaipur Call Girls Online',
        'Genuine Escorts Service Udaipur',
        'Trusted Escorts Agency in Udaipur',
        'Best Call Girls Udaipur',
        'Top Escorts in Udaipur'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const groupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Tag className="w-12 h-12 text-pink-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Explore <span className="text-pink-400">Our Services</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Find exactly what you're looking for with our comprehensive range of escort services in Udaipur.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-12"
        >
          {keywordGroups.map((group, groupIndex) => (
            <motion.div key={groupIndex} variants={groupVariants}>
              <h3 className="text-xl font-semibold text-pink-400 mb-6 border-b border-gray-700 pb-2 flex items-center">
                {group.title}
              </h3>
              <motion.div className="flex flex-wrap gap-3" variants={groupVariants}>
                {group.keywords.map((keyword, keywordIndex) => (
                  <motion.span
                    key={keywordIndex}
                    variants={tagVariants}
                    whileHover={{ scale: 1.05, backgroundColor: '#EC4899', color: '#FFFFFF' }}
                    className="bg-gray-800 text-gray-300 text-sm font-medium px-4 py-2 rounded-full cursor-pointer transition-colors duration-300"
                  >
                    {keyword}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeywordTagsSection;