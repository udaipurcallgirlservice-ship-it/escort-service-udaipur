import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';
import MetaUpdater from '@/components/seo/MetaUpdater';
import { Phone, MessageCircle, Star, CheckCircle, Shield, Eye, UserCheck, ArrowRight } from 'lucide-react';
import FAQSection from '@/components/home/FAQSection.jsx'; 
import CTASection from '@/components/home/CTASection.jsx';
import PageHero from '@/components/layout/PageHero.jsx';

const IndependentEscortsPage = ({ siteUrl }) => {
  const location = useLocation();
  const pageUrl = `${siteUrl}${location.pathname}`;
  const pageTitle = "Independent Escorts in Udaipur | Verified & Authentic Call Girls";
  const pageDescription = "Connect with genuine independent escorts in Udaipur for an authentic, personal experience. Our verified independent call girls offer flexibility, discretion, and unique encounters.";
  const keywords = "independent escorts udaipur, independent call girls udaipur, udaipur independent escorts, verified escorts, personal call girls, authentic escorts udaipur, Escort Service Udaipur, udaipur escorts, call girls udaipur";
  
  const whatsappNumber = "+919549032117";
  const whatsappMessage = "Hello Escort Service Udaipur, I'm interested in booking a verified Independent Escort. What are my options?";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:${whatsappNumber}`;
  const heroBackgroundImage = "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/76fd4fdb191e3021ee81d53f17132191.jpg";

  const independentEscorts = [
    { name: 'Rina Desai', age: 23, imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/020e470be4ba0020d6c2eaee843d5e2b.jpg", description: "Rina is a vibrant and adventurous independent escort in Udaipur, offering a personalized and flexible companionship experience. She's known for her authentic spirit and engaging personality. A top independent call girl.", rating: "4.9" },
    { name: 'Meera Kapoor', age: 25, imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/af874f9c79adf1ef2dc71bf706b21df9.jpg", description: "Meera, an independent call girl, provides genuine and engaging interactions. She's perfect for those seeking an authentic connection and a discreet independent escort in Udaipur.", rating: "4.8" },
    { name: 'Kavya Nair', age: 24, imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/8debf39fae8e2bd18851d63a9b96a8c6.jpg", description: "Kavya is a charming and discreet independent escort in Udaipur, dedicated to making your time memorable and enjoyable. Her personal touch makes her a sought-after independent call girl.", rating: "4.9" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Independent Escorts", "item": pageUrl }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Independent Escort Service",
    "name": "Verified Independent Escorts in Udaipur",
    "description": pageDescription,
    "url": pageUrl,
    "provider": {
      "@type": "Organization",
      "name": "Escort Service Udaipur",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`,
      "telephone": whatsappNumber
    },
    "areaServed": {
      "@type": "City",
      "name": "Udaipur"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Independent Escort Services in Udaipur",
        "itemListElement": independentEscorts.map(escort => ({
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": `${escort.name} - Independent Escort`,
                "description": escort.description
            }
        }))
    },
    "image": independentEscorts.map(e => e.imageSrc),
     "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": whatsappLink,
        "actionPlatform": ["https://schema.org/DesktopWebPlatform", "https://schema.org/IOSPlatform", "https://schema.org/AndroidPlatform"]
      },
      "name": "Book an Independent Escort"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Independent Escort Service in Udaipur",
    "image": independentEscorts.map(e => e.imageSrc),
    "description": pageDescription,
    "url": pageUrl,
    "brand": { "@type": "Brand", "name": "Escort Service Udaipur" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "15000",
      "highPrice": "70000",
      "offerCount": independentEscorts.length
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "38"
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      <MetaUpdater title={pageTitle} description={pageDescription} keywords={keywords} path={pageUrl} schema={[breadcrumbSchema, serviceSchema, productSchema]} imageUrl={heroBackgroundImage} />
      
      <PageHero
        title={<>Authentic <span className="text-yellow-300">Independent Escorts</span> in Udaipur</>}
        subtitle="Connect with genuine and verified independent call girls in Udaipur for a truly personal, flexible, and authentic escort companionship experience."
        imageSrc={heroBackgroundImage}
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
                <a href={callLink}>
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"><Phone className="mr-2 h-5 w-5" /> Call Independent Escort</Button>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Independent Call Girl</Button>
                </a>
            </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <UserCheck className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Our Verified & Charismatic <span className="gradient-text">Udaipur Independent Call Girls</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our <Link to="/escorts/independent" className="text-pink-600 hover:underline">independent escorts in Udaipur</Link> offer a unique, direct, and personal approach. Each <strong className="font-semibold">independent call girl</strong> is verified, ensuring authenticity and your complete satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {independentEscorts.map((escort, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 card-hover group border border-purple-100"
              >
                <div className="relative overflow-hidden h-80">
                   <OptimizedImage src={escort.imageSrc} alt={`${escort.name}, vibrant independent escort in Udaipur`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-md">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-800">{escort.rating}</span>
                  </div>
                   <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm">
                    {escort.age} Years | Independent Call Girl
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{escort.name} - <span className="text-purple-600">Authentic Independent Escort</span></h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3 h-16">{escort.description}</p>
                   <Link to="/gallery" aria-label={`View full profile and more photos of ${escort.name}`}>
                    <Button size="sm" variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 w-full justify-start">
                      <Eye className="mr-2 w-4 h-4" /> View Profile & Photos
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
             <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: independentEscorts.length * 0.1 }}
              className="bg-pink-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group p-6 flex flex-col items-center justify-center text-center"
            >
              <UserCheck className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Find More Independent Escorts</h3>
              <p className="text-gray-600 text-sm mb-4">We have a diverse range of independent call girls in Udaipur. Contact us to discover more options for your ideal escort.</p>
              <Link to="/gallery">
                <Button variant="outline" className="text-pink-600 border-pink-500 hover:bg-pink-100">
                  View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
           <div className="text-center mt-16">
            <Link to="/gallery">
              <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Browse All Independent Escorts in Udaipur
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              The Advantages of Choosing <span className="gradient-text">Udaipur Independent Escorts</span>
            </h2>
             <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Opting for an <strong className="font-semibold">independent escort in Udaipur</strong> means a personalized experience. Our <strong className="font-semibold">verified independent call girls</strong> offer genuine companionship and complete discretion.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
             <div className="rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage src="https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/9afcbb8aa894679dffa96400f0b65d4b.jpg" alt="Friendly independent escort from Udaipur offering personalized service" className="w-full h-auto object-cover aspect-[4/3]"/>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Choosing an <Link to="/escorts/independent" className="text-pink-600 hover:underline">independent escort in Udaipur</Link> often means a more personalized and direct interaction. These <strong className="text-gray-800">independent call girls</strong> manage their own bookings and are known for their genuine personalities and dedication to client satisfaction. You get an <strong className="font-semibold">authentic escort</strong> experience every time.
              </p>
              <ul className="space-y-3">
                {[
                  "Direct Communication and Booking Flexibility",
                  "Genuine and Authentic Personalities",
                  "Flexible Arrangements and Personalized Services",
                  "High Level of Discretion Assured Always",
                  "Verified Profiles for Your Safety and Peace of Mind",
                  "Unique and Memorable Encounters"
                ].map(item => (
                  <li key={item} className="flex items-start text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our platform connects you with carefully vetted <strong className="text-gray-800">Udaipur independent escorts</strong>, ensuring a safe, reliable, and enjoyable experience. Each <strong className="font-semibold">personal call girl</strong> is committed to your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default IndependentEscortsPage;