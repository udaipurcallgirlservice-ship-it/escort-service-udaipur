import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const WhatsAppStickyButton = ({ phoneNumber = "+918000253680", message = "Hello, this message is from escortserviceudaipur.com" }) => {
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <>
      {/* Mobile Sticky Bar - Premium App-like Floating Capsule Design */}
      <div className="fixed bottom-5 left-5 right-5 z-[999] p-3 bg-white/90 backdrop-blur-xl border border-pink-100/50 rounded-2xl flex items-center justify-between gap-3 shadow-[0_15px_40px_rgba(236,72,153,0.18)] md:hidden">
        <a href={callUrl} className="flex-1">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-medium text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </motion.button>
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </motion.button>
        </a>
      </div>

      {/* Desktop Floating Stack - Offset from margins */}
      <div className="hidden md:flex flex-col gap-3 fixed bottom-6 right-6 z-[999]">
        <motion.a
          href={callUrl}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
          aria-label="Call Support"
        >
          <Phone size={24} />
        </motion.a>
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} />
        </motion.a>
      </div>
    </>
  );
};

export default WhatsAppStickyButton;