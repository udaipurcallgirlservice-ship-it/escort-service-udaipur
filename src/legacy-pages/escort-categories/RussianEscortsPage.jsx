import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';
import MetaUpdater from '@/components/seo/MetaUpdater';
import { Phone, MessageCircle, Star, CheckCircle, Shield, Eye, Globe, ArrowRight } from 'lucide-react';
import FAQSection from '@/components/home/FAQSection.jsx'; 
import CTASection from '@/components/home/CTASection.jsx';
import PageHero from '@/components/layout/PageHero.jsx';

const RussianEscortsPage = ({ siteUrl }) => {
  const location = useLocation();
  const pageUrl = `${siteUrl}${location.pathname}`;
  const pageTitle = "Exotic Russian Escorts in Udaipur | Elite Russian Call Girls";
  const pageDescription = "Experience exotic companionship with elite Russian escorts in Udaipur. Our captivating Russian call girls offer beauty, passion & sophistication. Book now for an unforgettable encounter.";
  const keywords = "russian escorts udaipur, udaipur russian call girls, russian call girl, elite russian escorts, premium russian escorts, udaipur escorts, call girls udaipur, Escort Service Udaipur";
  
  const whatsappNumber = "+919549032117";
  const whatsappMessage = "Hello Escort Service Udaipur, I'm interested in booking a premium Russian Escort. Please provide details.";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:${whatsappNumber}`;
  const heroBackgroundImage = "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/7bd42011ef040a2247301894c6acc37d.jpg";

  const russianEscorts = [
    { name: 'Alina Petrova', age: 24, imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/eee810a7f3944b3607c1f90d46174865.jpg", description: "Alina, an alluring Russian call girl in Udaipur, offers an exotic and passionate escort experience. Her beauty and charm are truly captivating for any gentleman seeking premium companionship.", rating: "4.9" },
    { name: 'Katya Ivanova', age: 22, imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/a6e2097a0ca2177f3910557459503f03.jpg", description: "Katya is a sophisticated Russian escort, celebrated for her grace and her ability to provide engaging, high-class companionship in Udaipur.", rating: "5.0" },
    { name: 'Natalia Popova', age: 25, imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/ea95f0dcf9b887c0af3216c5d11892df.jpg", description: "Natalia, a breathtaking Russian call girl, brings elegance and a spark of adventure to every encounter. Your top choice for a Russian escort in Udaipur.", rating: "4.8" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Russian Escorts", "item": pageUrl }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Russian Escort Service",
    "name": "Elite Russian Escorts in Udaipur",
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
        "name": "Russian Escort Services in Udaipur",
        "itemListElement": russianEscorts.map(escort => ({
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": `${escort.name} - Russian Escort`,
                "description": escort.description
            }
        }))
    },
    "image": russianEscorts.map(e => e.imageSrc),
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": whatsappLink,
        "actionPlatform": ["https://schema.org/DesktopWebPlatform", "https://schema.org/IOSPlatform", "https://schema.org/AndroidPlatform"]
      },
      "name": "Book a Russian Escort"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Russian Escort Service in Udaipur",
    "image": russianEscorts.map(e => e.imageSrc),
    "description": pageDescription,
    "url": pageUrl,
    "brand": { "@type": "Brand", "name": "Escort Service Udaipur" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "18000",
      "highPrice": "90000",
      "offerCount": russianEscorts.length
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "42"
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      <MetaUpdater title={pageTitle} description={pageDescription} keywords={keywords} path={pageUrl} schema={[breadcrumbSchema, serviceSchema, productSchema]} imageUrl={heroBackgroundImage} />
      
      <PageHero
        title={<>Exotic <span className="text-yellow-300">Russian Escorts</span> in Udaipur</>}
        subtitle="Embark on an unforgettable journey with our elite Russian call girls in Udaipur. Experience unparalleled passion, breathtaking beauty, and captivating sophistication with our handpicked Russian escorts."
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
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"><Phone className="mr-2 h-5 w-5" /> Call Russian Escort</Button>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Russian Call Girl</Button>
                </a>
            </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Globe className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Meet Our Enchanting <span className="gradient-text">Udaipur Russian Call Girls</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our exclusive selection of <Link to="/escorts/russian" className="text-pink-600 hover:underline">Russian escorts in Udaipur</Link> are celebrated for their striking beauty, keen intellect, and magnetic personalities. Each <strong className="font-semibold">Russian call girl</strong> promises a unique, premium experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {russianEscorts.map((escort, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 card-hover group border border-pink-100"
              >
                <div className="relative overflow-hidden h-80">
                  <OptimizedImage src={escort.imageSrc} alt={`${escort.name}, beautiful Russian escort in Udaipur`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-md">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-800">{escort.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm">
                    {escort.age} Years | Russian Call Girl
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{escort.name} - <span className="text-pink-600">Premium Russian Escort</span></h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3 h-16">{escort.description}</p>
                  <Link to="/gallery" aria-label={`View full profile and more photos of ${escort.name}`}>
                    <Button size="sm" variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 w-full justify-start">
                      <Eye className="mr-2 w-4 h-4" /> View Profile & Photos
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
             <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: russianEscorts.length * 0.1 }}
              className="bg-pink-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group p-6 flex flex-col items-center justify-center text-center"
            >
              <Globe className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Many More Russian Escorts</h3>
              <p className="text-gray-600 text-sm mb-4">We have a wider selection of stunning Russian call girls available. Contact us to find your perfect match among our Udaipur escorts.</p>
              <Link to="/gallery">
                <Button variant="outline" className="text-pink-600 border-pink-500 hover:bg-pink-100">
                  View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
          <div className="text-center mt-16">
            <Link to="/gallery">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Explore All Russian Escorts in Udaipur
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Why Choose Our <span className="gradient-text">Russian Escort Services in Udaipur?</span>
            </h2>
             <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                When looking for a <strong className="font-semibold">Russian escort in Udaipur</strong>, discerning clients choose us for our commitment to quality, discretion, and authentic experiences. Our <strong className="font-semibold">Russian call girls</strong> are unmatched.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
             <OptimizedImage src="https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/07ac9b2fc66d0ea6601d9cb9ff3c41a1.jpg" alt="Elegant Russian escort providing premium service in Udaipur" className="w-full h-auto object-cover aspect-[4/3]"/>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our <Link to="/escorts/russian" className="text-pink-600 hover:underline">Russian escorts in Udaipur</Link> are more than just beautiful faces; they are intelligent, cultured, and possess an exotic charm that is simply irresistible. Each <strong className="text-gray-800">Russian call girl</strong> is dedicated to providing an unparalleled experience of passion and sophistication. We ensure every <strong className="font-semibold">Udaipur Russian escort</strong> from our agency is verified.
              </p>
              <ul className="space-y-3">
                {[
                  "Authentic Russian Beauty & Unmatched Charm",
                  "Passionate and Adventurous Companionship",
                  "Fluent in English for Engaging Conversations",
                  "Perfect for VIP Events and Private Encounters",
                  "Guaranteed Discretion and Professionalism",
                  "Verified Profiles for Your Peace of Mind"
                ].map(item => (
                  <li key={item} className="flex items-start text-gray-700">
                    <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're looking for a captivating date for a high-profile event or an intimate evening of shared pleasures, our <strong className="text-gray-800">Udaipur Russian escorts</strong> will exceed your expectations. Their natural elegance and sensuality make them the perfect choice for discerning gentlemen seeking a premium <strong className="font-semibold">Russian call girl in Udaipur</strong>.
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

export default RussianEscortsPage;