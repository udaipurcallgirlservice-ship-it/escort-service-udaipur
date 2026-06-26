import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Share2, Heart, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';

const BlogPostHeader = ({ title, category, date, readTime, author, image }) => {
  const categoriesMap = {
    'companionship-tips': 'Companionship Tips',
    'service-explained': 'Service Explained',
    'luxury-lifestyle': 'Luxury Lifestyle',
  };

  return (
    <>
      <section className="py-12 bg-gradient-to-br from-pink-50 via-white to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full capitalize">
                {categoriesMap[category] || category}
              </span>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
              {title}
            </h1>

            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">{author}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="rounded-full" onClick={() => console.log('clicked')}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="rounded-full" onClick={() => console.log('clicked')}>
                  <Heart className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9]"
          >
            <OptimizedImage  
              className="w-full h-full object-cover" 
              alt={title + " - Udaipur Escort"} src={image} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogPostHeader;