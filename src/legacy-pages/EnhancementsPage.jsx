import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Shield, Star, Clock, Users, Heart, Phone, MessageCircle } from 'lucide-react';
import MetaUpdater from '@/components/seo/MetaUpdater';
import PageHero from '@/components/layout/PageHero';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { Button } from '@/components/ui/button';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/schemas';

const EnhancementsPage = ({ siteUrl }) => {
  const location = useLocation();
  const pageUrl = `${siteUrl}${location.pathname}`;
  const pageTitle = "Enhanced Escort Experience | VIP Service in Udaipur";
  const pageDescription = "Discover the enhanced experience at Escort Service Udaipur. We offer VIP treatment, 24/7 availability, verified profiles, and complete discretion for an unparalleled call girl service.";
  const keywords = "enhanced escort experience, vip escort service, 24/7 call girls, verified escorts, discreet service udaipur";
  const heroImage = "/assets/b75bae9fc5a7f1fc577aa197d79fd3c5.webp";

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: siteUrl },
    { name: "Enhancements", item: pageUrl }
  ]);

  const webPageSchema = createWebPageSchema(pageUrl, pageTitle, pageDescription, keywords, heroImage);

  const enhancements = [
    {
      icon: Award,
      title: 'VIP Treatment & Exclusivity',
      description: 'Experience the pinnacle of luxury with our VIP escort services. This includes access to our most elite companions, priority booking, and personalized arrangements to cater to your every whim. Perfect for discerning gentlemen who demand the best.',
      image: '/assets/a6734e0fee785af7b3a7ce543c520d37.webp'
    },
    {
      icon: Users,
      title: '100% Verified & Genuine Profiles',
      description: 'We guarantee that every escort profile in our gallery is 100% genuine and verified. What you see is what you get. We provide real, recent photos and accurate descriptions to ensure transparency and build trust with our clients.',
      image: '/assets/e3dddcd8688f722667464a77821e16b6.webp'
    },
    {
      icon: Shield,
      title: 'Unmatched Discretion & Confidentiality',
      description: 'Your privacy is our sacred vow. From the initial contact to the final moment of your engagement, we employ stringent protocols to ensure absolute confidentiality. All communications and booking details are handled with the utmost discretion.',
      image: '/assets/a98099e2f64a96da870cca70d497e9ef.webp'
    },
    {
      icon: Clock,
      title: '24/7 Availability & Instant Booking',
      description: 'Your desires don\'t keep a schedule, and neither do we. Our premium escort services are available 24/7. Our dedicated team is always on standby to facilitate instant bookings, ensuring a companion is available whenever you need one.',
      image: '/assets/164c8eaf7dd6c47d742e0890b15d1f5e.webp'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <MetaUpdater
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        path={pageUrl}
        schema={[breadcrumbSchema, webPageSchema]}
        imageUrl={heroImage}
      />
      <PageHero
        title={<>Enhancements & <span className="gradient-text">Experience</span></>}
        subtitle="Discover the premium features that elevate our escort service above the rest."
        imageSrc={heroImage}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              The <span className="gradient-text">Udaipur Escort</span> Experience, Redefined
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto leading-relaxed">
              We believe that a true premium escort service is defined by the details. It's about more than just companionship; it's about creating a seamless, luxurious, and unforgettable experience. Explore the enhancements that make us the preferred choice for elite gentlemen in Udaipur.
            </p>
          </div>

          <div className="space-y-20">
            {enhancements.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  <div className={`relative rounded-2xl overflow-hidden shadow-2xl aspect-w-4 aspect-h-3 ${isEven ? 'md:order-2' : ''}`}>
                    <OptimizedImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`space-y-6 ${isEven ? 'md:order-1' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Star, title: 'Elite Companions', text: 'Hand-picked for beauty, intellect, and charm.' },
              { icon: Heart, title: 'Personalized Matching', text: 'We find the perfect companion for your personality and occasion.' },
              { icon: Shield, title: 'Safety First', text: 'Your safety and comfort are our non-negotiable priorities.' }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-white rounded-2xl shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Elevate Your <span className="gradient-text">Experience</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Contact us now to book a truly enhanced escort experience in Udaipur. Our team is ready to cater to your every need.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <a href="tel:+919549032117">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white">
                <Phone className="mr-2" /> Call Now
              </Button>
            </a>
            <a href={`https://wa.me/919549032117?text=Hello, this message is from escortserviceudaipur.com`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                <MessageCircle className="mr-2" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancementsPage;