import xlsx from 'xlsx';
import fs from 'fs';
import path from 'path';

const reportsDir = 'semrush report';
const outputSummary = 'scratch/semrush_summary.txt';

let summaryText = 'SEMRUSH REPORTS SUMMARY\n';
summaryText += '========================\n\n';

function parseFile(fileName) {
  const filePath = path.join(reportsDir, fileName);
  if (!fs.existsSync(filePath)) {
    summaryText += `File not found: ${fileName}\n\n`;
    return;
  }

  summaryText += `### File: ${fileName}\n`;
  summaryText += `--------------------------------------------------\n`;

  try {
    const workbook = xlsx.readFile(filePath);
    workbook.SheetNames.forEach(sheetName => {
      summaryText += `Sheet: ${sheetName}\n`;
      const sheet = workbook.Sheets[sheetName];
      const json = xlsx.utils.sheet_to_json(sheet);
      summaryText += `Total rows: ${json.length}\n`;
      
      // Print first 30 rows or specific columns
      const sampleSize = Math.min(json.length, 30);
      summaryText += `Sample rows (up to 30):\n`;
      for (let i = 0; i < sampleSize; i++) {
        summaryText += `${i + 1}: ${JSON.stringify(json[i], null, 2)}\n`;
      }
      summaryText += '\n';
    });
  } catch (err) {
    summaryText += `Error reading file: ${err.message}\n\n`;
  }
  summaryText += '\n';
}

const files = [
  'escortserviceudaipur.com_issues_20260625.xlsx',
  'escortserviceudaipur.com_pages_structured_data_20260625.xlsx',
  'escortserviceudaipur.com_pages_20260625.xlsx',
  'escortserviceudaipur.com_mega_export_20260625.xlsx'
];

files.forEach(parseFile);

fs.writeFileSync(outputSummary, summaryText, 'utf8');
console.log(`Summary written to ${outputSummary}`);
