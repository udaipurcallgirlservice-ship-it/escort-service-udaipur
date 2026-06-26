import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Heart, Shield, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, Star } from 'lucide-react';
    import { Helmet } from 'react-helmet-async';

    const Footer = () => {
      const whatsappNumber = "+919549032117";
      const whatsappMessage = "Hello, this message is from escortserviceudaipur.com";
      const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

      const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Enhancements', path: '/enhancements' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blog', path: '/blog' },
      ];

       const serviceLinks = [
        { name: 'Russian Escorts', path: '/escorts/russian' },
        { name: 'VIP Escorts', path: '/escorts/vip' },
        { name: 'Model Escorts', path: '/escorts/model' },
        { name: 'Housewife Escorts', path: '/escorts/housewife' },
        { name: 'Independent Escorts', path: '/escorts/independent' },
      ];

      const policyLinks = [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms-of-service' },
      ];

      const socialLinks = [
        { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
      ];

      return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
          <Helmet>
            <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"></script>
          </Helmet>
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6 md:col-span-2 lg:col-span-1"
                >
                  <Link to="/" aria-label="Escort Service Udaipur Homepage">
                    <div className="flex items-center">
                       <img 
                          src="/logo.svg"
                          alt="Escort Service Udaipur Logo"
                          className="h-16 w-auto"
                          width={150}
                          height={64}
                        />
                    </div>
                  </Link>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    <Link to="/escort-service-in-udaipur" className="hover:underline hover:text-pink-400 font-semibold">Escort Service Udaipur</Link> offers top-tier companionship with professional call girls. We ensure 100% discretion, safety, and satisfaction for all our clients seeking elite escort services in Udaipur.
                  </p>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-pink-500/80 transition-all duration-300 group"
                          aria-label={social.label}
                        >
                          <Icon className="w-5 h-5 text-pink-400 group-hover:text-white transition-colors" />
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-6"
                >
                  <span className="text-lg font-semibold text-white flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-pink-400" />
                    Quick Links
                  </span>
                  <ul className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-125"></span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="space-y-6"
                >
                  <span className="text-lg font-semibold text-white flex items-center">
                    <Star className="w-5 h-5 mr-2 text-pink-400" />
                    Our Services
                  </span>
                  <ul className="space-y-3">
                    {serviceLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-125"></span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <span className="text-lg font-semibold text-white flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-pink-400" />
                    Legal
                  </span>
                  <ul className="space-y-3">
                    {policyLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-125"></span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-6"
                >
                  <span className="text-lg font-semibold text-white flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-pink-400" />
                    Contact Escort Service Udaipur
                  </span>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-300">City Palace Road, Near Jagdish Temple</p>
                        <p className="text-gray-300">Udaipur, Rajasthan 313001, India</p>
                      </div>
                    </div>
                    <a href={`tel:${whatsappNumber}`} className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors duration-300 group">
                      <Phone className="w-4 h-4 text-pink-400 flex-shrink-0 group-hover:animate-pulse" />
                      <span>{whatsappNumber} (Call for Escort)</span>
                    </a>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors duration-300 group">
                      <MessageCircle className="w-4 h-4 text-pink-400 flex-shrink-0 group-hover:animate-bounce" />
                      <span>WhatsApp for Call Girl</span>
                    </a>
                    <a href="mailto:escortserviceudaipur141@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors duration-300 group">
                      <Mail className="w-4 h-4 text-pink-400 flex-shrink-0" />
                      <span>escortserviceudaipur141@gmail.com</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="border-t border-white/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                  <div className="text-center md:text-left">
                    <p className="text-gray-400 text-xs">
                      © {new Date().getFullYear()} Escort Service Udaipur. All Rights Reserved. <br className="sm:hidden"/>
                      <Link to="/privacy-policy" className="hover:text-pink-400 transition-colors">Privacy Policy</Link> | 
                      <Link to="/terms-of-service" className="hover:text-pink-400 transition-colors"> Terms of Service</Link>
                    </p>
                    <div className="mt-4 flex justify-center md:justify-start">
                      <a href="https://www.dmca.com/Protection/Status.aspx?ID=09e0b491-e5cc-4c6e-a0b3-ad020e5bed4b" title="DMCA.com Protection Status" className="dmca-badge" rel="nofollow noopener noreferrer" target="_blank">
                        <img src="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=09e0b491-e5cc-4c6e-a0b3-ad020e5bed4b" alt="DMCA.com Protection Status" width={135} height={28} />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span className="flex items-center">
                      <Shield className="w-3.5 h-3.5 mr-1 text-pink-400" />
                      100% Discreet Escort Service
                    </span>
                    <span className="flex items-center">
                      <Heart className="w-3.5 h-3.5 mr-1 text-pink-400" />
                      Premium Call Girls
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;