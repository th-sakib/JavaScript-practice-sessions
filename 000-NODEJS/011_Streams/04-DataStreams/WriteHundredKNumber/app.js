import fs from "node:fs";

console.time();

// for (let i = 1; i <= 100000; i++) {
//   if (i === 1) {
//     fs.writeFileSync("./100Knumber.txt", `${i}, `);
//   } else {
//     fs.appendFileSync("./100Knumber.txt", `${i}, `);
//   }
// } // 630 ms

// const writable = fs.createWriteStream("./100Knumber-withStreams.txt");
//
// for (let i = 1; i < 100000; i++) {
//   writable.write(`${i}, `);
// }
//
// writable.end(); // 31 ms
//
// console.timeEnd();

const fd = fs.openSync("test.txt", "w");

for (let i = 1; i <= 100000; i++) {
  fs.writeSync(fd, `${i}, `); // 188ms
}
fs.closeSync(fd);

console.timeEnd();

/*
 * The `fs.writeFile and fs.appendFile` opens the file everything it is called,
 * As it is not efficiant to open and close a file everytime we write a file. It takes so much time to perform this operations.
 *
 *
 * On the other hand with `fs.createWriteStream` the file is opened only the first time it is called,
 * Thats why it takes less time then `fs.writeFileSync`.
 *
 * Also stream won't write one number at a time. As it will use its **internal buffer**.
 * the process becomes more robust and fast, because the RAM is faster then disc. and 64 KB will write in the disc at a time.
 *
 * */
