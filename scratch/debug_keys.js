import xlsx from 'xlsx';
import fs from 'fs';

const filePath = 'semrush report/escortserviceudaipur.com_pages_20260625.xlsx';
const workbook = xlsx.readFile(filePath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rows = xlsx.utils.sheet_to_json(sheet);

if (rows.length > 0) {
  console.log("First row keys & types:");
  const row = rows[0];
  Object.keys(row).forEach(key => {
    console.log(`- "${key}" (${typeof row[key]}): ${JSON.stringify(row[key])}`);
  });
} else {
  console.log("No rows found!");
}
