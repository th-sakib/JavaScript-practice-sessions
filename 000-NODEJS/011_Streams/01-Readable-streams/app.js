import fs from "node:fs/promises";

const contentBuf = await fs.readFile("./chars.txt");
console.log(contentBuf.byteLength)
console.log(contentBuf.toString())
