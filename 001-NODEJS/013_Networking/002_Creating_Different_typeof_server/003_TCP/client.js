import net from "node:net";

const netSocket = net.createConnection({ host: "192.168.1.101", port: 4000 });

// reading input from terminal
const stdin = process.stdin;
process.stdout.write("type your username: ");
let username = null;

stdin.on("data", (userInput) => {
  if (!username) {
    username = userInput.toString();
    netSocket.write(username);
  } else {
    netSocket.write(userInput.toString());
  }
});

netSocket.on("data", (chunk) => {
  console.log(chunk.toString());
});
