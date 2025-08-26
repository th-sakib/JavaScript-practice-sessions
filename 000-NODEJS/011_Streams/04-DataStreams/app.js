import process from "process";  // but again, usually unnecessary

// writable stream
// console.log(process.stdin);

// readable stream
// console.log(process.stdout);
// console.log(process.stderr);

process.stdout.write("Am I a console.log()? \n");

process.stdin.on("data", (chunk) => {
  console.log(chunk.toString());
})