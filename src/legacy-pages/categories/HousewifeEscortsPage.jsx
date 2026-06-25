import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';
import MetaUpdater from '@/components/seo/MetaUpdater';
import { Phone, MessageCircle, ArrowRight, Users, Shield, Heart } from 'lucide-react';

const HousewifeEscortsPage = ({ siteUrl }) => {
  const location = useLocation();
  const pageUrl = `${siteUrl}${location.pathname}`;
  const pageTitle = "Udaipur Housewife Escorts | Mature & Caring Call Girls";
  const pageDescription = "Discover genuine warmth with our housewife escorts in Udaipur. Our caring and experienced call girls offer a comforting and intimate experience. Book discreetly.";
  const keywords = "housewife escorts udaipur, mature call girls udaipur, udaipur housewife escorts, experienced escorts, comforting call girls, discreet housewife escorts, Escort Service Udaipur, udaipur escorts, call girls udaipur";
  const heroImage = "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/a1b2c3d4e5f6g7h8i9j0.jpg";

  const siteName = "Escort Service Udaipur";
  const whatsappNumber = "+919549032117";
  const whatsappMessage = `Hello ${siteName}, I'm interested in your housewife escorts in Udaipur.`;
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:${whatsappNumber}`;

  const escortsData = [
    { name: 'Sunita', age: 32, image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/a1b2c3d4e5f6g7h8i9j0.jpg", description: "Sunita, a mature and caring housewife escort in Udaipur, offers a warm and genuine companionship experience." },
    { name: 'Rani', age: 29, image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/0a9b8c7d6e5f4g3h2i1j.jpg", description: "Rani provides a comforting and discreet escort service in Udaipur. Perfect for those seeking an understanding call girl." },
    { name: 'Geeta', age: 35, image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/1a2b3c4d5e6f7g8h9i0.jpg", description: "Geeta is an experienced housewife escort in Udaipur, known for her friendly nature and ability to create a relaxed atmosphere." },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Escort Service",
    "provider": {
      "@type": "Organization",
      "name": "Escort Service Udaipur",
      "url": "https://escortserviceudaipur.com/housewife-escorts-udaipur",
      "logo": "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/df35c36717dc1b1000ac06911bfe1a65.png",
      "telephone": whatsappNumber
    },
    "areaServed": {
      "@type": "City",
      "name": "Udaipur"
    },
    "name": "Housewife Escorts Udaipur",
    "description": "Mature and discreet housewife escorts and call girls in Udaipur offering warm companionship and sensual experiences.",
    "offers": {
      "@type": "Offer",
      "category": "Housewife Escort"
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
            Warm & Discreet <span className="gradient-text">Housewife Escorts</span> in Udaipur
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8"
          >
            Experience genuine connection and mature companionship with our discreet housewife call girls in Udaipur. Our understanding and caring escorts offer a comforting and sensual experience.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href={callLink}>
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"><Phone className="mr-2 h-5 w-5" /> Call Housewife Escort</Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Housewife Call Girl</Button>
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
              Our Understanding <span className="gradient-text">Udaipur Housewife Call Girls</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Our housewife escorts in Udaipur are chosen for their warmth, maturity, and ability to provide a genuine and comforting experience. Each call girl offers a unique approach to companionship.
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
                  <OptimizedImage src={escort.image} alt={`${escort.name} - Housewife Escort in Udaipur`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
                    <h3 className="text-xl font-semibold text-white">{escort.name}, {escort.age}</h3>
                    <p className="text-sm text-pink-300">Housewife Call Girl</p>
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
              <Users className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">More Housewife Escorts</h3>
              <p className="text-gray-600 text-sm mb-4">Our selection of housewife call girls in Udaipur offers varied personalities. Contact us to find a companion that meets your desires.</p>
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
              Why Choose Our <span className="gradient-text">Housewife Escorts in Udaipur?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <OptimizedImage src="https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/0j9i8h7g6f5e4d3c2b1a.jpg" alt="Comforting housewife escort in Udaipur" className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-video" />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our {siteName} agency understands the need for genuine, mature companionship. Our housewife escorts in Udaipur provide a unique blend of warmth, understanding, and sensual pleasure. They are ideal for gentlemen seeking a discreet, no-strings-attached relationship with a caring and experienced call girl.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700"><Shield className="w-5 h-5 mr-3 text-pink-500" />Complete Discretion and Confidentiality</li>
                <li className="flex items-center text-gray-700"><Users className="w-5 h-5 mr-3 text-pink-500" />Mature, Understanding, and Verified Call Girls</li>
                <li className="flex items-center text-gray-700"><Heart className="w-5 h-5 mr-3 text-pink-500" />Comforting and Genuine Escort Experience</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Find the perfect housewife escort in Udaipur to share your time with. Browse our <Link to="/gallery" className="text-pink-600 hover:underline">gallery</Link> or <Link to="/contact" className="text-pink-600 hover:underline">contact us</Link> for personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Connect with a Caring <span className="gradient-text">Housewife Call Girl in Udaipur</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready for a warm and sensual escort experience? Our team is here to help you book the ideal housewife escort in Udaipur. Call or WhatsApp us for discreet service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={callLink}>
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"><Phone className="mr-2 h-5 w-5" /> Call for Housewife Escorts</Button>
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

export default HousewifeEscortsPage;