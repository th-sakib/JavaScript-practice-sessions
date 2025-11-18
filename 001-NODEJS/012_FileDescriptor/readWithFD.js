import fs from "node:fs";

const fd = fs.openSync("text.txt");

const readBuffer = Buffer.alloc(10); // creating a buffer of 10 byte

fs.read(
  fd,
  /*{ buffer: readBuffer }*/ /* or */ readBuffer,
  (err, bytesRead, buffer) => {
    console.log(err);
    console.log(bytesRead); // it's how much bytes have been read.
    console.log(buffer); // it's the buffer just it read.
  },
);

// syntax: fs.read(fd, buffer, offset, length, position, callback);
//
// with read method we have granular control over the file.
  // Because we can control how much length the read method should read. (length property)
  // We can set offset of the buffer. (offset property)
  // We can specify a ArrayBuffer like buffer where the data should be read into. (buffer property)
