import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, CheckCircle2, Star, ShieldCheck } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const HeroSection = () => {
  const whatsappNumber = "+918000253680";
  const whatsappMessage = "Hello, I am looking to book a premium call girl companion in Udaipur. Please share details.";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:${whatsappNumber}`;

  return (
    <section className="relative min-h-screen bg-[#070708] overflow-hidden flex items-center pt-28 pb-16">
      {/* Background ambient lighting glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-900/10 rounded-full filter blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-950/15 rounded-full filter blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading and copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-center space-y-8 text-center lg:text-left items-center lg:items-start"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-500/10 border border-pink-500/20 text-pink-400 rounded-full text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-ping"></span>
            <span>Rajasthan's #1 Premium Companion Network</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-white leading-tight">
            Udaipur Call Girl <br />
            <span className="text-gray-400 font-light">& Luxury</span> <span className="gradient-text font-normal">Escort Service</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Welcome to the leading agency for high-end adult entertainment, where booking a gorgeous <strong>Udaipur Call Girl</strong> or a private companion is easy, secure, and friendly. We offer premium outcalls to all five-star heritage hotels and boutique lakeside resorts starting from ₹2999. Enjoy absolute privacy and 100% Cash on Delivery payment.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={callLink} className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-6 text-base rounded-2xl shadow-xl shadow-pink-500/20 transition-all duration-300 group"
              >
                <Phone className="mr-2.5 w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                Book Companion Now
              </Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full bg-[#121214] hover:bg-[#1a1a1e] text-white border border-neutral-800 hover:border-neutral-700 px-8 py-6 text-base rounded-2xl transition-all duration-300"
              >
                <MessageCircle className="mr-2.5 w-5 h-5 text-emerald-500" />
                WhatsApp Enquiry
              </Button>
            </a>
          </div>

          {/* Trust Checkpoints */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-y-3 gap-x-6 pt-4 text-xs text-gray-400 border-t border-neutral-900 w-full">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-pink-500" />
              <span>100% Real Companion Photos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-pink-500" />
              <span>Pay on Service Arrival (COD)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-pink-500" />
              <span>Full Identity & Privacy Secrecy</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Floating companion portrait collage (Hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 hidden lg:flex justify-center items-center relative"
        >
          {/* Card Ambient Glow behind it */}
          <div className="absolute w-80 h-80 bg-pink-600/10 rounded-full filter blur-[80px] -z-10 animate-pulse-slow"></div>

          {/* Floating Premium Card Frame */}
          <motion.div
            whileHover={{ y: -8, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative bg-[#0d0d10] border border-neutral-900 p-4 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] max-w-sm w-full"
          >
            {/* image container */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-4 bg-neutral-900">
              <OptimizedImage
                src="/assets/udaipur-escort-service.jpg"
                alt="Verified Udaipur Call Girl Profile"
                className="w-full h-full object-cover"
                priority={true}
              />
              {/* Badges inside image overlay */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xl flex items-center gap-1 border border-neutral-800/80 text-yellow-400 text-xs font-bold">
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
                <span>4.9 (250+ reviews)</span>
              </div>
              <div className="absolute bottom-3 left-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-lg shadow-md shadow-pink-500/20">
                Premium Model
              </div>
            </div>
            {/* profile information details */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-white font-display">Ananya Sen</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-emerald-400 text-xs font-medium">Online Now</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Elite college model companion offering personalized lakeside walks, resort dating, and discreet travel escort services across Udaipur lake zones.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator mouse animation */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neutral-800 rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-neutral-600 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
