import xlsx from 'xlsx';
import fs from 'fs';

function printSheetInfo(filePath) {
  console.log(`\n=========================================`);
  console.log(`File: ${filePath}`);
  console.log(`=========================================`);
  if (!fs.existsSync(filePath)) {
    console.log("File not found");
    return;
  }
  const workbook = xlsx.readFile(filePath);
  workbook.SheetNames.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    const json = xlsx.utils.sheet_to_json(sheet);
    console.log(`Sheet name: ${sheetName}`);
    console.log(`Total rows: ${json.length}`);
    if (json.length > 0) {
      console.log("Columns:", Object.keys(json[0]));
      console.log("First 3 rows sample:");
      console.log(JSON.stringify(json.slice(0, 3), null, 2));
    }
  });
}

printSheetInfo('semrush report/escortserviceudaipur.com_pages_20260625.xlsx');
printSheetInfo('semrush report/escortserviceudaipur.com_mega_export_20260625.xlsx');
