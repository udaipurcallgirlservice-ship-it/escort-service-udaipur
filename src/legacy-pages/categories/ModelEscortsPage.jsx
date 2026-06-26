import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';
import MetaUpdater from '@/components/seo/MetaUpdater';
import { Phone, MessageCircle, ArrowRight, Camera, Shield, Gem } from 'lucide-react';

const ModelEscortsPage = ({ siteUrl }) => {
  const location = useLocation();
  const pageUrl = `${siteUrl}${location.pathname}`;
  const pageTitle = "Udaipur Model Escorts | Stunning & Glamorous Call Girls";
  const pageDescription = "Meet breathtaking model escorts in Udaipur. Our call girls combine beauty, elegance, and sophistication, perfect for high-class events and unforgettable companionship.";
  const keywords = "model escorts udaipur, model call girls udaipur, udaipur model escorts, fashion escorts, glamorous call girls, Escort Service Udaipur";
  const heroImage = "/assets/7f80a896f8c1edb01f1f062e1aff5b25.webp";

  const siteName = "Escort Service Udaipur";
  const whatsappNumber = "+919549032117";
  const whatsappMessage = `Hello ${siteName}, I'm interested in your model escorts in Udaipur.`;
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:${whatsappNumber}`;

  const escortsData = [
    { name: 'Ananya', age: 22, image: "/assets/7f80a896f8c1edb01f1f062e1aff5b25.webp", description: "Ananya, a stunning model escort in Udaipur, brings glamour and sophistication to every encounter." },
    { name: 'Zara', age: 25, image: "/assets/8cb334f6de6d4f1b8c3ad1e60441b5a9.webp", description: "Zara is a high-fashion model call girl in Udaipur, perfect for upscale events and elite companionship." },
    { name: 'Tara', age: 21, image: "/assets/c92f7a669fbdfa70727357c83c94fd9d.webp", description: "Tara, a charismatic model escort in Udaipur, guarantees a memorable and glamorous call girl experience." },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Model Escort Service",
    "provider": {
      "@type": "Organization",
      "name": "Escort Service Udaipur",
      "url": "https://escortserviceudaipur.com/model-escorts-udaipur",
      "logo": "/logo.svg",
      "telephone": whatsappNumber
    },
    "areaServed": {
      "@type": "City",
      "name": "Udaipur"
    },
    "name": "Model Escorts Udaipur",
    "description": "Stunning model escorts and glamorous call girls in Udaipur offering elite companionship for upscale events.",
    "offers": {
      "@type": "Offer",
      "category": "Model Escort"
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
            Glamorous <span className="gradient-text">Model Escorts</span> in Udaipur
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8"
          >
            Step into a world of glamour with our stunning model call girls in Udaipur. Our elite model escorts offer beauty, sophistication, and charisma for an unforgettable experience.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href={callLink}>
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"><Phone className="mr-2 h-5 w-5" /> Call Model Escort</Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Model Call Girl</Button>
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
              Our Stunning <span className="gradient-text">Udaipur Model Call Girls</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Our model escorts in Udaipur are handpicked for their exceptional beauty, grace, and captivating personalities, perfect for making a statement at any event or for private elite companionship.
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
                  <OptimizedImage src={escort.image} alt={`${escort.name} - Model Escort in Udaipur`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
                    <h3 className="text-xl font-semibold text-white">{escort.name}, {escort.age}</h3>
                    <p className="text-sm text-pink-300">Model Call Girl</p>
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
              <Gem className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Explore More Model Escorts</h3>
              <p className="text-gray-600 text-sm mb-4">Our portfolio features a wide array of glamorous model call girls in Udaipur. Reach out to find your perfect escort match.</p>
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
              Why Choose a <span className="gradient-text">Model Escort in Udaipur from Us?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
               <OptimizedImage src="/assets/eb90df07579e0f07108d25f5d70afb19.webp" alt="Glamorous model escort in Udaipur" className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-video" />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At {siteName}, our model escorts in Udaipur represent the epitome of beauty, style, and sophistication. These call girls are not just visually stunning; they are also intelligent, articulate, and possess an undeniable charisma that lights up any room. Perfect for high-profile social gatherings, corporate events, or an exclusive private rendezvous.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700"><Shield className="w-5 h-5 mr-3 text-pink-500" />Strict Confidentiality and Discretion</li>
                <li className="flex items-center text-gray-700"><Camera className="w-5 h-5 mr-3 text-pink-500" />Photogenic and Verified Model Call Girls</li>
                <li className="flex items-center text-gray-700"><Gem className="w-5 h-5 mr-3 text-pink-500" />Unforgettable Glamorous Escort Experiences</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Make a statement by choosing a model escort in Udaipur. Visit our <Link to="/gallery" className="text-pink-600 hover:underline">gallery</Link> for more or <Link to="/contact" className="text-pink-600 hover:underline">contact us</Link> to book.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Book an Elite <span className="gradient-text">Model Call Girl in Udaipur</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to experience the allure of a model escort? Our team provides 24/7 assistance for booking your preferred model call girl in Udaipur. Contact us for a seamless experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={callLink}>
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"><Phone className="mr-2 h-5 w-5" /> Call for Model Escorts</Button>
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

export default ModelEscortsPage;