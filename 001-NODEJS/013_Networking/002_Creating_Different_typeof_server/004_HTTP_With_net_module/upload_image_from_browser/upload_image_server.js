import { createWriteStream } from "node:fs";
import net from "node:net";

const server = net.createServer();

server.on("connection", (socket) => {
  const writeStream = createWriteStream("./image.png");
  socket.on("data", (chunk) => {
    socket.write(`HTTP/1.1 200 OK\n\n`);

    console.log("hello workl");
    console.log(chunk.toString());
    // writeStream.write(chunk);
  });

  socket.on("error", (err) => {
    console.error("server error", err);
  });
});

server.listen(4000, () => {
  console.log("server is listening at port 4000");
});
