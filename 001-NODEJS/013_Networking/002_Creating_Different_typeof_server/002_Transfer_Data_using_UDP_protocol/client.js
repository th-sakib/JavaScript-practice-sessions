import dgram from "node:dgram";
import { createReadStream } from "node:fs";
import { readFile } from "node:fs/promises";

const bigFilePath = "/home/linth/Downloads/Untitled.jpg";
// const content = await readFile(bigFilePath);

// Theorically UDP size limit is 65535 bytes
// But in practical 1472 bytes throw error
const readStream = createReadStream(bigFilePath, { highWaterMark: 1000 });

const socket = dgram.createSocket("udp4");

// getting the servers response
socket.on("message", (msg, rinfo) => {
  console.log(msg.toString());
  socket.close();
});

// reading and sending the file info in server
readStream.on("data", (chunk) => {
  socket.send(chunk, 4000, "192.168.1.102", (error, bytes) => {
    if (error) console.log(error);
    console.log("data sent", bytes);
  });
});

readStream.on("end", () => {
  socket.send("EOF", 4000, "192.168.1.102", (error, bytes) => {
    if (error) console.log(error);
  });
});
