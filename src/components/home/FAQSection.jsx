import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const faqsData = [
  {
    question: 'What services do Call Girls Udaipur provide?',
    answer: 'Call Girls Udaipur offer premium companionship services including dinner dates, travel companionship, private events, and social gatherings. All services are provided by verified, professional escorts who prioritize discretion and client satisfaction.',
  },
  {
    question: 'How much does Escort Service in Udaipur cost?',
    answer: 'Our Escort Service in Udaipur starts from just ₹2999 for standard bookings. VIP and premium escort packages are available at competitive rates. We offer transparent pricing with no hidden charges and accept cash on delivery for your convenience.',
  },
  {
    question: 'Are Udaipur Escorts available 24x7?',
    answer: 'Yes, our Udaipur Escorts are available 24 hours a day, 7 days a week. You can book anytime through WhatsApp at +91-8000253680 or through our website. We ensure quick response times and flexible scheduling to meet your needs.',
  },
  {
    question: 'How do I book Call Girls in Udaipur?',
    answer: 'Booking Call Girls Udaipur is easy and discreet. Simply contact us via WhatsApp at +91-8000253680, browse our gallery to select your preferred escort, confirm availability, and complete the booking. We accept cash on delivery and ensure complete privacy.',
  },
  {
    question: 'Are Independent Call Girls in Udaipur verified?',
    answer: 'Yes, all our Independent Call Girls undergo thorough verification including identity checks, health screenings, and professional background verification. We ensure every escort in our network maintains the highest standards of safety and professionalism.',
  },
  {
    question: 'What types of escorts are available in Udaipur?',
    answer: 'We offer diverse escort categories including VIP Escorts, Russian Escorts, Model Escorts, College Girl Escorts, Housewife Escorts, and Independent Escorts. Each category is carefully curated to meet different preferences and budgets.',
  },
  {
    question: 'Is Cash on Delivery available for escort bookings?',
    answer: 'Yes, we offer Cash on Delivery payment option for all escort bookings in Udaipur. Payment is accepted at the time of meeting, ensuring transparency and security. No advance payment is required for verified bookings.',
  },
  {
    question: 'How discreet is your Escort Service in Udaipur?',
    answer: 'Complete discretion is our top priority. All communications are encrypted, bookings are confidential, and our escorts maintain strict professional privacy standards. Your personal information and booking details remain completely confidential.',
  },
  {
    question: 'Can I book Russian Escorts in Udaipur?',
    answer: 'Yes, we have a premium selection of Russian Escorts available in Udaipur. Our Russian companions are verified, highly professional, and offer sophisticated companionship for social events, travel, and private engagements.',
  },
  {
    question: 'What areas in Udaipur do you provide escort services?',
    answer: 'We provide escort services across all major areas of Udaipur including City Palace, Lake Pichola, Fateh Sagar, Ambrai Ghat, Sajjangarh, Hathi Pol, and all premium hotels. Incall and outcall options are available based on your preference.',
  },
  {
    question: 'Are VIP Escorts available for overnight bookings?',
    answer: 'Yes, our VIP Escorts are available for both short-term and overnight bookings. We offer flexible duration packages including hourly, half-day, full-day, and overnight arrangements with competitive pricing for extended bookings.',
  },
  {
    question: 'How can I verify the authenticity of escort profiles?',
    answer: 'All profiles in our gallery are 100% genuine with verified photos. We conduct regular authenticity checks and update profiles frequently. You can request video verification before booking to ensure complete satisfaction and transparency.',
  },
  {
    question: 'What is the cancellation policy for escort bookings?',
    answer: 'We offer flexible cancellation with no charges if cancelled 2 hours before the scheduled time. Last-minute cancellations may incur a nominal fee. Emergency cancellations are handled on a case-by-case basis with understanding and flexibility.',
  },
  {
    question: 'Do you offer couples escort services in Udaipur?',
    answer: 'Yes, we provide couples escort services with carefully selected companions who specialize in couple entertainment. This includes threesome arrangements, party companions, and special event attendance with complete discretion guaranteed.',
  },
  {
    question: 'What safety measures do Udaipur Escorts follow?',
    answer: 'All our escorts follow strict safety protocols including regular health check-ups, secure meeting locations, emergency contact systems, and professional conduct guidelines. We prioritize the safety of both clients and escorts in every engagement.',
  },
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