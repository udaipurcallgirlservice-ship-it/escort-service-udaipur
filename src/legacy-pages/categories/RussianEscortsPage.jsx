import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';
import MetaUpdater from '@/components/seo/MetaUpdater';
import { Phone, MessageCircle, ArrowRight, Star, Shield, Heart } from 'lucide-react';

const RussianEscortsPage = ({ siteUrl }) => {
  const location = useLocation();
  const pageUrl = `${siteUrl}${location.pathname}`;
  const pageTitle = "Exotic Russian Escorts in Udaipur | Elite Russian Call Girls";
  const pageDescription = "Experience exotic companionship with elite Russian escorts in Udaipur. Our captivating Russian call girls offer beauty, passion & sophistication. Book now for an unforgettable encounter.";
  const keywords = "russian escorts udaipur, udaipur russian call girls, russian call girl, elite russian escorts, premium russian escorts, udaipur escorts, call girls udaipur, Escort Service Udaipur";
  const heroImage = "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/eb90df07579e0f07108d25f5d70afb19.jpg";
  
  const siteName = "Escort Service Udaipur";
  const whatsappNumber = "+919549032117";
  const whatsappMessage = `Hello ${siteName}, I'm interested in your Russian escorts in Udaipur.`;
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:${whatsappNumber}`;

  const escortsData = [
    { name: 'Alina', age: 24, image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/eb90df07579e0f07108d25f5d70afb19.jpg", description: "Alina, an exotic Russian call girl, offers passionate escort services in Udaipur. Perfect for an adventurous night." },
    { name: 'Katya', age: 22, image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/4f312bb5388d30cb6c447e63eb1561ec.jpg", description: "Katya brings her Russian charm to Udaipur. This escort guarantees an unforgettable and sensual experience." },
    { name: 'Svetlana', age: 25, image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/0c75ce28964755affc6ce60a0e2de02c.jpg", description: "Svetlana is a sophisticated Russian escort in Udaipur, known for her elegance and captivating companionship." },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Escort Service",
    "provider": {
      "@type": "Organization",
      "name": "Escort Service Udaipur",
      "url": "https://escortserviceudaipur.com/russian-escorts-udaipur",
      "logo": "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/df35c36717dc1b1000ac06911bfe1a65.png",
      "telephone": whatsappNumber
    },
    "areaServed": {
      "@type": "City",
      "name": "Udaipur"
    },
    "name": "Russian Escorts Udaipur",
    "description": "Elite Russian escorts and call girls in Udaipur offering premium companionship services. Book sophisticated Russian escorts for an unforgettable experience.",
    "offers": {
      "@type": "Offer",
      "category": "Russian Escort"
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
        style={{ backgroundImage: "url('https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/837d685b3920ff9f05e118439810a423.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Exquisite <span className="gradient-text">Russian Escorts</span> in Udaipur
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8"
          >
            Discover the allure of our elite Russian call girls in Udaipur. Experience unparalleled passion, beauty, and sophistication with our handpicked Russian escorts. Book your unforgettable encounter today.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href={callLink}>
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"><Phone className="mr-2 h-5 w-5" /> Call Russian Escort</Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Russian Call Girl</Button>
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
              Meet Our <span className="gradient-text">Udaipur Russian Call Girls</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Our Russian escorts in Udaipur are selected for their beauty, intelligence, and ability to provide captivating companionship. Each Russian call girl offers a unique and memorable experience.
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
                  <OptimizedImage src={escort.image} alt={`${escort.name} - Russian Escort in Udaipur`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
                    <h3 className="text-xl font-semibold text-white">{escort.name}, {escort.age}</h3>
                    <p className="text-sm text-pink-300">Russian Call Girl</p>
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
              <Heart className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Many More Russian Escorts</h3>
              <p className="text-gray-600 text-sm mb-4">We have a wider selection of stunning Russian call girls available. Contact us to find your perfect match among our Udaipur escorts.</p>
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
              Why Choose Our <span className="gradient-text">Russian Escorts in Udaipur?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <OptimizedImage src="https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/1d2c3b4a5e6f7g8h9i0j.jpg" alt="Elegant Russian escort in Udaipur" className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-video" />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At {siteName}, we pride ourselves on offering an exclusive selection of genuine Russian escorts in Udaipur. Our Russian call girls are known for their breathtaking beauty, charming personalities, and an innate ability to make you feel special. They are perfect companions for any occasion, whether it's an intimate evening or a high-profile social event.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700"><Shield className="w-5 h-5 mr-3 text-pink-500" />Absolute Discretion & Privacy Assured</li>
                <li className="flex items-center text-gray-700"><Star className="w-5 h-5 mr-3 text-pink-500" />Verified, High-Class Russian Call Girls</li>
                <li className="flex items-center text-gray-700"><Heart className="w-5 h-5 mr-3 text-pink-500" />Passionate and Unforgettable Experiences</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Booking a Russian escort through our Udaipur service means choosing quality, reliability, and an enchanting experience. Explore our <Link to="/gallery" className="text-pink-600 hover:underline">gallery</Link> or <Link to="/contact" className="text-pink-600 hover:underline">contact us</Link> today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Ready for an Authentic <span className="gradient-text">Russian Escort Experience in Udaipur?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our friendly team is available 24/7 to assist you in finding the perfect Russian call girl. Contact us now for a discreet and prompt booking of your preferred Udaipur escort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={callLink}>
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"><Phone className="mr-2 h-5 w-5" /> Call for Russian Escorts</Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp for Call Girls</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RussianEscortsPage;