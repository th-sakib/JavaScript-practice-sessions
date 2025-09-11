import process from "process"; // but again, usually unnecessary
import fs from "node:fs";
import { console } from "node:inspector";

// creating a writable stream
const writableStream = fs.createWriteStream("test.txt");

// writable stream
// console.log(process.stdin);

// readable stream
// console.log(process.stdout);
// console.log(process.stderr);

// This stdout is used by console.log() method in JS
// to print messages on terminal or consoles, its a writable stream
const isWritable = process.stderr.writable;
process.stdout.write("Am I a console.log()? \n");
process.stdout.write(`stderr is writable? : ${isWritable} \n`);

// We can listen to the data event of stdin(as it is an readable stream)
process.stdin.on("data", (chunk) => {
  // console.log(chunk.toString());
  writableStream.write(chunk);
});

console.log(process.stdin.fd);
console.log(process.stdout.fd);
console.log(process.stderr.fd);

/*
 * This data stream always get assigned with file descriptor:
 * stdin => 0
 * stdout => 1
 * stderr => 2
 */
