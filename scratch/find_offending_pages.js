import xlsx from 'xlsx';
import fs from 'fs';

const filePath = 'semrush report/escortserviceudaipur.com_mega_export_20260625.xlsx';
if (!fs.existsSync(filePath)) {
  console.log("File not found");
  process.exit(1);
}

const workbook = xlsx.readFile(filePath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rows = xlsx.utils.sheet_to_json(sheet);

console.log("SUMMARY OF ISSUES PER PAGE:");
console.log("===========================");

const issueTypes = [
  "Duplicate meta descriptions",
  "Title element is too long",
  "Multiple h1 tags",
  "Disallowed internal resources",
  "Broken external links"
];

issueTypes.forEach(issue => {
  console.log(`\nIssue: ${issue}`);
  const offenders = rows.filter(r => parseInt(r[issue], 10) > 0);
  console.log(`Found ${offenders.length} pages:`);
  offenders.forEach(o => {
    console.log(`  - ${o["Page URL"]} (Value: ${o[issue]})`);
  });
});
