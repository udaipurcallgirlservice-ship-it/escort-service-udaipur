import React from 'react';
    import { motion } from 'framer-motion';
    import { Link, useLocation } from 'react-router-dom';
    import { Home, ArrowLeft, Search } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import MetaUpdater from '@/components/seo/MetaUpdater';

    const NotFoundPage = ({ siteUrl }) => {
      const location = useLocation();
      const pageUrl = `${siteUrl}${location.pathname}`;

      return (
        <>
          <MetaUpdater
            title="404 Page Not Found - Escort Service Udaipur"
            description="The page you're looking for doesn't exist. Please return to our homepage to find elite Udaipur escorts and call girls."
            path={pageUrl}
            noIndex={true}
          />
          <div className="pt-16 lg:pt-20 min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative"
                >
                  <h1 className="text-9xl md:text-[12rem] font-display font-bold gradient-text opacity-20">
                    404
                  </h1>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-20 animate-pulse"></div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                    Oops! Page Not Found
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    The page you're looking for seems to have wandered off into the beautiful 
                    streets of Udaipur. Let's help you find your way back to our premium services.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <Link to="/">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <Home className="mr-2 w-5 h-5" />
                      Go Home
                    </Button>
                  </Link>
                  <Link to="/gallery">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300 group"
                    >
                      <Search className="mr-2 w-5 h-5" />
                      Browse Gallery
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="pt-8"
                >
                  <p className="text-gray-500 mb-4">Or try one of these popular pages:</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      { name: 'About Us', path: '/about' },
                      { name: 'Contact', path: '/contact' },
                      { name: 'Blog', path: '/blog' }
                    ].map((link, index) => (
                      <Link
                        key={index}
                        to={link.path}
                        className="text-pink-600 hover:text-pink-700 underline transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>

                <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-10 animate-float"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
              </motion.div>
            </div>
          </div>
        </>
      );
    };

    export default NotFoundPage;