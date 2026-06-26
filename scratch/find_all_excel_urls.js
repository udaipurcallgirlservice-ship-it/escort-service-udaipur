import xlsx from 'xlsx';
import fs from 'fs';
import path from 'path';

const reportsDir = 'semrush report';
const files = fs.readdirSync(reportsDir).filter(f => f.endsWith('.xlsx'));

console.log("SEARCHING FOR URLS IN EXCEL CELLS:");
console.log("=================================");

files.forEach(fileName => {
  const filePath = path.join(reportsDir, fileName);
  const workbook = xlsx.readFile(filePath);
  workbook.SheetNames.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    const range = xlsx.utils.decode_range(sheet['!ref'] || 'A1:A1');
    
    let foundUrls = new Set();
    for (let r = range.s.r; r <= range.e.r; r++) {
      for (let c = range.s.c; c <= range.e.c; c++) {
        const cellAddress = xlsx.utils.encode_cell({ r, c });
        const cell = sheet[cellAddress];
        if (cell && cell.v) {
          const valStr = String(cell.v);
          // Check if it's a URL but not our target site domain, and not just a header
          if ((valStr.startsWith('http://') || valStr.startsWith('https://') || valStr.startsWith('//')) && 
              !valStr.includes('escortserviceudaipur.com') && 
              !valStr.includes('schema.org') &&
              !valStr.includes('w3.org')) {
            foundUrls.add(valStr);
          }
        }
      }
    }
    if (foundUrls.size > 0) {
      console.log(`\nIn File: ${fileName} | Sheet: ${sheetName}`);
      console.log(`Found ${foundUrls.size} distinct external URLs:`);
      foundUrls.forEach(url => console.log(`  - ${url}`));
    }
  });
});
