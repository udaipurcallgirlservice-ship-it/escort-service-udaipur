import React, { useEffect } from 'react';
    import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
    import { Toaster } from '@/components/ui/toaster';
    import Navbar from '@/components/layout/Navbar';
    import Footer from '@/components/layout/Footer';
    import HomePage from '@/legacy-pages/HomePage';
    import AboutPage from '@/legacy-pages/AboutPage';
    import ServicesPage from '@/legacy-pages/ServicesPage';
    import ContactPage from '@/legacy-pages/ContactPage';
    import BlogPage from '@/legacy-pages/BlogPage';
    import BlogPostPage from '@/legacy-pages/BlogPostPage';
    import GalleryPage from '@/legacy-pages/GalleryPage';
    import AdminDashboard from '@/legacy-pages/admin/AdminDashboard';
    import NotFoundPage from '@/legacy-pages/NotFoundPage';
    import WhatsAppStickyButton from '@/components/ui/WhatsAppStickyButton';
    import LoginPage from '@/legacy-pages/LoginPage';
    import SignupPage from '@/legacy-pages/SignupPage';
    import PrivacyPolicyPage from '@/legacy-pages/PrivacyPolicyPage';
    import TermsOfServicePage from '@/legacy-pages/TermsOfServicePage';
    import RussianEscortsPage from '@/legacy-pages/categories/RussianEscortsPage';
    import VipEscortsPage from '@/legacy-pages/categories/VipEscortsPage';
    import ModelEscortsPage from '@/legacy-pages/categories/ModelEscortsPage';
    import HousewifeEscortsPage from '@/legacy-pages/categories/HousewifeEscortsPage';
    import IndependentEscortsPage from '@/legacy-pages/categories/IndependentEscortsPage';
    import EscortServiceInUdaipurPage from '@/legacy-pages/locations/EscortServiceInUdaipurPage';
    import EnhancementsPage from '@/legacy-pages/EnhancementsPage';

    const ScrollToTop = () => {
      const { pathname } = useLocation();

      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

      return null;
    };

    function App() {
      const siteUrl = "https://escortserviceudaipur.com"; 

      return (
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-gray-100 font-sans text-sm overflow-x-hidden">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage siteUrl={siteUrl} />} />
                <Route path="/login" element={<LoginPage siteUrl={siteUrl} />} />
                <Route path="/signup" element={<SignupPage siteUrl={siteUrl} />} />
                <Route path="/about" element={<AboutPage siteUrl={siteUrl} />} />
                <Route path="/services" element={<ServicesPage siteUrl={siteUrl} />} />
                <Route path="/enhancements" element={<EnhancementsPage siteUrl={siteUrl} />} />
                <Route path="/gallery" element={<GalleryPage siteUrl={siteUrl} />} />
                <Route path="/contact" element={<ContactPage siteUrl={siteUrl} />} />
                <Route path="/blog" element={<BlogPage siteUrl={siteUrl} />} />
                <Route path="/blog/:slug" element={<BlogPostPage siteUrl={siteUrl} />} />
                <Route path="/admin/*" element={<AdminDashboard />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage siteUrl={siteUrl} />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage siteUrl={siteUrl} />} />
                <Route path="/escorts/russian" element={<RussianEscortsPage siteUrl={siteUrl} />} />
                <Route path="/escorts/vip" element={<VipEscortsPage siteUrl={siteUrl} />} />
                <Route path="/escorts/model" element={<ModelEscortsPage siteUrl={siteUrl} />} />
                <Route path="/escorts/housewife" element={<HousewifeEscortsPage siteUrl={siteUrl} />} />
                <Route path="/escorts/independent" element={<IndependentEscortsPage siteUrl={siteUrl} />} />
                <Route path="/escort-service-in-udaipur" element={<EscortServiceInUdaipurPage siteUrl={siteUrl} />} />
                <Route path="*" element={<NotFoundPage siteUrl={siteUrl} />} />
              </Routes>
            </main>
            <Footer />
            <Toaster />
            <WhatsAppStickyButton phoneNumber="+919549032117" message="Hello, this message is from escortserviceudaipur.com" />
          </div>
        </Router>
      );
    }

    export default App;
