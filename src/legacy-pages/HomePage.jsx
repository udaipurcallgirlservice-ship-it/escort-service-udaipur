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
import FAQSection, { faqsData } from '@/components/home/FAQSection.jsx';
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
  const pageTitle = "Udaipur Escort Services | 100% COD Luxury Escort service in Udaipur";
  const pageDescription = "Enjoy Udaipur Escort Services with 100% COD. Reliable escort service in Udaipur for safe, private, and memorable companionship.";
  const keywords = "udaipur escort services, escort services in udaipur, udaipur escorts, call girls in udaipur, genuine escorts udaipur, high profile escorts udaipur, vip escorts udaipur, discreet escort service udaipur";
  const imageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/f043e3b400596ff61ff6607eae19097f.png";

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
      <WhyChooseUsSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <BlogHighlightSection />
      <CTASection />
      <KeywordTagsSection />
    </div>
  );
};

export default HomePage;