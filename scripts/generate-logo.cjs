const fs = require('fs');
const path = require('path');

// Simple PNG logo generator using Canvas API
const createLogo = () => {
  const sizes = [
    { size: 192, name: 'logo-192.png' },
    { size: 512, name: 'logo-512.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 16, name: 'favicon-16x16.png' },
  ];

  // SVG content for logo
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <!-- Background with gradient -->
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ef4444;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#fce7f3;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Rounded rectangle background -->
  <rect width="512" height="512" rx="100" fill="url(#bgGrad)"/>
  
  <!-- Crown (VIP Symbol) -->
  <path d="M256 140 L280 200 L340 190 L305 240 L350 265 L280 265 L256 320 L232 265 L162 265 L207 240 L172 190 L232 200 Z" 
        fill="#fbbf24" stroke="#ffffff" stroke-width="6" opacity="0.9"/>
  
  <!-- Decorative circle -->
  <circle cx="256" cy="256" r="180" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.3"/>
  
  <!-- Letter E -->
  <text x="256" y="400" font-family="Georgia, serif" font-size="200" font-weight="bold" 
        text-anchor="middle" fill="url(#textGrad)" stroke="#ffffff" stroke-width="3">E</text>
  
  <!-- Bottom text -->
  <text x="256" y="470" font-family="Arial, sans-serif" font-size="36" font-weight="600" 
        text-anchor="middle" fill="#ffffff" opacity="0.9">UDAIPUR</text>
  
  <!-- Decorative dots -->
  <circle cx="120" cy="150" r="8" fill="#fbbf24" opacity="0.7"/>
  <circle cx="392" cy="150" r="8" fill="#fbbf24" opacity="0.7"/>
  <circle cx="120" cy="362" r="8" fill="#fbbf24" opacity="0.7"/>
  <circle cx="392" cy="362" r="8" fill="#fbbf24" opacity="0.7"/>
</svg>`;

  // Save SVG
  const publicDir = path.join(__dirname, '..', 'public');
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), svgContent);
  
  console.log('✅ Logo SVG created successfully!');
  console.log('📁 Location: public/logo.svg');
  console.log('\n📝 Note: For PNG versions, you can use online converters or image editing tools.');
  console.log('   Recommended: https://cloudconvert.com/svg-to-png');
};

createLogo();
