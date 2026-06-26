import xlsx from 'xlsx';
import fs from 'fs';

const files = [
  'semrush report/escortserviceudaipur.com_issues_20260625.xlsx',
  'semrush report/escortserviceudaipur.com_mega_export_20260625.xlsx'
];

files.forEach(filePath => {
  console.log(`\n=========================================`);
  console.log(`Searching file: ${filePath}`);
  console.log(`=========================================`);
  if (!fs.existsSync(filePath)) {
    console.log("File not found");
    return;
  }
  const workbook = xlsx.readFile(filePath);
  workbook.SheetNames.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    const rows = xlsx.utils.sheet_to_json(sheet);
    console.log(`Sheet: ${sheetName}, total rows: ${rows.length}`);
    if (rows.length === 0) return;
    
    // Search for rows that mention external links or have non-zero status
    // Let's search keys of the first row to see if there's any column like "Broken links", "External URL", etc.
    const keys = Object.keys(rows[0]);
    console.log("Sample columns:", keys.slice(0, 10));
    
    // Look for columns that might contain broken links or status code
    const possibleLinkKeys = keys.filter(k => k.toLowerCase().includes('url') || k.toLowerCase().includes('link') || k.toLowerCase().includes('href'));
    console.log("Possible link keys:", possibleLinkKeys);

    // Let's filter rows that contain any common HTTP status error or the word "broken" or "http" in values
    let foundCount = 0;
    rows.forEach((row, idx) => {
      const rowStr = JSON.stringify(row).toLowerCase();
      if (rowStr.includes('broken') && (rowStr.includes('http') || rowStr.includes('wa.me') || rowStr.includes('instagram') || rowStr.includes('facebook') || rowStr.includes('twitter'))) {
        if (foundCount < 10) {
          console.log(`Row ${idx+1}:`, row);
        }
        foundCount++;
      }
    });
    console.log(`Found ${foundCount} rows containing 'broken' and some link/social term`);
  });
});
