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
            Welcome to the one-stop destination for adult entertainment. Here, you will find the best Udaipur escort services for your entertainment. If you seek pleasure and adult thrillers, you are at the right place. You can hire top-tier girls for your sensational experiences. Satisfy your lustful cravings and meet your needs. It's time to say goodbye to boredom and eliminate loneliness. The time has come for unlimited pleasure, sensuality, and passion. The best Udaipur escorts are here to join you. These are the women who will give you all kinds of experiences, leaving no space for disappointments. Our agency brings you a selection of VIP escorts in Udaipur. The girls will treat you especially and make you forget all your problems. These are the women you need to enhance your sex life; hire them as they are your true source of entertainment, pleasure, and adventure.
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