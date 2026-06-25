import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rajesh K.',
      rating: 5,
      text: 'Exceptional service and professionalism. The Udaipur escort I met was wonderful. Highly recommended for anyone seeking premium companionship in Udaipur.',
      image: '/assets/6fe3d8e95d9010835e25534bc498bedf.jpg',
      avatarColor: 'bg-pink-500'
    },
    {
      name: 'Amit S.',
      rating: 5,
      text: 'Discreet, elegant, and exactly what I was looking for. The booking process for the call girl was smooth and hassle-free. Best escort service in Udaipur!',
      image: '/assets/7f7861ea499bff9c6e006a1e31dd7c03.jpg',
      avatarColor: 'bg-red-500'
    },
    {
      name: 'Vikram M.',
      rating: 5,
      text: 'Outstanding experience from start to finish. The quality of the escort service exceeded my expectations. The Udaipur call girl was a delight.',
      image: '/assets/e20b5460434200f0dc3b9ff6ac1abfd6.jpg',
      avatarColor: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <OptimizedImage
        src="/assets/8e3087176fce921df3ad0bee2676c5d2.jpg"
        alt="Luxurious background for testimonials"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white text-shadow mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experiences with our Udaipur escorts and call girls.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 card-hover border border-white/20"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-200 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center">
                <OptimizedImage 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className={`w-12 h-12 rounded-full object-cover border-2 border-pink-400`}
                />
                <div className="ml-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-pink-300">Verified Client</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;