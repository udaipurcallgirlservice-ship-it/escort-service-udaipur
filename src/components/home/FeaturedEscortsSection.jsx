import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Award, Phone, MessageCircle, Eye } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';

const FeaturedEscortsSection = () => {
  const whatsappNumber = "+919549032117";
  const whatsappMessage = "Hello, this message is from escortserviceudaipur.com";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:${whatsappNumber}`;

  const escorts = [
    { name: 'Aisha Sharma', age: 22, image: "/assets/e3dddcd8688f722667464a77821e16b6.webp", description: "Aisha is a top-rated choice within our Udaipur escort services, known for her captivating charm and dedication to client satisfaction.", rating: "4.9" },
    { name: 'Priya Singh', age: 24, image: "/assets/45188e517813de1ca113b665ed99bd2d.webp", description: "As a leading independent escort in Udaipur, Priya offers a personalized and unforgettable companionship experience.", rating: "5.0" },
    { name: 'Neha Verma', age: 21, image: "/assets/8e3087176fce921df3ad0bee2676c5d2.webp", description: "Young and vibrant, Neha brings a fresh energy to the Udaipur escort scene, promising a delightful and engaging encounter.", rating: "4.8" },
    { name: 'Riya Patel', age: 23, image: "/assets/b5f23c6fbf8ce0d8400a90d582a08190.webp", description: "Riya is an enchanting companion whose warm personality makes her a sought-after provider of escort services in Udaipur.", rating: "4.7" },
    { name: 'Sonia Mehra', age: 25, image: "/assets/8acafb7c53d21d13196a7ec71d851be5.webp", description: "Sonia offers sophisticated, high-class Udaipur escort services, perfect for gentlemen attending dinners, events, or seeking refined company.", rating: "4.9" },
    { name: 'Anjali Gupta', age: 20, image: "/assets/bbe7066d771050a49d9053fec6842636.webp", description: "Anjali is a youthful and energetic escort in Udaipur, offering a fun-filled and memorable experience for her clients.", rating: "4.6" },
    { name: 'Kavita Reddy', age: 26, image: "/assets/3a68fde96c4e521b54758e6cb966a2bc.webp", description: "With her experience, Kavita provides a relaxing and deeply pleasurable experience, setting a high standard for Udaipur escort services.", rating: "5.0" },
    { name: 'Mira Joshi', age: 22, image: "/assets/a98099e2f64a96da870cca70d497e9ef.webp", description: "Mira is a charming and intelligent companion, ideal for engaging conversations and delightful company during your time in Udaipur.", rating: "4.8" },
    { name: 'Laxmi Das', age: 24, image: "/assets/164c8eaf7dd6c47d742e0890b15d1f5e.webp", description: "A professional known for her grace, Laxmi delivers an exceptional and memorable encounter, embodying the best of our escort services.", rating: "4.9" },
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
            Meet Our Elite <span className="gradient-text">Udaipur Escorts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our curated selection of companions sets the standard for <strong className="font-semibold text-gray-700">Udaipur escort services</strong>. Each woman is not just beautiful, but also intelligent, articulate, and dedicated to providing an exceptional experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {escorts.map((escort, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group"
            >
              <div className="relative overflow-hidden">
                <OptimizedImage
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={`Profile of ${escort.name}, a provider of Udaipur escort services.`}
                  src={escort.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-md">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-800">{escort.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm">
                  {escort.age} Years
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{escort.name} - <span className="text-pink-600">Udaipur Escort</span></h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{escort.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-pink-500" />
                    <span className="text-sm text-gray-600">Premium Escort</span>
                  </div>
                  <Link to="/gallery">
                    <Button size="sm" variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50">
                      <Eye className="mr-1 w-4 h-4" /> View Profile
                    </Button>
                  </Link>
                </div>
                <div className="flex gap-2">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="sm" className="w-full bg-green-500 hover:bg-green-600 text-white">
                      <MessageCircle className="mr-1 w-4 h-4" /> WhatsApp
                    </Button>
                  </a>
                  <a href={callLink} className="flex-1">
                    <Button size="sm" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                      <Phone className="mr-1 w-4 h-4" /> Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to="/gallery">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              See All Our Escorts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedEscortsSection;