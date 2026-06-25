import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import OptimizedImage from '@/components/ui/OptimizedImage';

    const ComprehensiveServicesSection = () => {
      return (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Comprehensive <span className="gradient-text">Escort Services</span> in Udaipur
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our escort service in Udaipur offers a comprehensive range of companionship options designed to meet every client's unique preferences and desires. Whether you're seeking an elegant dinner companion, a travel partner, or an intimate evening experience, our carefully selected call girls provide unmatched sophistication and discretion.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Elite Escort Categories</h3>
                <p className="text-gray-600 mb-4">
                  Our diverse portfolio includes Russian escorts, VIP call girls, housewife escorts, independent escorts, and model escorts. Each category offers unique experiences tailored to specific preferences.
                </p>
                <Link to="/gallery" className="text-pink-600 hover:text-pink-700 font-medium">
                  Explore Our Gallery →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Availability</h3>
                <p className="text-gray-600 mb-4">
                  Our escort service operates round the clock to accommodate your schedule. Whether you need companionship for a late-night event or an early morning business meeting, our call girls are available to provide professional and discreet service at any hour.
                </p>
                <Link to="/contact" className="text-pink-600 hover:text-pink-700 font-medium">
                  Contact Us Now →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Verified Profiles</h3>
                <p className="text-gray-600 mb-4">
                  All our escorts undergo thorough verification processes to ensure authenticity and quality. Browse our <Link to="/gallery" className="text-pink-600 hover:underline">photo gallery</Link> to see real, unedited photos of our call girls, complete with detailed profiles and service descriptions.
                </p>
                <Link to="/gallery" className="text-pink-600 hover:text-pink-700 font-medium">
                  View Gallery →
                </Link>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-6">
                    Why Choose Our Udaipur Escort Service?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <p className="text-gray-700">
                        <strong>Complete Discretion:</strong> Your privacy is our top priority. All interactions are confidential and professional.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <p className="text-gray-700">
                        <strong>Premium Quality:</strong> Our call girls are carefully selected for beauty, intelligence, and sophistication.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <p className="text-gray-700">
                        <strong>Flexible Arrangements:</strong> We offer both incall and outcall services to suit your preferences and convenience.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <p className="text-gray-700">
                        <strong>Cash on Delivery:</strong> Convenient payment options including cash on delivery for your peace of mind.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <OptimizedImage 
                    src="/assets/e20b5460434200f0dc3b9ff6ac1abfd6.webp" 
                    alt="Professional escort service in Udaipur" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default ComprehensiveServicesSection;