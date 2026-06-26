import xlsx from 'xlsx';
import fs from 'fs';
import path from 'path';

const filePath = 'semrush report/escortserviceudaipur.com_issues_20260625.xlsx';
const workbook = xlsx.readFile(filePath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const json = xlsx.utils.sheet_to_json(sheet);

console.log("SEMRUSH ACTIVE FAILED ISSUES (Col0 > 0):");
console.log("========================================");

json.forEach((row, i) => {
  const failed = parseInt(row["0"], 10);
  if (!isNaN(failed) && failed > 0) {
    const issueName = row["5xx errors"] || row["ERROR"] || "";
    const severity = row["ERROR"] || "";
    const total = row["20"] || "";
    console.log(`- Severity: ${severity} | Issue: ${issueName} | Failed: ${failed} / Checked: ${total}`);
  }
});
