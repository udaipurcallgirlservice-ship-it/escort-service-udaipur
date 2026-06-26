import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';
import MetaUpdater from '@/components/seo/MetaUpdater';
import { Phone, MessageCircle, ArrowRight, Star, Shield, Crown } from 'lucide-react';

const VipEscortsPage = ({ siteUrl }) => {
  const location = useLocation();
  const pageUrl = `${siteUrl}${location.pathname}`;
  const pageTitle = "VIP Escorts in Udaipur | Exclusive High-Class Call Girls";
  const pageDescription = "Indulge in luxury with our exclusive VIP escorts in Udaipur. Our high-class call girls offer sophistication and premium companionship for discerning clients. Book your VIP experience.";
  const keywords = "vip escorts udaipur, vip call girls udaipur, udaipur vip escorts, exclusive escorts, luxury call girls, high-class escorts udaipur, premium escorts, Escort Service Udaipur, udaipur escorts, call girls udaipur";
  const heroImage = "/assets/q1w2e3r4t5y6u7i8o9p0.webp";

  const siteName = "Escort Service Udaipur";
  const whatsappNumber = "+919549032117";
  const whatsappMessage = `Hello ${siteName}, I'm interested in your VIP escorts in Udaipur.`;
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:${whatsappNumber}`;

  const escortsData = [
    { name: 'Isabelle', age: 26, image: "/assets/q1w2e3r4t5y6u7i8o9p0.webp", description: "Isabelle, a top-tier VIP escort in Udaipur, offers luxury companionship for discerning gentlemen." },
    { name: 'Sophia', age: 23, image: "/assets/z1x2c3v4b5n6m7l8k9j0.webp", description: "Sophia is an elite VIP call girl in Udaipur, known for her sophistication, beauty, and engaging personality." },
    { name: 'Chloe', age: 28, image: "/assets/78f05d0ea1287e2187bddab4bf36da05.webp", description: "Chloe provides an exclusive VIP escort experience in Udaipur, perfect for high-profile events and private meetings." },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "VIP Escort Service",
    "provider": {
      "@type": "Organization",
      "name": "Escort Service Udaipur",
      "url": "https://escortserviceudaipur.com/vip-escorts-udaipur",
      "logo": "/logo.svg",
      "telephone": whatsappNumber
    },
    "areaServed": {
      "@type": "City",
      "name": "Udaipur"
    },
    "name": "VIP Escorts Udaipur",
    "description": "Exclusive VIP escorts and high-class call girls in Udaipur for luxury companionship and elite events.",
    "offers": {
      "@type": "Offer",
      "category": "VIP Escort"
    },
    "additionalType": "https://schema.org/AdultEntertainment"
  };

  return (
    <div className="pt-16 lg:pt-20">
      <MetaUpdater
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        path={pageUrl}
        schema={[schemaData]}
        imageUrl={heroImage}
      />
      <section 
        className="relative py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/837d685b3920ff9f05e118439810a423.webp')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Exclusive <span className="gradient-text">VIP Escorts</span> in Udaipur
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8"
          >
            Indulge in the pinnacle of luxury companionship with our elite VIP call girls in Udaipur. Experience sophistication, beauty, and unparalleled service with our exclusive VIP escorts.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href={callLink}>
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"><Phone className="mr-2 h-5 w-5" /> Call VIP Escort</Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp VIP Call Girl</Button>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Our Elite <span className="gradient-text">Udaipur VIP Call Girls</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Our VIP escorts in Udaipur are meticulously selected for their elegance, intelligence, and ability to provide an exceptional high-class companionship experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {escortsData.map((escort, index) => (
              <motion.div
                key={escort.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group"
              >
                <div className="relative h-80 overflow-hidden">
                  <OptimizedImage src={escort.image} alt={`${escort.name} - VIP Escort in Udaipur`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
                    <h3 className="text-xl font-semibold text-white">{escort.name}, {escort.age}</h3>
                    <p className="text-sm text-pink-300">VIP Call Girl</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 h-16 line-clamp-3">{escort.description}</p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white">
                      Book {escort.name} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: escortsData.length * 0.1 }}
              className="bg-pink-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group p-6 flex flex-col items-center justify-center text-center"
            >
              <Crown className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">More VIP Escorts Available</h3>
              <p className="text-gray-600 text-sm mb-4">Our portfolio includes a wide range of elite VIP call girls in Udaipur. Contact us for a personalized selection of escorts.</p>
              <Link to="/gallery">
                <Button variant="outline" className="text-pink-600 border-pink-500 hover:bg-pink-100">
                  View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              The {siteName} <span className="gradient-text">VIP Escort Advantage</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <OptimizedImage src="/assets/8f28a59cf2927c79dd898aa450b07891.webp" alt="Luxurious VIP escort setting in Udaipur" className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-video" />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Choosing a VIP escort from {siteName} in Udaipur means opting for an unparalleled level of luxury, discretion, and personalized service. Our VIP call girls are more than just beautiful; they are intelligent, articulate, and possess the poise to accompany you to any high-class event or provide engaging private companionship.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700"><Shield className="w-5 h-5 mr-3 text-pink-500" />Absolute Confidentiality for VIP Clients</li>
                <li className="flex items-center text-gray-700"><Star className="w-5 h-5 mr-3 text-pink-500" />Handpicked, Verified Elite Call Girls</li>
                <li className="flex items-center text-gray-700"><Crown className="w-5 h-5 mr-3 text-pink-500" />Tailored Experiences for Discerning Tastes</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Elevate your experience with a VIP escort in Udaipur. Explore our exclusive <Link to="/gallery" className="text-pink-600 hover:underline">gallery</Link> or <Link to="/contact" className="text-pink-600 hover:underline">contact us</Link> for a bespoke booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Book Your <span className="gradient-text">Exclusive VIP Escort in Udaipur</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our dedicated concierge is ready to assist you in selecting the perfect VIP call girl for your needs. Contact us 24/7 for discreet and professional booking of our Udaipur escorts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={callLink}>
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"><Phone className="mr-2 h-5 w-5" /> Call for VIP Escorts</Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp for VIP Call Girls</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VipEscortsPage;