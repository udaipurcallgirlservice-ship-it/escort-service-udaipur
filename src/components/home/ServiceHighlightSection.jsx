import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, CalendarCheck, Coffee, Film, Gift, Globe, Plane, ShieldCheck, Users } from 'lucide-react';

const ServiceHighlightSection = () => {
  const services = [
    { title: 'Dinner Dates', icon: Coffee, description: 'Elegant companions for memorable dining experiences.', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluZSUyMGRpbmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { title: 'Travel Companions', icon: Plane, description: 'Sophisticated partners for your local or international travels.', image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwdHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { title: 'Event Escorts', icon: Film, description: 'Graceful presence for galas, parties, and corporate functions.', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnQlMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { title: 'VIP Experiences', icon: Gift, description: 'Exclusive access and premium treatment for special occasions.', image: 'https://images.unsplash.com/photo-1603356033288-23b25e4d38fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlwJTIwZXhwZXJpZW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { title: 'Weekend Getaways', icon: CalendarCheck, description: 'Charming company for relaxing and adventurous weekends.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjByZWxheHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { title: 'Business Functions', icon: Briefcase, description: 'Professional and articulate companions for corporate events.', image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3MlMjBtZWV0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { title: 'City Tours', icon: Globe, description: 'Knowledgeable guides for exploring Udaipur\'s beauty.', image: 'https://images.unsplash.com/photo-1599911948480-fcde050f093d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWRhaXB1ciUyMGNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { title: 'Social Gatherings', icon: Users, description: 'Engaging companions for parties and social events.', image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwZ2F0aGVyaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { title: 'Discreet Meetings', icon: ShieldCheck, description: 'Confidential and professional companionship for private meetings.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzY3JlZXQlMjBtZWV0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Explore Our <span className="gradient-text">Signature Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored experiences designed to provide unparalleled companionship and luxury in Udaipur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    loading="lazy" 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center mb-2 shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white text-shadow">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">{service.description}</p>
                  <Link to="/services">
                    <Button variant="link" className="text-pink-600 hover:text-pink-700 p-0">
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlightSection;