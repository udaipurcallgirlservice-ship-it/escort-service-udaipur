import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import PageHero from '@/components/layout/PageHero';
import MetaUpdater from '@/components/seo/MetaUpdater';
import { createBreadcrumbSchema } from '@/lib/schemas';

const GalleryPage = ({ siteUrl }) => {
    const location = useLocation();
    const pageUrl = `${siteUrl}${location.pathname}`;
    const pageTitle = "Udaipur Escorts Gallery | Real Photos of Our Call Girls";
    const pageDescription = "View our gallery of beautiful Udaipur escorts. See real, verified photos of our sophisticated call girls and elite companions available for discreet booking now.";
    const keywords = "Udaipur escorts gallery, call girls photos, escort images Udaipur, real escort photos, VIP companions gallery, Escort Service Udaipur, call girl, escort";
    const heroImage = "/assets/8e3087176fce921df3ad0bee2676c5d2.webp";

    const images = [
        "/assets/e3dddcd8688f722667464a77821e16b6.webp",
        "/assets/45188e517813de1ca113b665ed99bd2d.webp",
        "/assets/8e3087176fce921df3ad0bee2676c5d2.webp",
        "/assets/b5f23c6fbf8ce0d8400a90d582a08190.webp",
        "/assets/8acafb7c53d21d13196a7ec71d851be5.webp",
        "/assets/bbe7066d771050a49d9053fec6842636.webp",
        "/assets/3a68fde96c4e521b54758e6cb966a2bc.webp",
        "/assets/a98099e2f64a96da870cca70d497e9ef.webp",
        "/assets/164c8eaf7dd6c47d742e0890b15d1f5e.webp",
        "/assets/070d0fd04d47fb001ee593c07df7bb3b.webp",
        "/assets/6fe3d8e95d9010835e25534bc498bedf.webp",
        "/assets/7f7861ea499bff9c6e006a1e31dd7c03.webp",
        "/assets/e20b5460434200f0dc3b9ff6ac1abfd6.webp",
        "/assets/6b3e692b9069eeafd99d41bd8406c705.webp",
        "/assets/d4f2714ce771733034a260fd645270c9.webp",
    ];

    const [selectedImg, setSelectedImg] = useState(null);

    const breadcrumbSchema = createBreadcrumbSchema([
      { name: "Home", item: siteUrl },
      { name: "Gallery", item: pageUrl }
    ]);

    const imageGallerySchema = {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "Escort Service Udaipur Gallery",
      "description": pageDescription,
      "url": pageUrl,
      "image": images.map((src, index) => ({
        "@type": "ImageObject",
        "contentUrl": src,
        "name": `Udaipur Escort ${index + 1}`,
        "description": `A beautiful escort from our Udaipur gallery. Image ${index + 1}.`,
        "thumbnailUrl": src,
        "license": `${siteUrl}/terms`,
        "acquireLicensePage": `${siteUrl}/contact`
      }))
    };

  return (
    <div className="pt-16 lg:pt-20">
      <MetaUpdater 
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        path={pageUrl}
        schema={[breadcrumbSchema, imageGallerySchema]}
        imageUrl={heroImage}
      />
      <PageHero 
        title={<>Our <span className="gradient-text">Photo Gallery</span></>}
        subtitle="Browse our gallery to see real, verified photos of our elite Udaipur escorts. Each companion is as beautiful and sophisticated as they appear."
        imageSrc={heroImage}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Exclusive <span className="gradient-text">Escort Gallery</span> - Real Photos, Verified Profiles
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto leading-relaxed">
              Welcome to our comprehensive photo gallery featuring authentic, unedited images of our elite escort companions in Udaipur. Every photo in our collection represents a real, verified call girl who is currently available for bookings. We pride ourselves on transparency and authenticity, ensuring that what you see is exactly what you can expect when you book our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">100% Authentic Photos</h3>
              <p className="text-gray-600 mb-4">
                All images in our gallery are recent, unedited photographs of our actual escorts. We strictly prohibit the use of stock photos or misleading images, ensuring complete transparency in our presentation.
              </p>
              <Link to="/about" className="text-pink-600 hover:text-pink-700 font-medium">
                Learn About Our Standards →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Diverse Selection</h3>
              <p className="text-gray-600 mb-4">
                Our gallery showcases escorts from various categories including <Link to="/escorts/russian" className="text-blue-600 hover:underline">Russian escorts</Link>, <Link to="/escorts/vip" className="text-blue-600 hover:underline">VIP call girls</Link>, <Link to="/escorts/model" className="text-blue-600 hover:underline">model escorts</Link>, and more, catering to diverse preferences and tastes.
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                Explore All Categories →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Regular Updates</h3>
              <p className="text-gray-600 mb-4">
                We continuously update our gallery with new escorts and fresh photos to provide you with the latest options. Our collection grows regularly as we welcome new companions to our exclusive roster.
              </p>
              <Link to="/contact" className="text-green-600 hover:text-green-700 font-medium">
                Request Specific Types →
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">How to Use Our Gallery</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Browsing Tips</h3>
                <p className="text-gray-600 mb-4">
                  Click on any image to view it in full size and get a better look at our escorts. Each photo is carefully selected to showcase the natural beauty and personality of our call girls. Take your time to browse through different categories and find the companion that appeals to you most.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Making Your Selection</h3>
                <p className="text-gray-600 mb-4">
                  Once you've found an escort you're interested in, note any specific details or preferences. When you contact us, mention the photos or escorts that caught your attention, and we'll provide additional information and arrange your booking.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy and Discretion</h3>
                <p className="text-gray-600 mb-4">
                  All photos are shared with the explicit consent of our escorts and are used solely for the purpose of client selection. We maintain strict privacy standards and ensure that all images are handled with the utmost discretion and professionalism.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Booking Process</h3>
                <p className="text-gray-600 mb-4">
                  After viewing our gallery, contact us via phone or WhatsApp to discuss availability and make your booking. Our team will confirm the escort's availability and provide all necessary details for your appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
                onClick={() => setSelectedImg(src)}
                layoutId={src}
              >
                <OptimizedImage 
                    src={src} 
                    alt={`Udaipur Escort Gallery Image ${index + 1}`} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                 <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Camera className="w-10 h-10 text-white" />
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img 
              src={selectedImg} 
              alt="Enlarged escort view" 
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              layoutId={selectedImg}
            />
            <motion.button 
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2"
                initial={{scale:0}}
                animate={{scale:1}}
                exit={{scale:0}}
                onClick={() => setSelectedImg(null)}
            >
                <X/>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;