const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "text.txt"); // used because fs module text.txt path couldn't resolve
// idk why the "fs" module was directing to the parent path then 'text.txt' if i dont use "path" module
const readFile = fs.readFileSync(filePath);
console.log("this is global: ", globalThis);
console.log("global var: ", global);

// write file
fs.writeFileSync(filePath, "hehehehehehhehehe");
fs.writeFileSync(filePath, "meaw meaw");
fs.renameSync(filePath, path.join(__dirname, "hell.txt"));

console.log(readFile.toString());
