import React, { useState, useEffect } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Menu, X, Heart, Shield, Phone, MessageCircle, Image as ImageIcon, BookOpen, ChevronDown, UserCircle, Star } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
      const location = useLocation();
      const whatsappNumber = "+918000253680";
      const whatsappMessage = "Hello, this message is from escortserviceudaipur.com";
      const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const navItems = [
        { name: 'Home', path: '/', icon: Heart },
        { name: 'About', path: '/about', icon: Shield },
        { name: 'Services', path: '/services', icon: UserCircle },
        { name: 'Enhancements', path: '/enhancements', icon: Star },
        { name: 'Gallery', path: '/gallery', icon: ImageIcon },
        { name: 'Blog', path: '/blog', icon: BookOpen },
        { name: 'Contact', path: '/contact', icon: Phone },
      ];

      const getLinkClassName = (isActive) => {
        if (isActive) {
          return 'text-pink-600 bg-pink-50'; 
        }
        if (scrolled || isOpen) {
          return 'text-gray-700 hover:text-pink-600 hover:bg-pink-50';
        }
        return 'text-white hover:text-pink-600 hover:bg-white/20';
      };
      
      const getMobileLinkClassName = (isActive) => {
        if (isActive) {
          return 'text-pink-600 bg-gradient-to-r from-pink-50 to-red-50';
        }
        return 'text-gray-700 hover:text-pink-600 hover:bg-pink-50';
      };
      
      const closeMobileMenu = () => {
        setIsOpen(false);
      };

      return (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled || isOpen
              ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-pink-100' 
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link to="/" className="flex items-center">
                <img 
                  src="/logo.svg" 
                  alt="Escort Service Udaipur Logo" 
                  className="h-16 w-auto"
                  width={150}
                  height={64}
                />
              </Link>

              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 group ${getLinkClassName(isActive)}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-pink-100 to-red-100 rounded-full opacity-50 "
                          style={{ mixBlendMode: 'multiply' }}
                        />
                      )}
                    </Link>
                  );
                })}
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="ml-4">
                  <Button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    <MessageCircle className="mr-2 w-4 h-4" />
                    Book Call Girl
                  </Button>
                </a>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${scrolled || isOpen ? 'text-gray-700 hover:text-pink-600 hover:bg-pink-50' : 'text-white hover:text-pink-600 hover:bg-white/10'}`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white/95 backdrop-blur-md border-t border-pink-100"
              >
                <div className="px-4 py-6 space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={closeMobileMenu}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${getMobileLinkClassName(isActive)}`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    );
                  })}
                  <div className="pt-4 px-4">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-3 rounded-xl shadow-lg">
                        <MessageCircle className="mr-2 w-5 h-5" />
                        Book Call Girl
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      );
    };

    export default Navbar;