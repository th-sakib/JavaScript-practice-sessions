import http from "http";
import fs from "node:fs/promises";

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Content-Type", "text/txt");

  const fileHandle = await fs.open("./abc.txt");
  const readable = fileHandle.createReadStream({ highWaterMark: 1 });

  readable.on("data", (chunk) => {
    res.write(chunk);
    readable.pause();

    setTimeout(() => {
      readable.resume();
    }, 500);
  });

  readable.on("end", () => {
    res.end();
  });
});

server.listen(4000, "localhost", () => {
  console.log("Server Started at port 4000");
});
