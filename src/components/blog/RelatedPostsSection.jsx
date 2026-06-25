import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';
import { ArrowLeft } from 'lucide-react';

const RelatedPostsSection = ({ relatedPosts }) => {
  const categoriesMap = {
    'companionship-tips': 'Companionship Tips',
    'service-explained': 'Service Explained',
    'luxury-lifestyle': 'Luxury Lifestyle',
  };
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Related <span className="gradient-text">Escort & Call Girl Articles</span>
          </h2>
          <p className="text-xl text-gray-600">
            Continue exploring our insights on elite escort and call girl services in Udaipur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover group"
            >
              <div className="relative overflow-hidden aspect-video">
                 <OptimizedImage  
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={post.title + " - Udaipur Call Girl Information"} src={post.image} />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium capitalize">
                  {categoriesMap[post.category] || post.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2">
                  {post.title}
                </h3>
                <Link to={`/blog/${post.slug}`}>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 group p-0"
                  >
                    Read Escort Article
                    <ArrowLeft className="ml-1 w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPostsSection;