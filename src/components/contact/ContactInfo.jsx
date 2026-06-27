import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 8000253680'],
      description: '24/7 Available'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['Royalkingclub007@gmail.com'],
      description: 'Quick Response'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['City Palace Road', 'Udaipur, Rajasthan 313001'],
      description: 'Prime Location'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['24/7 Service', 'Always Available'],
      description: 'Round the Clock'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
          Contact <span className="gradient-text">Information</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We're here to help you 24/7. Reach out to us through any of the following channels 
          and we'll respond promptly to assist with your booking.
        </p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((info, index) => {
          const Icon = info.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-4 p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">{info.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 rounded-2xl"
      >
        <div className="flex items-start space-x-4">
          <Shield className="w-8 h-8 text-pink-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Privacy Guarantee</h3>
            <p className="text-gray-300 leading-relaxed">
              Your privacy and discretion are our top priorities. All communications and 
              personal information are kept strictly confidential and secure.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
