'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppStickyButton from '@/components/ui/WhatsAppStickyButton';

const siteUrl = 'https://escortserviceudaipur.com';

const pages = {
  home: dynamic(() => import('@/legacy-pages/HomePage')),
  about: dynamic(() => import('@/legacy-pages/AboutPage')),
  services: dynamic(() => import('@/legacy-pages/ServicesPage')),
  enhancements: dynamic(() => import('@/legacy-pages/EnhancementsPage')),
  gallery: dynamic(() => import('@/legacy-pages/GalleryPage')),
  contact: dynamic(() => import('@/legacy-pages/ContactPage')),
  blog: dynamic(() => import('@/legacy-pages/BlogPage')),
  blogPost: dynamic(() => import('@/legacy-pages/BlogPostPage')),
  admin: dynamic(() => import('@/legacy-pages/admin/AdminDashboard')),
  login: dynamic(() => import('@/legacy-pages/LoginPage')),
  signup: dynamic(() => import('@/legacy-pages/SignupPage')),
  privacy: dynamic(() => import('@/legacy-pages/PrivacyPolicyPage')),
  terms: dynamic(() => import('@/legacy-pages/TermsOfServicePage')),
  russian: dynamic(() => import('@/legacy-pages/categories/RussianEscortsPage')),
  vip: dynamic(() => import('@/legacy-pages/categories/VipEscortsPage')),
  model: dynamic(() => import('@/legacy-pages/categories/ModelEscortsPage')),
  housewife: dynamic(() => import('@/legacy-pages/categories/HousewifeEscortsPage')),
  independent: dynamic(() => import('@/legacy-pages/categories/IndependentEscortsPage')),
  udaipurLocation: dynamic(() => import('@/legacy-pages/locations/EscortServiceInUdaipurPage')),
  notFound: dynamic(() => import('@/legacy-pages/NotFoundPage')),
};

export default function ClientShell({ page }) {
  const PageComponent = pages[page] || pages.notFound;
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
            phoneNumber="+918000253680"
            message="Hello, this message is from escortserviceudaipur.com"
          />
        )}
      </div>
    </HelmetProvider>
  );
}
