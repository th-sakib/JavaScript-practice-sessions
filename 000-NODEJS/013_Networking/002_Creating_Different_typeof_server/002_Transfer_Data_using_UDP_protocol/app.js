import dgram from "node:dgram";
import { createWriteStream } from "node:fs";

const writeStream = createWriteStream("./Assets/image.jpg", {
  highWaterMark: 1000,
});
const socket = dgram.createSocket("udp4");

socket.on("message", (message, remoteInfo) => {
  if (message.toString() === "EOF") {
    socket.send("I got your message.", remoteInfo.port, remoteInfo.address);
    console.log(message.toString())
  } else {
    writeStream.write(message);
  }
});

socket.bind(4000, () => {
  console.log(socket.address());
});
