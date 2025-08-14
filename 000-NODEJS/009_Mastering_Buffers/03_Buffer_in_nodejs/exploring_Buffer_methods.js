import { Buffer } from 'node:buffer';
import fs from "node:fs/promises";

const buffer1 = Buffer.from("Hello world");
const buffer2 = Buffer.alloc(8);
buffer2[0] = 97;
buffer2[1] = 98;
buffer2[2] = 99;
buffer2[3] = 100;
buffer2[4] = 101;
buffer2[6] = 103;
buffer2[7] = 104;

// decoding buffer with Buffer.toString()
// console.log(buffer2.toString("utf-8")); // abcdegh | null value skipped
fs.writeFile('text.txt', buffer2); // writes the buffer in the file INCLUDING the null

buffer2.write("xyz"); // write the buffer from offset 0
buffer2.toJSON(); // make the buffer into json like object

// const res = buffer2.slice(3) // buffer.slice method is | DEPRECATED
const res = buffer2.subarray(3) // buffer.slice method is deprecated
const buf2 = Buffer.alloc(8)

buffer2.copy(buf2, 0, 0, 5)
console.log(buf2.toString());

const isIncluded = buf2.includes("xyz", 0, 'utf8')
// console.log(isIncluded);

buf2.fill(98) // fill the buffer bytes