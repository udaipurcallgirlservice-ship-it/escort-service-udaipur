import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ratesData = [
  {
    category: "VIP Escort Service",
    rate1hr: "₹7,000",
    rate2hr: "₹12,000",
    rateNight: "₹25,000",
    features: "High-profile models, luxury dinner dates, multilingual companions",
  },
  {
    category: "Russian Escort Service",
    rate1hr: "₹12,000",
    rate2hr: "₹20,000",
    rateNight: "₹40,000",
    features: "Exotic European companions, travel partners, elite VIP hospitality",
  },
  {
    category: "Model Escort Service",
    rate1hr: "₹8,000",
    rate2hr: "₹14,000",
    rateNight: "₹30,000",
    features: "Fashion & media models, event hosting, stunning presentation",
  },
  {
    category: "Housewife Escort Service",
    rate1hr: "₹5,000",
    rate2hr: "₹8,000",
    rateNight: "₹18,000",
    features: "Mature housewife companions, discreet dating, warm hospitality",
  },
  {
    category: "Independent Escort Service",
    rate1hr: "₹6,000",
    rate2hr: "₹10,000",
    rateNight: "₹22,000",
    features: "Direct companion bookings, absolute privacy, personalized dates",
  }
];

const RatesTableSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-pink-600 font-bold tracking-wider uppercase text-sm bg-pink-50 px-4 py-1.5 rounded-full inline-block mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Udaipur Escort & Call Girl <span className="gradient-text">Tariff Rates</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get premium companionship services at competitive rates. 100% genuine profiles, cash on delivery (COD) payment, and complete discretion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden mb-12"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-pink-500 to-red-500 text-white">
                  <th className="px-6 py-5 text-sm font-semibold uppercase tracking-wider">Companion Category</th>
                  <th className="px-6 py-5 text-sm font-semibold uppercase tracking-wider">1 Hour Rate</th>
                  <th className="px-6 py-5 text-sm font-semibold uppercase tracking-wider">2 Hours Rate</th>
                  <th className="px-6 py-5 text-sm font-semibold uppercase tracking-wider">Full Night Rate</th>
                  <th className="px-6 py-5 text-sm font-semibold uppercase tracking-wider">Included Features</th>
                  <th className="px-6 py-5 text-sm font-semibold uppercase tracking-wider text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {ratesData.map((rate, index) => (
                  <tr key={index} className="hover:bg-pink-50/10 transition-colors duration-200">
                    <td className="px-6 py-6 font-semibold text-gray-900">{rate.category}</td>
                    <td className="px-6 py-6 font-medium text-pink-600">{rate.rate1hr}</td>
                    <td className="px-6 py-6 font-medium text-pink-600">{rate.rate2hr}</td>
                    <td className="px-6 py-6 font-bold text-red-600">{rate.rateNight}</td>
                    <td className="px-6 py-6 text-gray-600 max-w-xs md:max-w-sm text-sm">{rate.features}</td>
                    <td className="px-6 py-6 text-center">
                      <a
                        href={`https://wa.me/918000253680?text=Hello%2C%20I%20am%20interested%20in%20booking%20${encodeURIComponent(rate.category)}.%20Please%20share%20details.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md group">
                          <MessageCircle className="w-3.5 h-3.5 mr-1 group-hover:scale-110 transition-transform duration-300" />
                          Book COD
                        </Button>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-4 p-6 bg-pink-50/20 rounded-2xl border border-pink-100/50">
            <ShieldCheck className="w-8 h-8 text-pink-500 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">100% Cash On Delivery</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pay your companion directly in cash or online transfer at the start of your booking. No deposit traps.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-pink-50/20 rounded-2xl border border-pink-100/50">
            <MessageCircle className="w-8 h-8 text-pink-500 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">WhatsApp Booking</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Send us a direct message on WhatsApp with your favorite companion profile to get fast booking details.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-pink-50/20 rounded-2xl border border-pink-100/50">
            <Phone className="w-8 h-8 text-pink-500 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Discreet & Private</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your private information and dating itineraries are completely safe. We guarantee absolute discretion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatesTableSection;
