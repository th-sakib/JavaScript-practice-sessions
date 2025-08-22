/**
* When the internal buffer is full (or exceeded the highWaterMark threshold) on writable stream.
* It causes backpressure. Which should be handled.

* We can handle it by stoping the writting operation. using "break" if its a loop
* Or we can pause readable stream so that no chunks are send to the writable stream
* And resume when the inner buffer is drained(empty again).

* There is a event for that in writable stream called "drained".
*/

import fs from 'node:fs';

const readable = fs.createReadStream("C:\\Users\\Sakib\\Downloads\\test.mp4", { highWaterMark: 100 * 1024 * 1024 });
const writable = fs.createWriteStream("backpressure.mp4");

console.time();
readable.on("data", (chunk) => {
  // returns false when the inner buffer is full
  const isEmpty = writable.write(chunk);

  if (!isEmpty) {
    readable.pause();
  }
});

writable.on("drain", () => {
  readable.resume();
});

readable.on("end", () => {
  writable.end(); // close the file | trigger writable's "close " and "finish" event
  console.timeEnd();
})

// with writable streams **after backpressure is handled**.
/**
 * Time = 11.2s
 * CPU usage = 3.9%
 * Memory = 313MB not more than this
*/