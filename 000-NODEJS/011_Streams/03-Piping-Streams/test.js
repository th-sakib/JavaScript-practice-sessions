import fs from "fs";

const readable = fs.createReadStream("pipeline.md");
const writable = fs.createWriteStream("testy.txt");

readable.on("data", (chunk) => {

  writable.cork()
  console.log(chunk);
  writable.write(chunk)
})

readable.on("close", () => {
  writable.end()
})