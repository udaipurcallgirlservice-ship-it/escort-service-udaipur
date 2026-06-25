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
    default: 'Escort Service Udaipur | Premium Companionship',
    template: '%s | Escort Service Udaipur',
  },
  description:
    'Escort Service Udaipur offers premium companionship, verified profiles, private booking support, and discreet adult services in Udaipur. Contact us today.',
  keywords: [
    'escort service udaipur',
    'udaipur escort service',
    'call girls udaipur',
    'vip escorts udaipur',
    'independent escorts udaipur',
  ],
  applicationName: 'Escort Service Udaipur',
  authors: [{ name: 'Escort Service Udaipur Editorial Team', url: `${siteUrl}/about` }],
  creator: 'Escort Service Udaipur',
  publisher: 'Escort Service Udaipur',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Escort Service Udaipur',
    title: 'Escort Service Udaipur | Premium Companionship',
    description:
      'Premium, discreet companionship services in Udaipur with verified profiles, quick WhatsApp support, and privacy-first booking assistance.',
    images: [
      {
        url: '/assets/df35c36717dc1b1000ac06911bfe1a65.png',
        width: 1200,
        height: 630,
        alt: 'Escort Service Udaipur premium companionship logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escort Service Udaipur | Premium Companionship',
    description: 'Private, verified and premium companionship services in Udaipur.',
    images: ['/assets/df35c36717dc1b1000ac06911bfe1a65.png'],
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
        <link rel="preconnect" href="https://storage.googleapis.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/assets/df35c36717dc1b1000ac06911bfe1a65.png" />
      </head>
      <body>
        <JsonLd data={[organizationSchema, websiteSchema, localBusinessSchema]} />
        {children}
      </body>
    </html>
  );
}
