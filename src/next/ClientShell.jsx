'use client';

import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppStickyButton from '@/components/ui/WhatsAppStickyButton';
import HomePage from '@/legacy-pages/HomePage';
import AboutPage from '@/legacy-pages/AboutPage';
import ServicesPage from '@/legacy-pages/ServicesPage';
import ContactPage from '@/legacy-pages/ContactPage';
import BlogPage from '@/legacy-pages/BlogPage';
import BlogPostPage from '@/legacy-pages/BlogPostPage';
import GalleryPage from '@/legacy-pages/GalleryPage';
import AdminDashboard from '@/legacy-pages/admin/AdminDashboard';
import NotFoundPage from '@/legacy-pages/NotFoundPage';
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

const siteUrl = 'https://escortserviceudaipur.com';

const pages = {
  home: HomePage,
  about: AboutPage,
  services: ServicesPage,
  enhancements: EnhancementsPage,
  gallery: GalleryPage,
  contact: ContactPage,
  blog: BlogPage,
  blogPost: BlogPostPage,
  admin: AdminDashboard,
  login: LoginPage,
  signup: SignupPage,
  privacy: PrivacyPolicyPage,
  terms: TermsOfServicePage,
  russian: RussianEscortsPage,
  vip: VipEscortsPage,
  model: ModelEscortsPage,
  housewife: HousewifeEscortsPage,
  independent: IndependentEscortsPage,
  udaipurLocation: EscortServiceInUdaipurPage,
  notFound: NotFoundPage,
};

export default function ClientShell({ page }) {
  const PageComponent = pages[page] || NotFoundPage;
  const isAdmin = page === 'admin';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-100 font-sans text-sm overflow-x-hidden">
        {!isAdmin && <Navbar />}
        <main>
          <PageComponent siteUrl={siteUrl} />
        </main>
        {!isAdmin && <Footer />}
        <Toaster />
        {!isAdmin && (
          <WhatsAppStickyButton
            phoneNumber="+919549032117"
            message="Hello, this message is from escortserviceudaipur.com"
          />
        )}
      </div>
    </HelmetProvider>
  );
}
