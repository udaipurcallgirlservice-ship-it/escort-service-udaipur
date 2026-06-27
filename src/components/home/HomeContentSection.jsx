import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Phone, MessageCircle, Star, Shield, Users, Heart } from 'lucide-react';

const HomeContentSection = () => {
  const whatsappNumber = "+918000253680";
  const whatsappMessage = "Hello, this message is from escortserviceudaipur.com";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:${whatsappNumber}`;

  const contentData = {
    hero: {
      title: "Premium Escort Services in Udaipur | Call Girls Available from ₹2999",
      text: "Welcome to the premier <strong>Escort Service in Udaipur</strong> offering verified <strong>Call Girls Udaipur</strong> starting at just ₹2999. We connect discerning clients with professional <strong>Udaipur Escorts</strong> including <strong>Independent Call Girls</strong>, premium <strong>VIP Escorts</strong>, exotic <strong>Russian Escorts</strong>, charming <strong>College Girls</strong>, and mature <strong>Housewife Escorts</strong>. Enjoy convenient <strong>Cash on Delivery</strong> payment, <strong>24x7 Service</strong> availability, and instant <strong>WhatsApp Booking</strong> at +91-8000253680. Our hand-picked escorts provide professional companionship with absolute discretion and clear booking support.",
      image: "/assets/premium-escort-service-udaipur.jpg",
      alt: "Premium Call Girls Udaipur - Escort Service in Udaipur from ₹2999"
    },
    whyBest: {
      title: "Why Our Udaipur Escort Services Are Unmatched",
      text: "When you choose our agency, you're not just booking an escort; you're investing in a premium experience. Our commitment to quality, privacy, and client satisfaction sets us apart as the leading provider of <strong>Udaipur escort services</strong>. Here’s why discerning gentlemen choose us:",
      points: [
        "<strong>100% Verified Profiles:</strong> Every companion is thoroughly vetted for authenticity and professionalism.",
        "<strong>Absolute Discretion Guaranteed:</strong> Your privacy is our utmost priority from booking to farewell.",
        "<strong>Elite & Diverse Selection:</strong> Meet a wide range of companions, from sophisticated models to charming housewives.",
        "<strong>24/7 Availability:</strong> We are always ready to cater to your desires, day or night.",
        "<strong>Transparent & Fair Service:</strong> No hidden fees. We believe in clear communication and honest service."
      ],
      image: "/assets/professional-udaipur-escorts.jpg",
      alt: "A client enjoying the best Udaipur escort services."
    },
    serviceVarieties: {
      title: "Comprehensive Escort Services in Udaipur",
      text: "We understand that every client has unique desires. Our <strong>Udaipur escort services</strong> are designed to be flexible and cater to a wide array of preferences. Whether you need a stunning date for a high-profile event or a relaxing evening in, we have the perfect companion for you.",
      services: [
        { title: "Romantic Dinner Dates", text: "Elevate your evening with a charming and intelligent companion who can captivate any dinner table." },
        { title: "Social & Corporate Events", text: "Arrive with a stunning partner who adds a touch of class and sophistication to any event." },
        { title: "Incall & Outcall Flexibility", text: "Enjoy our services in the comfort of your hotel or residence (outcall), or visit one of our discreet and luxurious locations (incall)." },
        { title: "Travel & Tour Companions", text: "Explore the beauty of Udaipur with a knowledgeable and fun-loving guide by your side." }
      ],
      image: "/assets/exclusive-escort-service-udaipur.jpg",
      alt: "A variety of Udaipur escort services are offered."
    },
    bookingProcess: {
      title: "Simple & Secure Booking for Your Udaipur Escort",
      text: "We've streamlined our process to make booking your desired companion quick, easy, and completely secure. Your unforgettable experience is just a few steps away.",
      steps: [
        "<strong>Explore Our Gallery:</strong> Browse through our collection of genuine and verified profiles.",
        "<strong>Select Your Companion:</strong> Choose the escort who best matches your preferences.",
        "<strong>Contact Us Directly:</strong> Reach out via WhatsApp or a direct call to confirm availability.",
        "<strong>Finalize the Details:</strong> Confirm the time, duration, and location for your meeting.",
        "<strong>Enjoy Your Experience:</strong> Relax and anticipate a memorable time with your chosen companion."
      ],
      image: "/assets/classy-escort-service-udaipur.jpg",
      alt: "Easy booking process for Udaipur escort services."
    },
    secureConfidential: {
        title: "Your Safety & Confidentiality is Our Promise",
        text: "We have built our reputation on trust and integrity. Every interaction with our agency is protected by strict confidentiality protocols. We ensure that your personal information is handled with the highest level of security, allowing you to relax and enjoy our <strong>Udaipur escort services</strong> with complete peace of mind. Your satisfaction and safety are the cornerstones of our business.",
        image: "/assets/elegant-udaipur-escorts.jpg",
        alt: "A symbol of security for our confidential Udaipur escort services."
    }
  };

  const renderBlock = (blockData, alignment = "right", index) => (
    <motion.div
      key={blockData.title + index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`grid md:grid-cols-2 gap-12 items-center ${alignment === 'left' ? 'md:grid-flow-col-dense' : ''}`}
    >
      <div className={`space-y-6 ${alignment === 'left' ? 'md:order-2' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
          <span className="gradient-text">{blockData.title}</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: blockData.text }} />
        {blockData.points && (
          <ul className="list-none space-y-3 pl-0">
            {blockData.points.map((point, pIndex) => (
              <li key={pIndex} className="flex items-start text-lg text-gray-600">
                <CheckCircle className="w-6 h-6 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: point }} />
              </li>
            ))}
          </ul>
        )}
        {blockData.services && blockData.services.map((service, sIndex) => (
          <div key={sIndex} className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">{service.text}</p>
          </div>
        ))}
        {blockData.steps && (
          <ol className="space-y-3">
            {blockData.steps.map((step, stIndex) => (
              <li key={stIndex} className="flex items-start text-lg text-gray-600">
                <CheckCircle className="w-6 h-6 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                 <span dangerouslySetInnerHTML={{ __html: step }} />
              </li>
            ))}
          </ol>
        )}
         <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a href={callLink}>
                <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-3 text-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                    <Phone className="mr-2 w-5 h-5" />
                    Call Now
                </Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600 px-8 py-3 text-md rounded-full group transition-all duration-300"
                >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chat on WhatsApp
                </Button>
            </a>
        </div>
      </div>
      {blockData.image && (
        <div className={`relative rounded-2xl overflow-hidden shadow-2xl aspect-square ${alignment === 'left' ? 'md:order-1' : ''}`}>
          <OptimizedImage 
            src={blockData.image} 
            alt={blockData.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>
      )}
    </motion.div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {renderBlock(contentData.hero, "right", 0)}
        {renderBlock(contentData.whyBest, "left", 1)}
        {renderBlock(contentData.serviceVarieties, "right", 2)}
        {renderBlock(contentData.bookingProcess, "left", 3)}
        {renderBlock(contentData.secureConfidential, "right", 4)}
      </div>
    </section>
  );
};

export default HomeContentSection;
