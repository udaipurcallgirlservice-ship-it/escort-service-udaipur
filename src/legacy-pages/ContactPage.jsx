import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactFAQ from '@/components/contact/ContactFAQ';
import PageHero from '@/components/layout/PageHero';
import MetaUpdater from '@/components/seo/MetaUpdater';
import { createBreadcrumbSchema, createFaqPageSchema, createContactPageSchema } from '@/lib/schemas';

const ContactPage = ({ siteUrl }) => {
  const location = useLocation();
  const pageUrl = `${siteUrl}${location.pathname}`;
  const pageTitle = "Contact Us | Book Udaipur Escorts & Call Girls 24/7";
  const pageDescription = "Ready to book an elite escort in Udaipur? Contact us 24/7 via Call or WhatsApp for fast, confidential booking of our verified, high-class call girls.";
  const keywords = "contact Udaipur escorts, hire call girls Udaipur, book escort Udaipur, WhatsApp escorts Udaipur, 24/7 escort booking, Escort Service Udaipur, call girl, escort";
  const heroImage = "/assets/4f312bb5388d30cb6c447e63eb1561ec.jpg";

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: siteUrl },
    { name: "Contact", item: pageUrl }
  ]);

  const faqData = [
    { question: "How do I book an escort?", answer: "You can book an escort by calling us or sending a message on WhatsApp. Our team will guide you through the process." },
    { question: "Are your services discreet?", answer: "Yes, we prioritize your privacy. All our services are 100% confidential and discreet." },
    { question: "What are your payment methods?", answer: "We accept cash on delivery and other secure online payment methods. Please inquire for more details." },
    { question: "Can I choose a specific escort?", answer: "Absolutely! You can browse our gallery and choose the escort you prefer. We can also provide recommendations based on your preferences." }
  ];

  const faqPageSchema = createFaqPageSchema(faqData);

  const contactPageSchema = createContactPageSchema(pageUrl, pageTitle, pageDescription, "+919549032117");

  return (
    <div className="pt-16 lg:pt-20">
      <MetaUpdater 
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        path={pageUrl}
        schema={[breadcrumbSchema, faqPageSchema, contactPageSchema]}
        imageUrl={heroImage}
      />
      <PageHero 
        title={<>Get in <span className="gradient-text">Touch</span></>}
        subtitle="Ready to book your perfect companion? Contact us today and let us create an unforgettable experience tailored just for you."
        imageSrc={heroImage}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Contact <span className="gradient-text">Udaipur's Premier Escort Service</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto leading-relaxed">
              We're available 24/7 to assist you with booking the perfect escort companion in Udaipur. Our professional team is dedicated to providing exceptional customer service and ensuring your complete satisfaction. Whether you have questions about our services, need assistance with booking, or require special arrangements, we're here to help make your experience unforgettable.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Instant Booking</h3>
              <p className="text-gray-600 mb-4">
                For immediate bookings and urgent requests, call or WhatsApp us directly. Our team can arrange same-day appointments and provide instant confirmation for your escort service needs.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Response Time: Immediate</p>
                <p className="text-sm text-gray-500">Available: 24/7</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advance Planning</h3>
              <p className="text-gray-600 mb-4">
                For special events, extended companionship, or specific requirements, we recommend advance booking. This allows us to ensure the perfect match and make any special arrangements you may need.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Recommended: 24-48 hours</p>
                <p className="text-sm text-gray-500">Special Events: 1 week</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Consultation</h3>
              <p className="text-gray-600 mb-4">
                New to our service? We offer detailed consultations to understand your preferences and guide you through our selection of escorts. Our experienced team will help you make the best choice.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Duration: 15-30 minutes</p>
                <p className="text-sm text-gray-500">Cost: Complimentary</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Frequently Asked Contact Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What information do I need to provide?</h3>
                <p className="text-gray-600 mb-4">
                  We require basic contact information, preferred date and time, duration of service, and any specific preferences. All information is kept strictly confidential and used only for booking purposes.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How far in advance should I book?</h3>
                <p className="text-gray-600 mb-4">
                  While we accommodate same-day requests, we recommend booking 24-48 hours in advance for the best selection. For special events or specific escort requests, earlier booking ensures availability.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What are your operating hours?</h3>
                <p className="text-gray-600 mb-4">
                  Our customer service team is available 24/7 to handle bookings and inquiries. Our escort services are also available around the clock to accommodate your schedule and preferences.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you serve areas outside Udaipur?</h3>
                <p className="text-gray-600 mb-4">
                  Yes, we provide outcall services to nearby cities and can arrange travel companionship. Additional charges may apply for services outside Udaipur city limits. Contact us for specific location availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Location</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Udaipur, we're easily accessible and ready to serve you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="h-96 bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600">City Palace Road, Udaipur, Rajasthan 313001</p>
                <Button 
                  onClick={() => alert("🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀")}
                  className="mt-4 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFAQ />
    </div>
  );
};

export default ContactPage;