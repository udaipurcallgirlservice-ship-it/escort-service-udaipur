import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';
import MetaUpdater from '@/components/seo/MetaUpdater';
import { Phone, MessageCircle, ArrowRight, UserCheck, Shield, Sparkles } from 'lucide-react';
import { createBreadcrumbSchema } from '@/lib/schemas';

const IndependentEscortsPage = ({ siteUrl }) => {
  const location = useLocation();
  const pageUrl = `${siteUrl}${location.pathname}`;
  const pageTitle = "Independent Escorts in Udaipur | Verified & Authentic Call Girls";
  const pageDescription = "Connect with genuine independent escorts in Udaipur for an authentic, personal experience. Our verified independent call girls offer flexibility, discretion, and unique encounters.";
  const keywords = "independent escorts udaipur, independent call girls udaipur, udaipur independent escorts, verified escorts, personal call girls, authentic escorts udaipur, Escort Service Udaipur, udaipur escorts, call girls udaipur";
  const heroImage = "/assets/independent-call-girls-udaipur.jpg";

  const siteName = "Escort Service Udaipur";
  const whatsappNumber = "+918000253680";
  const whatsappMessage = `Hello ${siteName}, I'm interested in your independent escorts in Udaipur.`;
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:${whatsappNumber}`;

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: siteUrl },
    { name: "Independent Escorts", item: pageUrl }
  ]);

  const escortsData = [
    { name: 'Meera', age: 27, image: "/assets/independent-call-girls-udaipur.jpg", description: "Meera is a charming independent escort in Udaipur, offering a personalized and genuine call girl experience." },
    { name: 'Riya', age: 24, image: "/assets/beautiful-independent-escort-udaipur.jpg", description: "Riya, a professional independent call girl in Udaipur, provides flexible and delightful escort services." },
    { name: 'Pooja', age: 30, image: "/assets/private-call-girls-udaipur.jpg", description: "Pooja is a verified independent escort in Udaipur, known for her warm personality and professional approach." },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Independent Escort Service",
    "provider": {
      "@type": "Organization",
      "name": "Escort Service Udaipur",
      "url": "https://escortserviceudaipur.com/independent-escorts-udaipur",
      "logo": "/logo.svg",
      "telephone": whatsappNumber
    },
    "areaServed": {
      "@type": "City",
      "name": "Udaipur"
    },
    "name": "Independent Escorts Udaipur",
    "description": "Verified independent escorts and call girls in Udaipur offering personalized and professional companionship services.",
    "offers": {
      "@type": "Offer",
      "category": "Independent Escort"
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
        schema={[schemaData, breadcrumbSchema]}
        imageUrl={heroImage}
      />
      <section 
        className="relative py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/luxury-escort-service-udaipur.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Genuine <span className="gradient-text">Independent Escorts</span> in Udaipur
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8"
          >
            Discover verified and professional independent call girls. Book a premium <strong>independent call girl Udaipur</strong> companion through our trusted <strong>escort service Udaipur</strong> today.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href={callLink}>
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"><Phone className="mr-2 h-5 w-5" /> Call Independent Escort</Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Independent Call Girl</Button>
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
              Meet Our Professional <span className="gradient-text">Udaipur Independent Call Girls</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Our independent escorts in Udaipur are chosen for their professionalism, charm, and ability to provide a truly personalized escort experience.
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
                  <OptimizedImage src={escort.image} alt={`${escort.name} - Independent Escort in Udaipur`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
                    <h3 className="text-xl font-semibold text-white">{escort.name}, {escort.age}</h3>
                    <p className="text-sm text-pink-300">Independent Call Girl</p>
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
              <Sparkles className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Find More Independent Escorts</h3>
              <p className="text-gray-600 text-sm mb-4">We have a diverse range of independent call girls in Udaipur. Contact us to discover more options for your ideal escort.</p>
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
              Benefits of Choosing Our <span className="gradient-text">Independent Escorts in Udaipur</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
               <OptimizedImage src="/assets/beautiful-model-escort-udaipur.jpg" alt="Professional independent escort in Udaipur" className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-video" />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our independent escorts featured by our agency offer a distinct and personalized approach to companionship. Selecting a verified <strong>independent call girl Udaipur</strong> partner ensures a professional, flexible, and genuine service for your hotel stay.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700"><Shield className="w-5 h-5 mr-3 text-pink-500" />Discreet and Secure Escort Bookings via official <strong>escort service Udaipur contact</strong></li>
                <li className="flex items-center text-gray-700"><UserCheck className="w-5 h-5 mr-3 text-pink-500" />Verified and Professional Independent Call Girls</li>
                <li className="flex items-center text-gray-700"><Sparkles className="w-5 h-5 mr-3 text-pink-500" />Personalized and Flexible Escort Experiences</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Connect with an authentic companion from our <strong>Udaipur call girl service</strong> database today. Check out our verified <Link to="/gallery" className="text-pink-600 hover:underline">gallery</Link> or submit a <strong>Udaipur call girl enquiry</strong> for fast booking details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Book a Genuine <span className="gradient-text">Independent Call Girl in Udaipur</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Looking for a truly personal escort experience? Our team will help you find the ideal independent call girl in Udaipur. Contact us 24/7 for easy booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={callLink}>
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"><Phone className="mr-2 h-5 w-5" /> Call for Independent Escorts</Button>
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

export default IndependentEscortsPage;