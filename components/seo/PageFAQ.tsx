'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import JsonLd from './JsonLd';
import { faqSchema } from '../../lib/schema';
import type { FAQ } from '../../lib/faqs';

interface PageFAQProps {
  faqs: FAQ[];
  title?: string;
  description?: string;
}

export default function PageFAQ({ faqs, title, description }: PageFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const schema = faqSchema(faqs);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <HelpCircle className="w-14 h-14 text-pink-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              {title || 'Frequently Asked Questions'}
            </h2>
            {description && <p className="text-lg text-gray-600">{description}</p>}
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-semibold text-gray-800 pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-pink-500 flex-shrink-0 transition-transform duration-300 ${
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
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-gray-700 leading-relaxed bg-pink-50/20">
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
    </>
  );
}
