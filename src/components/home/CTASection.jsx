import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const CTASection = () => {
  const whatsappNumber = "+919549032117";
  const whatsappMessage = "Hello, this message is from escortserviceudaipur.com";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:${whatsappNumber}`;

  return (
    <section className="py-20 relative overflow-hidden">
      <OptimizedImage 
        src="/assets/070d0fd04d47fb001ee593c07df7bb3b.webp"
        alt="Glamorous escort inviting contact"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-shadow">
            Ready for an <span className="gradient-text">Unforgettable Experience</span>?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Contact us today to book your perfect companion and create memories that will last a lifetime. Our Udaipur escorts are waiting to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <a href={callLink}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 group"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white border-2 border-green-500 hover:border-green-600 px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300 group"
              >
                 <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;