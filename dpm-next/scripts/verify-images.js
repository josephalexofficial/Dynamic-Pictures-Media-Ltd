const fs = require("fs");
const path = require("path");

const data = fs.readFileSync("src/lib/data.ts", "utf8");
const refs = [...data.matchAll(/"(\/images\/[^"]+)"/g)].map((m) => m[1]);
const extras = ["/images/brand/about.jpg", "/images/brand/logo.jpg"];
const all = [...new Set([...refs, ...extras])];
const missing = all.filter((p) => !fs.existsSync(path.join("public", p)));

console.log("Referenced unique image paths:", new Set(refs).size);
if (missing.length) {
  console.log("MISSING:\n" + missing.join("\n"));
  process.exit(1);
}
console.log("All referenced image paths exist.");
