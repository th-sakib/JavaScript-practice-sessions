import fs from "node:fs";

console.time();

const writable = fs.createWriteStream("./100Knumber-withStreams.txt", {
  highWaterMark: 16 * 1024,
});

for (let i = 1; i < 100000; i++) {
  writable.write(`${i}, `);
}

writable.end(); // 31 ms

console.timeEnd();
