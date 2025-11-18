import fs, { openSync } from "node:fs";

const url =
  "/home/minter/Downloads/kolden-tutorial-de-vinci/10-ColorTab/10. Magic Mask Color Tab Kolder Creative.mp4";

// console.time();
//
// const readable = fs.createReadStream(url);
// const writable = fs.createWriteStream("tutorial.mp4");
//
// readable.on("data", (chunk) => {
//   // console.log(chunk)
//   writable.write(chunk, (err) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });
//
// readable.on("end", () => {
//   console.timeEnd(); // 310 ms
// });
// =======================================
const fd = openSync(url);

console.time()
fs.readSync(fd);
console.timeEnd()
// TODO: create custom readable stream. basically use fs.open and fs.read to emited readable stream.
