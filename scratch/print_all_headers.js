import xlsx from 'xlsx';
import fs from 'fs';

const files = [
  'semrush report/escortserviceudaipur.com_issues_20260625.xlsx',
  'semrush report/escortserviceudaipur.com_pages_structured_data_20260625.xlsx',
  'semrush report/escortserviceudaipur.com_pages_20260625.xlsx',
  'semrush report/escortserviceudaipur.com_mega_export_20260625.xlsx'
];

files.forEach(filePath => {
  console.log(`\n=========================================`);
  console.log(`File: ${filePath}`);
  console.log(`=========================================`);
  if (!fs.existsSync(filePath)) {
    console.log("File not found");
    return;
  }
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = xlsx.utils.sheet_to_json(sheet);
  if (rows.length > 0) {
    console.log("Columns:", Object.keys(rows[0]));
    console.log("First row:", JSON.stringify(rows[0], null, 2));
  } else {
    console.log("Empty sheet");
  }
});
