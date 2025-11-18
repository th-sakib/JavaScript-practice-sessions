import fs from "node:fs";

const readable = fs.createReadStream("C:\\Users\\Sakib\\Downloads\\test.mp4", { highWaterMark: 100 * 1024 * 1024 })
const writable = fs.createWriteStream('testingwithwritableStream.mp4');

console.time();
readable.on("data", (chunk) => {
  fs.appendFile("testing.mp4", chunk, (err) => {
    if (err) throw err
  })

  // writable.writableHighWaterMark
  // writable.write(chunk)
})

readable.on("end", () => {
  console.timeEnd();
})

// let's see how much time it need to read and write one file

// with no writable streams
/**
 * Time = 9.789s
 * CPU usage = 5.2%
 * Memory = 413MB
 */

// with writable streams
/**
 * Time = 10.5s
 * CPU usage = 5.8%
 * Memory = more than 2GB [big jump but after that it goes to avarage 50MB]
 * when i test it later is goes farther and farther to 4GB
 */

// with writable streams **after backpressure is handled**.
/**
 * Time = 10.5s
 * CPU usage = 3.9%
 * Memory = 313MB
*/