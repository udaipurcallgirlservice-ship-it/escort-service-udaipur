import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';
import MetaUpdater from '@/components/seo/MetaUpdater';
import { Phone, MessageCircle, Star, CheckCircle, Shield, Eye, Home, ArrowRight } from 'lucide-react';
import FAQSection from '@/components/home/FAQSection.jsx'; 
import CTASection from '@/components/home/CTASection.jsx';
import PageHero from '@/components/layout/PageHero.jsx';

const HousewifeEscortsPage = ({ siteUrl }) => {
  const location = useLocation();
  const pageUrl = `${siteUrl}${location.pathname}`;
  const pageTitle = "Udaipur Housewife Escorts | Mature & Caring Call Girls";
  const pageDescription = "Discover genuine warmth with our housewife escorts in Udaipur. Our caring and experienced call girls offer a comforting and intimate experience. Book discreetly.";
  const keywords = "housewife escorts udaipur, mature call girls udaipur, udaipur housewife escorts, experienced escorts, comforting call girls, discreet housewife escorts, Escort Service Udaipur, udaipur escorts, call girls udaipur";
  
  const whatsappNumber = "+919549032117";
  const whatsappMessage = "Hello Escort Service Udaipur, I'm interested in booking a Housewife Escort. Can you share more details?";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:${whatsappNumber}`;
  const heroBackgroundImage = "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/142e391bf63ee9d51f4d9b5d11f72f1b.jpg";

  const housewifeEscorts = [
    { name: 'Priya Sharma', age: 32, imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/050c75844030c77778d1e279506c1d13.jpg", description: "Priya, an experienced housewife escort in Udaipur, offers a warm, comforting, and deeply intimate companionship. She's perfect for those seeking a genuine connection and a caring call girl.", rating: "4.8" },
    { name: 'Anita Singh', age: 35, imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/bc62af5f712a80d3cdfa63444ed6be7b.jpg", description: "Anita provides a mature and understanding call girl experience in Udaipur. She excels at creating a relaxing and sensual atmosphere for her clients. A top choice for a housewife escort.", rating: "4.9" },
    { name: 'Sunita Verma', age: 30, imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/c08eda60c560a44abccf75462f5a9772.jpg", description: "Sunita, a charming housewife escort, is known for her friendly nature and her remarkable ability to make you feel completely at ease. Your ideal housewife call girl in Udaipur.", rating: "4.7" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Housewife Escorts", "item": pageUrl }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Housewife Escort Service",
    "name": "Discreet Housewife Escorts in Udaipur",
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
        "name": "Housewife Escort Services in Udaipur",
        "itemListElement": housewifeEscorts.map(escort => ({
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": `${escort.name} - Housewife Escort`,
                "description": escort.description
            }
        }))
    },
     "image": housewifeEscorts.map(e => e.imageSrc),
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": whatsappLink,
        "actionPlatform": ["https://schema.org/DesktopWebPlatform", "https://schema.org/IOSPlatform", "https://schema.org/AndroidPlatform"]
      },
      "name": "Book a Housewife Escort"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Housewife Escort Service in Udaipur",
    "image": housewifeEscorts.map(e => e.imageSrc),
    "description": pageDescription,
    "url": pageUrl,
    "brand": { "@type": "Brand", "name": "Escort Service Udaipur" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "12000",
      "highPrice": "60000",
      "offerCount": housewifeEscorts.length
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "29"
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      <MetaUpdater title={pageTitle} description={pageDescription} keywords={keywords} path={pageUrl} schema={[breadcrumbSchema, serviceSchema, productSchema]} imageUrl={heroBackgroundImage} />
      
      <PageHero 
        title={<>Warm & Mature <span className="text-yellow-300">Housewife Escorts</span> in Udaipur</>}
        subtitle="Experience genuine warmth and experienced companionship with our discreet housewife call girls in Udaipur. Perfect for a comforting, intimate, and understanding connection."
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
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"><Phone className="mr-2 h-5 w-5" /> Call Housewife Escort</Button>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Housewife Call Girl</Button>
                </a>
            </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Home className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Our Caring & Experienced <span className="gradient-text">Udaipur Housewife Call Girls</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our <Link to="/escorts/housewife" className="text-pink-600 hover:underline">Udaipur housewife escorts</Link> offer a unique blend of maturity, warmth, and understanding. Each <strong className="font-semibold">housewife call girl</strong> is dedicated to providing a truly comforting and memorable experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {housewifeEscorts.map((escort, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 card-hover group border border-green-100"
              >
                <div className="relative overflow-hidden h-80">
                  <OptimizedImage src={escort.imageSrc} alt={`${escort.name}, mature housewife escort in Udaipur`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-md">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-800">{escort.rating}</span>
                  </div>
                   <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm">
                    {escort.age} Years | Housewife Call Girl
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{escort.name} - <span className="text-green-600">Mature Housewife Escort</span></h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3 h-16">{escort.description}</p>
                   <Link to="/gallery" aria-label={`View full profile and more photos of ${escort.name}`}>
                    <Button size="sm" variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 w-full justify-start">
                      <Eye className="mr-2 w-4 h-4" /> View Profile & Photos
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
             <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: housewifeEscorts.length * 0.1 }}
              className="bg-pink-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group p-6 flex flex-col items-center justify-center text-center"
            >
              <Home className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">More Housewife Escorts</h3>
              <p className="text-gray-600 text-sm mb-4">Our selection of housewife call girls in Udaipur offers varied personalities. Contact us to find a companion that meets your desires.</p>
              <Link to="/gallery">
                <Button variant="outline" className="text-pink-600 border-pink-500 hover:bg-pink-100">
                  View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
           <div className="text-center mt-16">
            <Link to="/gallery">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Meet All Housewife Escorts in Udaipur
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              The Unique Appeal of <span className="gradient-text">Udaipur Housewife Escorts</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              For those seeking a more profound connection, our <strong className="font-semibold">Udaipur housewife escorts</strong> provide an unparalleled level of emotional intimacy and understanding. These <strong className="font-semibold">mature call girls</strong> offer more than just physical beauty.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
               <OptimizedImage src="https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/706e08f12f738fdbcff60df1bf1a9ed0.jpg" alt="Comforting housewife escort from Udaipur providing a caring experience" className="w-full h-auto object-cover aspect-[4/3]"/>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our <Link to="/escorts/housewife" className="text-pink-600 hover:underline">housewife escorts in Udaipur</Link> offer a different kind of allure. They bring maturity, life experience, and a genuine warmth that many find incredibly comforting and appealing. A <strong className="text-gray-800">housewife call girl</strong> often provides a more relaxed, no-pressure atmosphere, perfect for those seeking genuine companionship alongside sensual pleasure. These <strong className="font-semibold">experienced escorts in Udaipur</strong> know how to make you feel special.
              </p>
              <ul className="space-y-3">
                {[
                  "Genuine and Warm Companionship",
                  "Mature Understanding and Empathy",
                  "Relaxed and Comfortable Atmosphere",
                  "Experienced in Fulfilling Desires Sensitively",
                  "Discreet and Respectful Interactions Guaranteed",
                  "Perfect for Emotional Connection and Intimacy"
                ].map(item => (
                  <li key={item} className="flex items-start text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you're seeking a partner who is not just beautiful but also emotionally intelligent and capable of deep conversation, our <strong className="text-gray-800">Udaipur housewife call girls</strong> are an excellent choice. They create a space of trust, intimacy, and unforgettable moments. Choose a <strong className="font-semibold">comforting call girl in Udaipur</strong> for a truly special experience.
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

export default HousewifeEscortsPage;