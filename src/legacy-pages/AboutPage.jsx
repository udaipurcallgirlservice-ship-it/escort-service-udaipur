import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Heart, Star, Award, Users, Clock } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import PageHero from '@/components/layout/PageHero';
import MetaUpdater from '@/components/seo/MetaUpdater';
import { createAboutPageSchema, createOrganizationSchema, createBreadcrumbSchema } from '@/lib/schemas';

const AboutPage = ({ siteUrl }) => {
  const location = useLocation();
  const pageUrl = `${siteUrl}${location.pathname}`;
  const pageTitle = "About Our Udaipur Escort Agency | Trusted & Elite Escorts";
  const pageDescription = "Learn about Udaipur's top escort agency. We offer verified, high-profile call girls for luxury, passion, and complete discretion. Your trusted choice.";
  const keywords = "Udaipur escort agency, trusted escorts Udaipur, verified call girls, high-profile escorts, luxury escorts Udaipur, Escort Service Udaipur, call girl, escort";
  const heroImage = "/assets/b472ad1f73438be3ebb980c06efeebfe.webp";

  const organizationSchema = createOrganizationSchema(siteUrl, pageDescription);
  const aboutPageSchema = createAboutPageSchema(pageUrl, pageTitle, pageDescription, organizationSchema);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: siteUrl },
    { name: "About Us", item: pageUrl }
  ]);

  return (
    <div className="pt-16 lg:pt-20">
      <MetaUpdater 
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        path={pageUrl}
        schema={[aboutPageSchema, organizationSchema, breadcrumbSchema]}
        imageUrl={heroImage}
      />
      <PageHero 
        title={<>About <span className="gradient-text">Escort Service Udaipur</span></>}
        subtitle="Your premier destination for sophisticated escort services and elite call girls in the City of Lakes. Setting the standard for luxury companionship since 2020."
        imageSrc={heroImage}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              About <span className="gradient-text">Udaipur's Premier Escort Service</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto leading-relaxed">
              Established as Udaipur's most trusted and professional escort agency, we have been providing exceptional companionship services to discerning clients for over four years. Our commitment to excellence, discretion, and client satisfaction has made us the preferred choice for those seeking premium escort services in the City of Lakes. We specialize in connecting sophisticated gentlemen with beautiful, intelligent, and cultured call girls who embody elegance and charm.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Professional Standards</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Escort Service Udaipur, we maintain the highest professional standards in the adult entertainment industry. Every escort in our portfolio undergoes a comprehensive selection process that evaluates not only physical beauty but also intelligence, personality, and professionalism. We believe that true companionship extends beyond physical attraction to include meaningful conversation, cultural awareness, and emotional intelligence.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our escorts are educated, well-traveled, and capable of adapting to any social situation, whether it's a business dinner, cultural event, or private gathering. This versatility makes our call girls ideal companions for both local and international clients who expect nothing less than perfection in their escort experience.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Rigorous selection and verification process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Continuous training in etiquette and professionalism</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Regular health and safety assessments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Multilingual capabilities for international clients</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <OptimizedImage 
                src="/assets/7f7861ea499bff9c6e006a1e31dd7c03.webp" 
                alt="Professional escort service team in Udaipur" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl p-8 lg:p-12 mb-16">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-6 text-center">
              Our Service Philosophy
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Client-Centric Approach</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We understand that every client has unique preferences and requirements. Our personalized approach ensures that each escort experience is tailored to meet individual needs, whether you're seeking intellectual companionship, social partnership, or intimate connection. Our team takes time to understand your preferences and matches you with the most suitable call girl from our diverse portfolio.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Discretion and Privacy</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Privacy and discretion form the cornerstone of our service philosophy. We implement strict confidentiality protocols to protect our clients' identities and personal information. All communications are handled through secure channels, and our escorts are trained to maintain the highest levels of discretion in all interactions, ensuring your privacy is never compromised.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in Udaipur, Escort Service Udaipur began with a mission: to provide discerning 
                clients with access to the most sophisticated and elegant escorts and call girls in Rajasthan. 
                Our journey is built on excellence, discretion, and genuine care for our clients' experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We have built a reputation as the most trusted name in premium escort services. Our carefully selected
                companions represent the finest in beauty, intelligence, and sophistication, ensuring every encounter exceeds expectations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to innovate, maintaining our core values of discretion, quality, and exceptional escort service 
                that have made us the preferred choice for discerning clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage  
                  className="w-full h-96 object-cover" 
                  alt="Elegant escort in Udaipur overlooking Lake Pichola" src="/assets/9129f3d63b2949746750be20ebf51262.webp" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide our escort services, ensuring every client receives exceptional and discreet companionship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Discretion & Privacy', description: 'Your privacy is our utmost priority. We maintain strict confidentiality in all interactions with our escort services.' },
              { icon: Heart, title: 'Genuine Companionship', description: 'We focus on creating genuine connections and memorable experiences with our elite escorts.' },
              { icon: Star, title: 'Excellence in Service', description: 'We strive for excellence in every aspect of our escort service, from selection to client care.' },
              { icon: Award, title: 'Premium Escorts', description: 'Only the finest escorts who meet our high standards of beauty, intelligence, and sophistication.' }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From establishing as a top escort service to becoming Udaipur's premier choice for elite companionship.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 to-red-500 rounded-full"></div>
            <div className="space-y-16">
              {[
                { year: '2020', title: 'Foundation', description: 'Escort Service Udaipur was established to provide top-tier escort services in Udaipur.' },
                { year: '2021', title: 'Growth', description: 'Expanded our network of premium escorts and built strong client relationships for elite companionship.' },
                { year: '2022', title: 'Recognition', description: 'Became the most trusted name for high-class escort services in Rajasthan.' },
                { year: '2024', title: 'Innovation', description: 'Launched our advanced booking platform for seamless escort selection and enhanced client experience.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                      <div className="text-2xl font-bold gradient-text mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-pink-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our Achievements in Escort Services
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Numbers reflecting our commitment to excellence in escort services and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '1000+', label: 'Satisfied Clients' },
              { icon: Star, number: '100+', label: 'Elite Escorts' },
              { icon: Clock, number: '24/7', label: 'Service Availability' },
              { icon: Award, number: '100%', label: 'Discretion Rate' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage  
                  className="w-full h-96 object-cover" 
                  alt="Beautiful escort in a luxurious Udaipur hotel room" src="/assets/eb90df07579e0f07108d25f5d70afb19.webp" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide discerning clients with access to the most sophisticated, intelligent, and beautiful escorts and call girls
                while maintaining the highest standards of discretion, professionalism, and customer service for an unmatched escort experience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe every client deserves an exceptional escort experience. Our mission is to create meaningful connections and unforgettable 
                moments that enrich our clients' lives.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
                  <span className="text-gray-700">Uncompromising quality in escort selection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
                  <span className="text-gray-700">Complete discretion and confidentiality for all escort services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
                  <span className="text-gray-700">Personalized escort service tailored to your desires</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
                  <span className="text-gray-700">Building lasting relationships with our valued escort clients</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;