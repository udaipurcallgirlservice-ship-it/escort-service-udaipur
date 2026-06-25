import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';
import MetaUpdater from '@/components/seo/MetaUpdater';
import { Phone, MessageCircle, Star, CheckCircle, Eye, Camera, ArrowRight, Shield } from 'lucide-react';
import FAQSection from '@/components/home/FAQSection.jsx'; 
import CTASection from '@/components/home/CTASection.jsx';
import PageHero from '@/components/layout/PageHero';

const ModelEscortsPage = ({ siteUrl }) => {
  const location = useLocation();
  const pageUrl = `${siteUrl}${location.pathname}`;
  const pageTitle = "Udaipur Model Escorts | Stunning & Glamorous Call Girls";
  const pageDescription = "Meet breathtaking model escorts in Udaipur. Our call girls combine beauty, elegance, and sophistication, perfect for high-class events and unforgettable companionship.";
  const keywords = "model escorts udaipur, model call girls udaipur, udaipur model escorts, fashion escorts, glamorous call girls, Escort Service Udaipur";
  
  const whatsappNumber = "+919549032117";
  const whatsappMessage = "Hello, I'm interested in booking a Model Escort from escortserviceudaipur.com";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:${whatsappNumber}`;
  const heroBackgroundImage = "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/3a68fde96c4e521b54758e6cb966a2bc.jpg";

  const modelEscorts = [
    { name: 'Adriana', age: 24, image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/c92f7a669fbdfa70727357c83c94fd9d.jpg", description: "Adriana, a stunning model escort in Udaipur, embodies glamour and sophistication. Perfect for high-profile events and exclusive dates.", rating: "5.0" },
    { name: 'Giselle', age: 26, image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/eb90df07579e0f07108d25f5d70afb19.jpg", description: "Giselle offers an elite model call girl experience in Udaipur, combining breathtaking beauty with an intelligent and engaging personality.", rating: "4.9" },
    { name: 'Kendall', age: 22, image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/07ac9b2fc66d0ea6601d9cb9ff3c41a1.jpg", description: "Kendall, a chic model escort, brings runway elegance to your companionship needs in Udaipur. Ideal for fashion-forward clients.", rating: "4.8" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Model Escorts", "item": pageUrl }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Model Escort Service",
    "name": "Glamorous Model Escorts in Udaipur",
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
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": whatsappLink,
        "actionPlatform": ["https://schema.org/DesktopWebPlatform", "https://schema.org/IOSPlatform", "https://schema.org/AndroidPlatform"]
      },
      "name": "Book a Model Escort"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Model Escort Service in Udaipur",
    "image": modelEscorts.map(e => e.image),
    "description": pageDescription,
    "url": pageUrl,
    "brand": {
      "@type": "Brand",
      "name": "Escort Service Udaipur"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "20000",
      "highPrice": "100000",
      "offerCount": modelEscorts.length,
      "offers": modelEscorts.map(escort => ({
        "@type": "Offer",
        "url": pageUrl,
        "name": `${escort.name} - Model Escort`,
        "priceCurrency": "INR",
        "category": "Model Escort"
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "35"
    },
    "review": [
      {
        "@type": "Review",
        "author": {"@type": "Person", "name": "Rohan V."},
        "reviewRating": {"@type": "Rating", "ratingValue": "5"},
        "reviewBody": "Absolutely stunning and professional. The model escort I met was the highlight of my trip to Udaipur."
      }
    ]
  };

  return (
    <div className="pt-16 lg:pt-20">
      <MetaUpdater 
        title={pageTitle} 
        description={pageDescription} 
        keywords={keywords} 
        path={pageUrl} 
        schema={[breadcrumbSchema, productSchema, serviceSchema]}
        imageUrl={heroBackgroundImage}
      />
      
      <PageHero 
        title={<>Glamorous <span className="gradient-text">Model Escorts</span> in Udaipur</>}
        subtitle="Experience unmatched beauty and sophistication with our elite model call girls in Udaipur. Perfect for those who appreciate the finer things in life."
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
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"><Phone className="mr-2 h-5 w-5" /> Call Model Escort</Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Model Call Girl</Button>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Camera className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Our Stunning & Sophisticated <span className="gradient-text">Model Call Girls</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our <Link to="/escorts/model" className="text-pink-600 hover:underline">model escorts in Udaipur</Link> are the epitome of beauty, grace, and style, ready to make any occasion extraordinary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modelEscorts.map((escort, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 card-hover group border border-blue-100"
              >
                <div className="relative overflow-hidden h-80">
                  <OptimizedImage
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt={`${escort.name} - Model Escort in Udaipur`}
                    src={escort.image} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-md">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-800">{escort.rating}</span>
                  </div>
                   <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm">
                    {escort.age} Years | Model Call Girl
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{escort.name} - <span className="text-blue-600">Glamorous Model Escort</span></h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3 h-16">{escort.description}</p>
                   <Link to="/gallery" aria-label={`View full profile and more photos of ${escort.name}`}>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 w-full justify-start">
                      <Eye className="mr-2 w-4 h-4" /> View Profile & Photos
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
             <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: modelEscorts.length * 0.1 }}
              className="bg-pink-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group p-6 flex flex-col items-center justify-center text-center"
            >
              <Camera className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">More Model Escorts</h3>
              <p className="text-gray-600 text-sm mb-4">Our portfolio of model call girls in Udaipur is extensive. Contact us to find the perfect high-fashion companion.</p>
              <Link to="/gallery">
                <Button variant="outline" className="text-pink-600 border-pink-500 hover:bg-pink-100">
                  View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
           <div className="text-center mt-16">
            <Link to="/gallery">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                See All Model Escorts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              The Allure of Our <span className="gradient-text">Udaipur Model Escorts</span>
            </h2>
             <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our <strong className="font-semibold">model escorts in Udaipur</strong> are the definition of glamour and sophistication, perfect for clients who demand the very best in beauty and style.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage src="https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/7f80a896f8c1edb01f1f062e1aff5b25.jpg" alt="Glamorous model escort in Udaipur" className="w-full h-auto object-cover aspect-[4/3]"/>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our <Link to="/escorts/model" className="text-pink-600 hover:underline">model escorts in Udaipur</Link> are the definition of glamour and sophistication. These <strong className="text-gray-800">model call girls</strong> are not only stunningly beautiful but also possess an innate sense of style and poise that makes them stand out in any crowd.
              </p>
              <ul className="space-y-3">
                {[
                  "Breathtaking Beauty and Runway Looks",
                  "Highly Fashionable and Stylish",
                  "Sophisticated and Poised Demeanor",
                  "Perfect for High-Class Social Events and Galas",
                  "Intelligent and Engaging Conversationalists"
                ].map(item => (
                  <li key={item} className="flex items-start text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ideal for clients who appreciate beauty, elegance, and a touch of stardom, our <strong className="text-gray-800">Udaipur model escorts</strong> ensure an unforgettable, high-class companionship experience.
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

export default ModelEscortsPage;