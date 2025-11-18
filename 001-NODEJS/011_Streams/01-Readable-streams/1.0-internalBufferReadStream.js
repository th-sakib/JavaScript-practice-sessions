import fs from 'fs';

// Internal buffer = a linked-list queue that stores chunks (Buffer, string, or object).
// It keeps filling until either:
//   - the highWaterMark limit is reached (max threshold), OR
//   - there is no more data from the source (EOF).

const readable = fs.createReadStream('chars.txt', { highWaterMark: 4 });

// 'readable' event fires when there is data in the internal buffer
// ready to be consumed via .read().
readable.on("readable", () => {
  console.log("start buffer length:", readable.readableLength);

  // Consume 1 byte (returns a Buffer with 1 byte)
  console.log("read:", readable.read(1));

  // Remaining buffered length after consuming
  console.log("end buffer length:", readable.readableLength);
});

readable.on("end", () => {
  console.log("No more data.");
});
