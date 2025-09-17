import fs from "node:fs";

console.time();

const fd = fs.openSync("text.txt", "w+");
const buff = Buffer.allocUnsafe(16 * 1024);
let totalByteWrittenInBuff = 0;
let lostByte = "";

for (let i = 1; i <= 100000; i++) {
  let str = `${i}, `;
  str = lostByte + str;

  const byteWritten = buff.write(str, totalByteWrittenInBuff);

  // if buff writes less character than the string. then storing the lost bytes.
  if (str.length !== byteWritten) {
    lostByte = str.slice(byteWritten);
  } else {
    lostByte = "";
  }

  // tracking how bytes are written in the buff. resetting it when buff content is written in the disc.
  totalByteWrittenInBuff += byteWritten;

  if (totalByteWrittenInBuff === buff.byteLength) {
    fs.writeSync(fd, buff);
    totalByteWrittenInBuff = 0;
  }
}
fs.writeSync(fd, buff.subarray(0, totalByteWrittenInBuff) + lostByte);
// fs.writeSync(fd, buff);
// fs.writeSync(fd, lostByte);

console.log(buff);
fs.closeSync(fd);

console.timeEnd(); // 12.9 ms
// TODO: implement writable and readable stream & connect them.
