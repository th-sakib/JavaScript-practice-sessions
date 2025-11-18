import fs from 'fs';
import { pipeline } from 'stream';

const readable = fs.createReadStream("C:\\Users\\Sakib\\Downloads\\test.mp4");
const writable = fs.createWriteStream("test.mp4");

// 2. ==== using pipe to read and write data ====
// piping connects readable and writable streams.
// piping handles backpressure autometically. Also end writing with writable.end().

// readable.pipe(writable);

// 3. ==== using pipeline =====
// Better error handling.
// And help connect more than two stream.
// Recommended by pros.
pipeline(readable, writable, (err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("Done piping");
  }
})

/*
// 1. == general way of doing reading and writing on streams ==

readable.on("data", (chunk) => {
  const canContinue = writable.write(chunk);

  if (!canContinue) {
    readable.pause();
  }
});

writable.on("drain", () => {
  readable.resume();
});

readable.on("end", () => {
  writable.end();
})
*/
