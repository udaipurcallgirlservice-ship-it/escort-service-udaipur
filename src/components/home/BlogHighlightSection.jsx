import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';

const BlogHighlightSection = () => {
  const recentPosts = [
    {
      id: 1,
      title: 'Choosing Your Ideal Call Girl in Udaipur: A Discerning Gentleman\'s Guide',
      slug: 'choosing-ideal-call-girl-udaipur-guide',
      excerpt: 'Navigate the vibrant world of Udaipur call girls with our expert tips for an unforgettable escort experience.',
      author: 'Escort Service Udaipur Experts',
      date: '2025-06-12',
      image: '/assets/model-escorts-in-udaipur.jpg',
      category: 'Companionship Tips'
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Incall vs. Outcall Escort Services in Udaipur',
      slug: 'incall-vs-outcall-escort-services-udaipur',
      excerpt: 'Understand incall vs. outcall escort services in Udaipur to choose the perfect call girl experience.',
      author: 'Udaipur Escort Advisor',
      date: '2025-06-08',
      image: '/assets/beautiful-model-escort-udaipur.jpg',
      category: 'Service Explained'
    },
    {
      id: 3,
      title: 'Maximizing Your Escort Experience: Communication and Etiquette with Udaipur Call Girls',
      slug: 'maximizing-escort-experience-udaipur-call-girls',
      excerpt: 'Learn respectful communication and etiquette for a delightful time with your Udaipur call girl.',
      author: 'Elite Companionship Guru',
      date: '2025-06-02',
      image: '/assets/romantic-companion-udaipur-escort.jpg',
      category: 'Luxury Lifestyle'
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
            From Our <span className="gradient-text">Escort & Call Girl Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the latest insights, tips, and stories from our Udaipur escort and call girl service experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group"
            >
              <div className="relative overflow-hidden h-56">
                 <OptimizedImage  
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={post.title + " - Udaipur Escort Blog"} src={post.image} />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-pink-600 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{post.author.split(' ')[0]}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link to={`/blog/${post.slug}`}>
                  <Button 
                    variant="link" 
                    size="sm"
                    className="text-pink-600 hover:text-pink-700 p-0 group text-sm"
                  >
                    Read Escort Post
                    <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
        >
            <Link to="/blog">
                <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                >
                    Visit Our Escort Blog
                    <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHighlightSection;