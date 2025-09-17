import fs from "node:fs/promises";

const fileHandler = await fs.open("./chars.txt");

const readable = fileHandler.createReadStream();
readable.on('data', (chunk) => {
  console.log(chunk.toString())
})
