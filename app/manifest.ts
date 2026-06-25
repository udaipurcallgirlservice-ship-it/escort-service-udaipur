import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Escort Service Udaipur',
    short_name: 'ES Udaipur',
    description: 'Premium discreet adult companionship service in Udaipur.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ec4899',
    icons: [
      {
        src: '/assets/df35c36717dc1b1000ac06911bfe1a65.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
