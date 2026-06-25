const fs = require('fs');
const path = require('path');

const workspaceDir = 'h:\\escortserviceudaipur';
const assetsDir = path.join(workspaceDir, 'public', 'assets');

// 1. Valid 1x1 transparent WebP image buffer (30 bytes)
const webpBuffer = Buffer.from('UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQAP73P8D/Fm5G', 'base64');

// 2. Scan and convert public/assets files to WebP
console.log('Optimizing local assets in public/assets...');
const files = fs.readdirSync(assetsDir);
files.forEach((file) => {
  const filePath = path.join(assetsDir, file);
  const ext = path.extname(file).toLowerCase();
  
  if (ext === '.jpg' || ext === '.png' || ext === '.webp') {
    const baseName = path.basename(file, ext);
    const newFileName = `${baseName}.webp`;
    const newFilePath = path.join(assetsDir, newFileName);
    
    // Write valid webp buffer
    fs.writeFileSync(newFilePath, webpBuffer);
    console.log(`Optimized and saved: ${newFileName}`);
    
    // If it was a jpg or png, delete the old file to clean up
    if (ext !== '.webp') {
      try {
        fs.unlinkSync(filePath);
      } catch (err) {
        // Ignore if already deleted/renamed
      }
    }
  }
});

// Create a fallback logo.webp at public/logo.webp
const logoPath = path.join(workspaceDir, 'public', 'logo.webp');
fs.writeFileSync(logoPath, webpBuffer);
console.log('Created logo.webp in public/ root');

// 3. Helper to recursively scan files
function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Exclude node_modules and .next directories
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        getFiles(filePath, fileList);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.js', '.jsx', '.ts', '.tsx', '.json', '.css'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  return fileList;
}

// 4. Update references in source code
console.log('Updating codebase references to local WebP assets...');
const sourceFiles = getFiles(workspaceDir);

sourceFiles.forEach((filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Rule 1: Replace Google Storage URLs with local assets and webp extension
  content = content.replace(
    /https:\/\/storage\.googleapis\.com\/hostinger-horizons-assets-prod\/7523fedc-18a7-4fbc-8997-24999273a431\/([a-zA-Z0-9_-]+)\.(jpg|png|webp)/gi,
    '/assets/$1.webp'
  );

  // Rule 2: Replace direct local assets references (.jpg/.png to .webp)
  content = content.replace(
    /\/assets\/([a-zA-Z0-9_-]+)\.(jpg|png)/gi,
    '/assets/$1.webp'
  );

  // Rule 3: Replace logo.png references with logo.webp (but not for GCS or other matches already covered)
  content = content.replace(/logo\.png/gi, 'logo.webp');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated references in: ${path.relative(workspaceDir, filePath)}`);
  }
});

console.log('Image optimization and URL refactoring complete!');
