import fs from "node:fs";

// fs.open("text.txt", (err, fd) => {
//   if (err) {
//     console.log("error: ", err);
//   }
//   console.log(fd);
// });

// Access the default file descriptors (FDs) for this process
// // process.stdin.fd  → FD 0 (default: keyboard/terminal, e.g., /dev/pts/0)
// // process.stdout.fd → FD 1 (default: terminal, for normal output)
// // process.stderr.fd → FD 2 (default: terminal, for error output)

const fd1 = fs.openSync("text.txt"); // just the the `fs.open` but synchronous.
console.log(fd1)

