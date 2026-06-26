import type { Metadata, Viewport } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import JsonLd from '../components/seo/JsonLd';
import { localBusinessSchema, organizationSchema, websiteSchema } from '../lib/schema';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const siteUrl = 'https://escortserviceudaipur.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Premium Escort Services in Udaipur | Call Girls Udaipur Available Just ₹2999',
    template: '%s | Escort Service Udaipur',
  },
  description:
    'Call Girls Udaipur from ₹2999 | 24x7 Escort Service in Udaipur with Cash on Delivery, WhatsApp Booking. Premium Udaipur Escorts, VIP, Russian, Independent Call Girls Available Now.',
  keywords: [
    'call girls udaipur',
    'escort service in udaipur',
    'udaipur escorts',
    'independent call girls udaipur',
    'vip escorts udaipur',
    'russian escorts udaipur',
    'model escorts udaipur',
    'housewife escorts udaipur',
    'udaipur call girls service',
    'escort agency udaipur',
  ],
  applicationName: 'Escort Service Udaipur',
  authors: [{ name: 'Escort Service Udaipur', url: `${siteUrl}/about` }],
  creator: 'Escort Service Udaipur',
  publisher: 'Escort Service Udaipur',
  category: 'Adult Entertainment Services',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Escort Service Udaipur',
    title: 'Premium Escort Services in Udaipur | Call Girls Udaipur Available Just ₹2999',
    description:
      'Call Girls Udaipur from ₹2999 | 24x7 Escort Service in Udaipur with Cash on Delivery, WhatsApp Booking. Premium Udaipur Escorts, VIP, Russian, Independent Call Girls Available Now.',
    images: [
      {
        url: '/assets/df35c36717dc1b1000ac06911bfe1a65.webp',
        width: 1200,
        height: 630,
        alt: 'Escort Service Udaipur - Premium Call Girls from ₹2999',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Escort Services in Udaipur | Call Girls from ₹2999',
    description: 'Call Girls Udaipur from ₹2999 | 24x7 Service, Cash on Delivery, WhatsApp Booking Available.',
    images: ['/assets/df35c36717dc1b1000ac06911bfe1a65.webp'],
    creator: '@escortudaipur',
  },
  verification: {
    google: 'GOOGLE_SEARCH_CONSOLE_CODE',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.svg', sizes: '192x192', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ec4899',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://storage.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body>
        <JsonLd data={[organizationSchema, websiteSchema, localBusinessSchema]} />
        {children}
      </body>
    </html>
  );
}
