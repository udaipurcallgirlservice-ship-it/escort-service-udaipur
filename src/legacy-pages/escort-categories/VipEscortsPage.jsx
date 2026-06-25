import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';
import MetaUpdater from '@/components/seo/MetaUpdater';
import { Phone, MessageCircle, Star, CheckCircle, Shield, Eye, Crown, ArrowRight } from 'lucide-react';
import FAQSection from '@/components/home/FAQSection.jsx'; 
import CTASection from '@/components/home/CTASection.jsx';
import PageHero from '@/components/layout/PageHero.jsx';

const VipEscortsPage = ({ siteUrl }) => {
  const location = useLocation();
  const pageUrl = `${siteUrl}${location.pathname}`;
  const pageTitle = "VIP Escorts in Udaipur | Exclusive High-Class Call Girls";
  const pageDescription = "Indulge in luxury with our exclusive VIP escorts in Udaipur. Our high-class call girls offer sophistication and premium companionship for discerning clients. Book your VIP experience.";
  const keywords = "vip escorts udaipur, vip call girls udaipur, udaipur vip escorts, exclusive escorts, luxury call girls, high-class escorts udaipur, premium escorts, Escort Service Udaipur, udaipur escorts, call girls udaipur";
  
  const whatsappNumber = "+919549032117";
  const whatsappMessage = "Hello Escort Service Udaipur, I'm interested in booking an exclusive VIP Escort. Please provide options.";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:${whatsappNumber}`;
  const heroBackgroundImage = "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/309bca6625b70c9a0dabad703c5a73f8.jpg";

  const vipEscorts = [
    { name: 'Isabelle Moreau', age: 26, imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/af812f93e4188ba2814b81d24bee537d.jpg", description: "Isabelle is the epitome of VIP escort services in Udaipur. Her elegance, intellect, and captivating charm make her the perfect companion for high-profile events and exclusive encounters. A true luxury call girl.", rating: "5.0" },
    { name: 'Sofia Antonelli', age: 28, imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/271c4a5b321457b73d7252029ee8f479.jpg", description: "Sofia, a top-tier VIP call girl, offers an exclusive and luxurious companionship experience in Udaipur. She guarantees unforgettable moments with sophistication and grace. Your premier VIP escort choice.", rating: "5.0" },
    { name: 'Chanel Dubois', age: 25, imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/9078a136cd4a6f7383d21dbdeef0ad80.jpg", description: "Chanel provides premium VIP escort services, ensuring every moment is filled with luxury, pleasure, and utmost discretion. For a truly high-class call girl experience in Udaipur, choose Chanel.", rating: "4.9" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "VIP Escorts", "item": pageUrl }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "VIP Escort Service",
    "name": "Exclusive VIP Escorts in Udaipur",
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
        "name": "VIP Escort Services in Udaipur",
        "itemListElement": vipEscorts.map(escort => ({
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": `${escort.name} - VIP Escort`,
                "description": escort.description
            }
        }))
    },
    "image": vipEscorts.map(e => e.imageSrc),
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": whatsappLink,
        "actionPlatform": ["https://schema.org/DesktopWebPlatform", "https://schema.org/IOSPlatform", "https://schema.org/AndroidPlatform"]
      },
      "name": "Book a VIP Escort"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "VIP Escort Service in Udaipur",
    "image": vipEscorts.map(e => e.imageSrc),
    "description": pageDescription,
    "url": pageUrl,
    "brand": { "@type": "Brand", "name": "Escort Service Udaipur" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "25000",
      "highPrice": "150000",
      "offerCount": vipEscorts.length
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "58"
    }
  };


  return (
    <div className="pt-16 lg:pt-20">
      <MetaUpdater title={pageTitle} description={pageDescription} keywords={keywords} path={pageUrl} schema={[breadcrumbSchema, serviceSchema, productSchema]} imageUrl={heroBackgroundImage} />
      
      <PageHero
        title={<>Exclusive <span className="text-gray-900 bg-yellow-400 px-2 py-1 rounded">VIP Escorts</span> in Udaipur</>}
        subtitle="Experience the pinnacle of luxury companionship with our elite VIP call girls in Udaipur. Sophistication, beauty, and unforgettable moments guaranteed with our high-class escorts."
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
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"><Phone className="mr-2 h-5 w-5" /> Call for VIP Escort</Button>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp VIP Call Girl</Button>
                </a>
            </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Crown className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Our Premier Selection of <span className="gradient-text">Udaipur VIP Call Girls</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Each <Link to="/escorts/vip" className="text-pink-600 hover:underline">VIP escort in Udaipur</Link> in our exclusive collection is meticulously chosen for her exceptional beauty, intellect, and her ability to provide an unparalleled <strong className="font-semibold">luxury call girl</strong> experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vipEscorts.map((escort, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 card-hover group border border-orange-100"
              >
                <div className="relative overflow-hidden h-80">
                  <OptimizedImage src={escort.imageSrc} alt={`${escort.name}, elite VIP escort in Udaipur`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 rounded-full px-3 py-1 flex items-center space-x-1 shadow-md">
                    <Crown className="w-4 h-4" />
                    <span className="text-sm font-medium">VIP Escort</span>
                  </div>
                   <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm">
                    {escort.age} Years | High-Class Call Girl
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{escort.name} - <span className="text-orange-600">Elite VIP Call Girl</span></h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3 h-16">{escort.description}</p>
                   <Link to="/gallery" aria-label={`View full profile and more photos of ${escort.name}`}>
                    <Button size="sm" variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 w-full justify-start">
                      <Eye className="mr-2 w-4 h-4" /> View Profile & Photos
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
             <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: vipEscorts.length * 0.1 }}
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
           <div className="text-center mt-16">
            <Link to="/gallery">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Discover All VIP Escorts in Udaipur
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              The Essence of Our <span className="gradient-text">Udaipur VIP Escort Service</span>
            </h2>
             <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our <strong className="font-semibold">Udaipur VIP escorts</strong> redefine luxury companionship. We cater to an elite clientele seeking perfection, discretion, and an unforgettable <strong className="font-semibold">premium escort</strong> experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage src="https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/461b45219a3b9fce099f5354005b6f0c.jpg" alt="Luxury VIP escort providing an exclusive experience in Udaipur" className="w-full h-auto object-cover aspect-[4/3]"/>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our <Link to="/escorts/vip" className="text-pink-600 hover:underline">VIP escorts in Udaipur</Link> represent the zenith of luxury and sophistication. These <strong className="text-gray-800">VIP call girls</strong> are selected for their exceptional qualities—beauty, intelligence, charm, and discretion—ensuring an experience that is both exclusive and unforgettable. We provide the most <strong className="font-semibold">exclusive escorts in Udaipur</strong>.
              </p>
              <ul className="space-y-3">
                {[
                  "Unmatched Beauty and Elegance",
                  "High Intelligence and Engaging Conversation",
                  "Perfect for High-Profile Social and Corporate Events",
                  "Absolute Discretion and Professionalism",
                  "Tailored Experiences for Discerning Gentlemen",
                  "Access to the Most Sought-After Companions"
                ].map(item => (
                  <li key={item} className="flex items-start text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                When you choose a <strong className="text-gray-800">Udaipur VIP escort</strong> from our service, you're not just booking a companion; you're investing in a premium, memorable experience defined by class, sophistication, and personalized attention. Our <strong className="font-semibold">luxury call girls in Udaipur</strong> are simply the best.
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

export default VipEscortsPage;