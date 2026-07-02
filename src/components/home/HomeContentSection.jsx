import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, ShieldCheck, Heart, Sparkles, CheckCircle2, Star, UserCheck } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const HomeContentSection = () => {
  const whatsappNumber = "+918000253680";
  const whatsappMessage = "Hello, this message is from escortserviceudaipur.com";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:${whatsappNumber}`;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-100/30 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100/30 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10">
        
        {/* Section 1: Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-pink-600 font-bold tracking-wider uppercase text-sm bg-pink-50 px-4 py-1.5 rounded-full inline-block">
              Premium Companionship
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 leading-tight">
              The Ultimate Hub for <span className="gradient-text">Call Girl Udaipur</span> Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to the leading agency for high-end adult entertainment, where booking a gorgeous <strong>call girl Udaipur</strong> is an effortless, secure, and delightful experience. We pride ourselves on providing the finest <strong>Udaipur call girl</strong> database in Rajasthan. Our platform connects refined gentlemen with verified, polite, and captivating <strong>Udaipur escorts</strong> who are ready to make your visits to the City of Lakes truly memorable.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are in town for a corporate meeting, a solo holiday, or just a relaxing weekend, finding a friendly <strong>call girl in Udaipur</strong> who matches your high standards is our specialty. Our trusted <strong>escort service Udaipur</strong> works round-the-clock to coordinate smooth, premium companion bookings, ensuring that you receive unparalleled entertainment with absolute confidentiality.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={callLink}>
                <Button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full px-6 py-5 shadow-lg group">
                  <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Call Agency Now
                </Button>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 rounded-full px-6 py-5">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Support
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square"
          >
            <OptimizedImage
              src="/assets/premium-escort-service-udaipur.jpg"
              alt="Premium Call Girls Udaipur - Escort Service in Udaipur"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Section 2: Why Book Udaipur Call Girls */}
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:order-2 space-y-6"
          >
            <span className="text-pink-600 font-bold tracking-wider uppercase text-sm bg-pink-50 px-4 py-1.5 rounded-full inline-block">
              Why We Are #1
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight">
              Unmatched Elite <span className="gradient-text">Udaipur Call Girl Service</span> Standards
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              When it comes to selecting a reliable agency, transparency, safety, and visual matches are the most important factors. Our dedicated <strong>Udaipur call girl service</strong> is designed around customer satisfaction. We do not engage in fake profiles or use stock images. Every companion is thoroughly verified to make sure you get exactly what you choose from our gallery.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Hiring a <strong>premium call girl in Udaipur</strong> through our network guarantees an extraordinary girlfriend experience. We offer multiple categories of companions, including sophisticated <strong>private call girl Udaipur</strong> choices and stunning <strong>independent call girl Udaipur</strong> partners, giving you the flexibility to select a companion who fits your desires perfectly.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span className="text-sm font-semibold">100% Real Profiles</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span className="text-sm font-semibold">No Prepayments</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span className="text-sm font-semibold">Absolute Secrecy</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span className="text-sm font-semibold">Premium Hospitality</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square"
          >
            <OptimizedImage
              src="/assets/professional-udaipur-escorts.jpg"
              alt="Udaipur Call Girl Service - Premium Companionship"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Section 3: Premium Categories Showcase */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <span className="text-pink-600 font-bold tracking-wider uppercase text-sm bg-pink-50 px-4 py-1.5 rounded-full inline-block">
              Explore Roster
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Choose Your Dream <span className="gradient-text">Udaipur Escort Category</span>
            </h2>
            <p className="text-lg text-gray-600">
              We offer multiple categories of high-profile companions, ensuring that we cater to all budgets and unique companionship requirements in Udaipur.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-lg flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">VIP Call Girls</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Book an elite <strong>VIP call girl Udaipur</strong> companion for high-profile meetings or private events. These companions are elegant, speak fluent English, and offer top-notch social conversations. They are the ideal choice for business travelers who want class and beauty.
                </p>
              </div>
              <span className="text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1.5 rounded-md inline-block self-start">
                Premium Category
              </span>
            </motion.div>

            {/* Category 2 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-lg flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Model Companions</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hire a stunning <strong>model call girl in Udaipur</strong> or choose a <strong>high profile Udaipur call girl</strong>. These companions represent the pinnacle of physical perfection and charm, coming from modeling, media, or fashion backgrounds to make your private party truly extraordinary.
                </p>
              </div>
              <span className="text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1.5 rounded-md inline-block self-start">
                Elite Category
              </span>
            </motion.div>

            {/* Category 3 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-lg flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Premium Escorts</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Experience a customized date night with our top-tier <strong>premium escort service Udaipur</strong> package. Our beautiful companions offer deep connections, romantic dates at lake view cafes, and discrete companionship throughout your stay.
                </p>
              </div>
              <span className="text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1.5 rounded-md inline-block self-start">
                Popular Choice
              </span>
            </motion.div>
          </div>
        </div>

        {/* Section 4: Incall & Outcall Options */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-pink-600 font-bold tracking-wider uppercase text-sm bg-pink-50 px-4 py-1.5 rounded-full inline-block">
              Flexible Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight">
              Incall and Outcall <span className="gradient-text">Escort Service in Udaipur</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our professional agency provides complete flexibility for our clients. Whether you want our companions to visit you at your private hotel suite or you wish to visit our clean, secure, and private apartments, our <strong>escort service in Udaipur</strong> has got you covered.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We specialize in <strong>call girl Udaipur hotel service</strong>, delivering high-end companionship to luxury hotels, boutique resorts, and guest houses. If you are staying at any property in Udaipur and searching for a verified <strong>call girl in Udaipur near me</strong>, simply send us an enquiry, and we will arrange a companion to reach your location securely and quickly.
            </p>
            <div className="p-6 bg-pink-50/50 rounded-2xl border border-pink-100 flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Guaranteed Safety & Discretion</h4>
                <p className="text-sm text-gray-600">We implement strict confidentiality policies. No information regarding your booking, call details, or messages is shared or stored in any database.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square"
          >
            <OptimizedImage
              src="/assets/exclusive-escort-service-udaipur.jpg"
              alt="Incall and Outcall Escort Service Udaipur"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Section 5: Booking Guide & Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:order-2 space-y-6"
          >
            <span className="text-pink-600 font-bold tracking-wider uppercase text-sm bg-pink-50 px-4 py-1.5 rounded-full inline-block">
              Easy Booking
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight">
              Steps for <span className="gradient-text">Udaipur Call Girl Enquiry</span> & Booking
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We have optimized our booking system to make it fast, secure, and direct. You do not need to deal with middlemen, call centers, or pay advanced registration fees. Simply follow our easy process to establish a direct <strong>call girl in Udaipur contact</strong>:
            </p>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="w-7 h-7 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 mt-0.5 flex-shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-gray-900">Initiate a Call or Message</h4>
                  <p className="text-sm text-gray-600">Connect with us using our official <strong>call girl Udaipur contact number</strong> or send a message to our <strong>escort service Udaipur contact</strong> desk via WhatsApp.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-7 h-7 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 mt-0.5 flex-shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-gray-900">Make an Enquiry & Pick Profiles</h4>
                  <p className="text-sm text-gray-600">Make a quick <strong>Udaipur call girl enquiry</strong>. Our booking managers will share real, uncensored profile photos of active companions matching your choices.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-7 h-7 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 mt-0.5 flex-shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-gray-900">Confirm Your Booking Details</h4>
                  <p className="text-sm text-gray-600">Finalize your <strong>call girl Udaipur booking</strong> details, including date, time, duration, and hotel name or outcall coordinates with our team.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-7 h-7 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 mt-0.5 flex-shrink-0">4</span>
                <div>
                  <h4 className="font-bold text-gray-900">Enjoy Cash on Delivery Payment</h4>
                  <p className="text-sm text-gray-600">Our companion arrives at your hotel room. Verify her and pay directly in cash. Our reliable <strong>escort service Udaipur support</strong> team is always online to help.</p>
                </div>
              </li>
            </ol>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square"
          >
            <OptimizedImage
              src="/assets/classy-escort-service-udaipur.jpg"
              alt="Udaipur Call Girl Enquiry and Booking Steps"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Section 6: Contact Information and Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden text-center space-y-8"
        >
          <div className="absolute inset-0 bg-pink-500/10 opacity-30 pointer-events-none"></div>
          <UserCheck className="w-16 h-16 text-pink-400 mx-auto" />
          <div className="space-y-4 max-w-3xl mx-auto">
            <h3 className="text-3xl font-display font-bold">
              Looking for a Trusted <span className="text-pink-400">Call Girl in Udaipur Contact</span>?
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Get direct access to our verified companions without any upfront fees. Our booking desk is open 24 hours a day, 7 days a week, offering prompt support and reliable bookings.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-4 max-w-md mx-auto">
            <a href={callLink} className="w-full">
              <Button size="lg" className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full py-6 font-bold shadow-lg shadow-pink-500/25">
                <Phone className="w-5 h-5 mr-2" />
                Call +91-8000253680
              </Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full py-6 font-bold">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Message
              </Button>
            </a>
          </div>
          <div className="pt-6 border-t border-gray-800 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span>Official Number: <strong className="text-white">+91-8000253680</strong></span>
            <span>•</span>
            <span>Support Email: <strong className="text-white">booking@escortserviceudaipur.com</strong></span>
            <span>•</span>
            <span>Booking Location: <strong className="text-white">Udaipur, Rajasthan (India)</strong></span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeContentSection;
