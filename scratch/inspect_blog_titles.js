import fs from 'fs';

const content = fs.readFileSync('src/data/blogPosts.ts', 'utf8');
const titleRegex = /title:\s*"([^"]+)"/g;

console.log("BLOG POST TITLES AND LENGTHS:");
console.log("============================");

let match;
let count = 1;
while ((match = titleRegex.exec(content)) !== null) {
  const title = match[1];
  console.log(`${count}: Length: ${title.length} | Title: "${title}"`);
  count++;
}
