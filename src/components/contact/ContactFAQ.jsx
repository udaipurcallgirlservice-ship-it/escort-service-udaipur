import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const ContactFAQ = () => {
  const faqs = [
    {
      question: 'How do I book a service?',
      answer: 'Simply fill out our contact form or call us directly. We\'ll discuss your requirements and arrange everything for you.'
    },
    {
      question: 'Is my privacy guaranteed?',
      answer: 'Absolutely. We maintain strict confidentiality and discretion in all our services and communications.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We primarily serve Udaipur and surrounding areas. For travel companions, we can arrange services in other cities as well.'
    },
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 24-48 hours in advance, though we can accommodate last-minute requests when possible.'
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick answers to common questions about our services and booking process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Heart className="w-5 h-5 text-pink-500 mr-2" />
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;