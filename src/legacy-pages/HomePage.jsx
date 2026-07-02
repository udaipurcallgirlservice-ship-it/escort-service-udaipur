import React from 'react';
import { useLocation } from 'react-router-dom';
import MetaUpdater from '@/components/seo/MetaUpdater';
import HeroSection from '@/components/home/HeroSection';
import AboutIntroSection from '@/components/home/AboutIntroSection';
import ServiceIntroSection from '@/components/home/ServiceIntroSection';
import FeaturedEscortsSection from '@/components/home/FeaturedEscortsSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import GallerySection from '@/components/home/GallerySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import HomeContentSection from '@/components/home/HomeContentSection.jsx';
import LocationGuideSection from '@/components/home/LocationGuideSection.jsx';
import FAQSection, { faqsData } from '@/components/home/FAQSection.jsx';
import RatesTableSection from '@/components/home/RatesTableSection.jsx';
import BlogHighlightSection from '@/components/home/BlogHighlightSection.jsx';
import { getHomePageSchemas } from '@/lib/homePageSchemas.js';
import { createFaqPageSchema } from '@/lib/schemas';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import StatsSection from '@/components/home/StatsSection';
import ServiceHighlightSection from '@/components/home/ServiceHighlightSection';
import KeywordTagsSection from '@/components/home/KeywordTagsSection';

const HomePage = ({ siteUrl }) => {
  const location = useLocation();
  const pageTitle = "Udaipur Call Girl & Premium Escort Service Udaipur from ₹2999";
  const pageDescription = "Book verified Udaipur call girl & premium escort service in Udaipur starting from ₹2999. Get access to VIP call girls, Russian models, and independent companions with Cash on Delivery and 24/7 service. Contact at +91-8000253680.";
  const keywords = "call girl Udaipur, Udaipur call girl, call girl in Udaipur, escort service Udaipur, call girl Udaipur contact number, Udaipur call girl with number, call girl in Udaipur near me, escort service Udaipur contact, Udaipur call girl service, premium call girl in Udaipur, private call girl Udaipur, independent call girl Udaipur, escort service in Udaipur, call girl in Udaipur Lake Pichola, Udaipur call girl Fateh Sagar, escort service Udaipur City Palace, call girl Udaipur hotel service, VIP call girl Udaipur, model call girl in Udaipur, high profile Udaipur call girl, premium escort service Udaipur, call girl Udaipur booking, Udaipur call girl enquiry, escort service Udaipur support, call girl in Udaipur contact";
  const imageUrl = "/assets/premium-escort-service-udaipur.jpg";

  const faqSchema = createFaqPageSchema(faqsData);
  const schemas = [...getHomePageSchemas(siteUrl, pageDescription, keywords, imageUrl), faqSchema];

  return (
    <div className="overflow-x-hidden">
      <MetaUpdater 
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        path={siteUrl}
        schema={schemas}
        imageUrl={imageUrl}
      />
      
      <HeroSection />
      <FeaturedEscortsSection />
      <StatsSection />
      <HomeContentSection />
      <LocationGuideSection />
      <WhyChooseUsSection />
      <GallerySection />
      <TestimonialsSection />
      <RatesTableSection />
      <FAQSection />
      <BlogHighlightSection />
      <CTASection />
      <KeywordTagsSection />
    </div>
  );
};

export default HomePage;
