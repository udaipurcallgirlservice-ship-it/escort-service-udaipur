import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Shield, Star, Sun, Moon } from 'lucide-react';
import MetaUpdater from '@/components/seo/MetaUpdater';
import PageHero from '@/components/layout/PageHero';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createBreadcrumbSchema, createFaqPageSchema, createProfessionalServiceSchema } from '@/lib/schemas';

const EscortServiceInUdaipurPage = ({ siteUrl }) => {
  const location = useLocation();
  const pageUrl = `${siteUrl}${location.pathname}`;
  const pageTitle = "Escort Service in Udaipur | #1 Local Call Girls Agency";
  const pageDescription = "The definitive guide to escort services in Udaipur. We cover all local areas, offering premium, verified call girls for incall & outcall. Book the best local escorts.";
  const keywords = "escort service in udaipur, local call girls udaipur, udaipur escort agency, udaipur incall service, udaipur outcall service, best escorts in udaipur";
  const heroImage = "/logo.svg";

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: siteUrl },
    { name: "Escort Service in Udaipur", item: pageUrl }
  ]);

  const faqData = [
    { question: "Do you provide services in the Old City area?", answer: "Yes, we offer full escort services in and around the Old City, including near City Palace, Jagdish Temple, and the ghats of Lake Pichola. Our companions are familiar with the area for discreet meetings." },
    { question: "Are outcall services available in newer areas like Hiran Magri?", answer: "Absolutely. We provide prompt and professional outcall services to all sectors of Hiran Magri and other modern residential areas in Udaipur." },
    { question: "Can I book an escort for a business trip near the airport or Sukher industrial area?", answer: "Yes, we specialize in providing professional companions for business travelers. We can arrange for an escort to meet you at your hotel near the airport or in the Sukher area." },
    { question: "What is the difference between incall and outcall services in Udaipur?", answer: "Incall services are provided at a discreet, luxury private residence arranged by us. Outcall services involve the companion traveling to your location, such as your hotel room or private residence in Udaipur." }
  ];

  const faqPageSchema = createFaqPageSchema(faqData);
  const localServiceSchema = createProfessionalServiceSchema(pageUrl, pageDescription, keywords, heroImage);
  localServiceSchema.name = "Local Escort Service in Udaipur";
  localServiceSchema.areaServed.push({ "@type": "Neighborhood", "name": "Old City, Udaipur" });
  localServiceSchema.areaServed.push({ "@type": "Neighborhood", "name": "Hiran Magri, Udaipur" });
  localServiceSchema.areaServed.push({ "@type": "Neighborhood", "name": "Fatehpura, Udaipur" });

  return (
    <div className="pt-16 lg:pt-20">
      <MetaUpdater
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        path={pageUrl}
        schema={[breadcrumbSchema, faqPageSchema, localServiceSchema]}
        imageUrl={heroImage}
      />
      <PageHero
        title={<>#1 <span className="gradient-text">Escort Service in Udaipur</span></>}
        subtitle="Your definitive source for premium, reliable, and discreet companionship across every neighborhood of the City of Lakes."
        imageSrc={heroImage}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Udaipur's Most Trusted <span className="gradient-text">Local Escort Agency</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto leading-relaxed">
              Welcome to the ultimate resource for elite <strong>escort service in Udaipur</strong>. We are the leading local agency connecting you with verified <strong>Udaipur call girl</strong> partners and premium <strong>call girl in Udaipur near me</strong> companions. Our deep understanding of the city, combined with an elite database, ensures your booking is safe, discreet, and extremely satisfying. Contact us at our official <strong>Udaipur call girl contact number</strong> +91-8000253680 for a hassle-free <strong>call girl Udaipur booking</strong> with Cash on Delivery.
            </p>
          </div>
 
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <OptimizedImage
                src="/assets/udaipur-escort-service.jpg"
                alt="Map of Udaipur highlighting service areas for escorts"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Unmatched Local Coverage</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We pride ourselves on offering comprehensive <strong>Udaipur call girl service</strong> options, including elite hotel outcalls and private incall suites. Our network is strategically positioned to connect you with a premium <strong>call girl Udaipur</strong> companion quickly and discreetly, no matter where you are staying.
              </p>
              <div className="space-y-4">
                {[
                  { area: "Old City & Lake Pichola", description: "Experience romance in the historic heart of Udaipur." },
                  { area: "Fatehpura & Sukhadia Circle", description: "Perfect for social evenings and fine dining dates." },
                  { area: "Hiran Magri & Sector Areas", description: "Discreet residential outcall services." },
                  { area: "Airport & Industrial Areas", description: "Professional companionship for business travelers." }
                ].map(item => (
                  <div key={item.area} className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.area}</h3>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
              Incall vs. Outcall Services <span className="gradient-text">in Udaipur</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer flexible options to suit your needs for privacy and convenience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Incall Service</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our incall service provides a luxurious, private, and completely secure environment for your meeting. Located in discreet, upscale apartments in prime Udaipur locations, this option guarantees zero hassle and complete confidentiality.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><Shield className="w-4 h-4 mr-2 text-green-500" /> 100% Privacy Guaranteed</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-500" /> Five-Star Cleanliness & Amenities</li>
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-blue-500" /> Convenient, Central Locations</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                  <Moon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Outcall Service</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Prefer the comfort of your own space? Our outcall service brings the ultimate companionship experience directly to your hotel room, guesthouse, or private residence anywhere in Udaipur. Our escorts are punctual, discreet, and professional.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><Shield className="w-4 h-4 mr-2 text-green-500" /> Total Discretion at Your Location</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-500" /> Punctual and Professional Arrival</li>
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-blue-500" /> Full Coverage Across Udaipur</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions about <span className="gradient-text">Local Services</span>
          </h2>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Experience the Best <span className="gradient-text">Escort Service in Udaipur</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Don't settle for less. Contact the local experts for a truly premium and hassle-free companionship experience. Our team is available 24/7 to assist you.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <a href="tel:+918000253680">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white">
                <Phone className="mr-2" /> Call Now
              </Button>
            </a>
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EscortServiceInUdaipurPage;
