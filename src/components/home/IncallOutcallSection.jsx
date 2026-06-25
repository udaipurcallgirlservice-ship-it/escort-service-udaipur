import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Hotel, Home } from 'lucide-react';

const IncallOutcallSection = () => {
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
            Incall and Outcall <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide flexible options to suit your preferences. Choose between our discreet incall locations or have our companions come to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group"
          >
            <div className="relative">
              <img 
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Luxurious and private hotel room for incall escort services in Udaipur" src="https://images.unsplash.com/photo-1660562229022-ddf20f275066" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                  <Hotel className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white text-shadow">Incall Services</h3>
              </div>
            </div>
            <div className="p-8 bg-white">
              <p className="text-gray-600 leading-relaxed mb-6">
                Our incall services are provided in luxurious and discreet apartments and hotel rooms across Udaipur. These locations are chosen for their comfort, privacy, and high standards of cleanliness, ensuring a safe and comfortable environment for your meeting.
              </p>
              <Link to="/contact">
                <Button variant="link" className="text-pink-600 hover:text-pink-700 p-0 group">
                  Book a Private Venue <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group"
          >
            <div className="relative">
              <img 
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Map of Udaipur city indicating outcall escort service availability" src="https://images.unsplash.com/photo-1561653978-a526ddcfda79" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white text-shadow">Outcall Services</h3>
              </div>
            </div>
            <div className="p-8 bg-white">
              <p className="text-gray-600 leading-relaxed mb-6">
                Prefer the comfort of your own space? Our escorts are available for outcall services to your home, hotel, or any other private location in Udaipur. We guarantee punctuality, discretion, and a professional demeanor, allowing you to relax and enjoy the experience.
              </p>
              <Link to="/contact">
                <Button variant="link" className="text-pink-600 hover:text-pink-700 p-0 group">
                  Arrange a Meeting <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IncallOutcallSection;