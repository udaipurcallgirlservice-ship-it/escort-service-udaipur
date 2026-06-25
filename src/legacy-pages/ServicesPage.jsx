import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Heart, Shield, Award, Filter, Search, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/ui/OptimizedImage';
import PageHero from '@/components/layout/PageHero';
import MetaUpdater from '@/components/seo/MetaUpdater';
import { createBreadcrumbSchema } from '@/lib/schemas';

const ServicesPage = ({ siteUrl }) => {
  const location = useLocation();
  const pageUrl = `${siteUrl}${location.pathname}`;
  const pageTitle = "Udaipur Escort Services | Premium Call Girl Experiences";
  const pageDescription = "Explore our premium escort services in Udaipur. From dinner dates to travel companions, our elite call girls provide unforgettable experiences. Book today.";
  const keywords = "Udaipur escort services list, call girl services, dinner date escorts, travel companions Udaipur, event escorts Udaipur, premium escort packages, Escort Service Udaipur, call girl, escort";
  const heroImage = "/assets/9129f3d63b2949746750be20ebf51262.webp";

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const whatsappNumber = "+919549032117";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;
  const callLink = `tel:${whatsappNumber}`;

  const services = [
    { id: 1, name: 'Dinner Companion', category: 'premium', duration: '4 hours', rating: 4.9, image: '/assets/7c8890d44dd145278008b75375c0e2a7.webp', description: 'Perfect companion for business dinners, social events, or romantic evenings.', features: ['Fine dining experience', 'Intelligent conversation', 'Elegant presentation'] },
    { id: 2, name: 'Travel Companion', category: 'vip', duration: '24 hours', rating: 4.8, image: '/assets/3b3abdbaea31f920296dbda63e7cf4ed.webp', description: 'Sophisticated travel companion for business trips or leisure vacations.', features: ['Travel arrangements', 'Cultural knowledge', 'Professional demeanor'] },
    { id: 3, name: 'Event Escort', category: 'premium', duration: '6 hours', rating: 4.9, image: '/assets/a6734e0fee785af7b3a7ce543c520d37.webp', description: 'Stunning companion for corporate events, galas, and social gatherings.', features: ['Event expertise', 'Social skills', 'Professional networking'] },
    { id: 4, name: 'VIP Experience', category: 'vip', duration: '8 hours', rating: 5.0, image: '/assets/b75bae9fc5a7f1fc577aa197d79fd3c5.webp', description: 'Exclusive VIP experience with premium amenities and personalized service.', features: ['Luxury venues', 'Premium service', 'Exclusive access'] },
    { id: 5, name: 'Elite Companion', category: 'elite', duration: '12 hours', rating: 5.0, image: '/assets/1d2c3b4a5e6f7g8h9i0j.webp', description: 'Elite-level companionship for the most discerning clients.', features: ['Highest caliber', 'Multilingual', 'International experience'] },
    { id: 6, name: 'Weekend Getaway', category: 'elite', duration: '48 hours', rating: 5.0, image: '/assets/a1b2c3d4e5f6g7h8i9j0.webp', description: 'Complete weekend experience at luxury resorts and destinations.', features: ['Resort bookings', 'Activity planning', 'Complete package'] }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'premium', name: 'Premium', count: services.filter(s => s.category === 'premium').length },
    { id: 'vip', name: 'VIP', count: services.filter(s => s.category === 'vip').length },
    { id: 'elite', name: 'Elite', count: services.filter(s => s.category === 'elite').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: siteUrl },
    { name: "Services", item: pageUrl }
  ]);

  const offerCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Escort Services in Udaipur",
    "description": pageDescription,
    "url": pageUrl,
    "itemListElement": services.map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "serviceType": "Escort Service",
        "provider": {
          "@type": "Organization",
          "name": "Escort Service Udaipur"
        },
        "areaServed": {
          "@type": "City",
          "name": "Udaipur"
        }
      },
      "url": pageUrl,
      "category": service.category
    }))
  };

  return (
    <div className="pt-16 lg:pt-20">
      <MetaUpdater 
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        path={pageUrl}
        schema={[breadcrumbSchema, offerCatalogSchema]}
        imageUrl={heroImage}
      />
      <PageHero 
        title={<>Our Premium <span className="gradient-text">Services</span></>}
        subtitle="Discover our carefully curated selection of premium escort services, each designed to provide you with an unforgettable experience."
        imageSrc={heroImage}
      />

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group"
              >
                <div className="relative overflow-hidden">
                  <OptimizedImage  
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt={`${service.name} - ${service.description}`}
                   src={service.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                    service.category === 'elite' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                    service.category === 'vip' ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white' :
                    'bg-white/90 text-gray-700'
                  }`}>
                    {service.category.toUpperCase()}
                  </div>

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed h-20 line-clamp-3">{service.description}</p>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Udaipur</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button 
                        className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full"
                      >
                        <MessageCircle className="mr-2 w-4 h-4" /> Enquire Now
                      </Button>
                    </a>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="rounded-full border-pink-200 hover:bg-pink-50"
                      onClick={() => alert("🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀")}
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}
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
              Why Choose Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We go above and beyond to ensure every aspect of your experience exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Complete Discretion', description: 'Your privacy and confidentiality are our highest priorities. All interactions are completely confidential.' },
              { icon: Award, title: 'Premium Quality', description: 'Only the finest companions who meet our rigorous standards of beauty, intelligence, and sophistication.' },
              { icon: Heart, title: 'Personalized Service', description: 'Every experience is tailored to your specific preferences and requirements for maximum satisfaction.' }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-red-50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Book Your <span className="gradient-text">Perfect Experience</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Contact us today to discuss your requirements and let us create an unforgettable experience tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href={callLink}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" /> Call Us Now
                </Button>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;