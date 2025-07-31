// ক
// 11100000 10100110 10010101 => with headers.
// 100110 010101 => actual binary.

import fs from "node:fs/promises";

const contentBuffer = await fs.readFile("./text.txt")

console.log(contentBuffer);