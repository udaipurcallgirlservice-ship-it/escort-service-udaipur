import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const faqsData = [
  {
    question: "What types of call girls are available through your Udaipur escort service?",
    answer: "Our Udaipur escort service offers a diverse range of call girls, including college girls, professional models, experienced housewives, and exotic Russian escorts. Each call girl is verified and aims to provide a unique and satisfying experience."
  },
  {
    question: "How do I book an escort or call girl in Udaipur?",
    answer: "Booking a call girl or escort in Udaipur is simple. You can contact us via phone or WhatsApp. Browse our gallery, choose your preferred companion, and let us know your requirements. Our team will handle the arrangements discreetly."
  },
  {
    question: "Are your Udaipur escort services discreet and confidential?",
    answer: "Absolutely. Discretion and confidentiality are paramount for our escort service. All interactions, bookings, and personal information related to our call girls and clients are kept strictly private."
  },
  {
    question: "What are the rates for hiring a call girl in Udaipur?",
    answer: "Rates for our Udaipur call girls vary depending on the escort selected, duration of service, and specific requests. Please contact us directly for detailed pricing information about our escort services."
  },
  {
    question: "Do you offer incall and outcall escort services in Udaipur?",
    answer: "Yes, our escort service provides both incall and outcall options in Udaipur. Incall services are at discreet, high-quality locations. For outcall, our call girls can visit your hotel or residence."
  },
  {
    question: "Is the safety of clients and call girls ensured?",
    answer: "Client and call girl safety is our top priority. We have strict verification processes for all escorts and ensure all meetings are conducted in a safe and respectful manner. Our escort service adheres to high safety standards."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <HelpCircle className="w-16 h-16 text-pink-500 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Frequently Asked Questions about <span className="gradient-text">Udaipur Escorts & Call Girls</span>
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common queries about our escort and call girl services in Udaipur.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqsData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-pink-500 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-pink-50/30">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;