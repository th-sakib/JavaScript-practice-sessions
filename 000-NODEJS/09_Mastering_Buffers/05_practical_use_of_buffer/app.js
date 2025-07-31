import fs from "node:fs/promises";

// FS readfiel gives us buffer | nodejs's Buffer
const readedFile = await fs.readFile('text.txt');
// console.log(readedFile); // <Buffer 61 62 41 42>
