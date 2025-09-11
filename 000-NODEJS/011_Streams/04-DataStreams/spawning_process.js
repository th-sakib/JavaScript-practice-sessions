import { spawn } from "child_process";

const childProcess = spawn("cat", ["test.txt"]);
childProcess.stdout.on("data", (chunk) => {
  console.log(chunk.toString())
})

// running child process from parent process
const childNodeProcess = spawn("node", ["test.js"]);
childNodeProcess.stdout.on('data', (chunk) => {
  console.log(chunk.toString())
})
