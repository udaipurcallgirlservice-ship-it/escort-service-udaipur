import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/ui/OptimizedImage';

const ServiceIntroSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            Your Premier Destination for <span className="gradient-text">Udaipur Escort Services</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Welcome to our trusted udaipur call girls services, where clients can explore discreet escort services in Udaipur with verified profiles, clear booking support, and privacy-first communication. Our agency connects you with professional companions across VIP, model, independent, Russian, and housewife escort categories, with 24x7 WhatsApp assistance and transparent booking details for a smooth experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <OptimizedImage
              src="/assets/udaipur-escort-service.jpg"
              alt="Beautiful Udaipur escort ready for an encounter"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <OptimizedImage
              src="/assets/exclusive-escort-service-udaipur.jpg"
              alt="Elegant call girl in Udaipur"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntroSection;
