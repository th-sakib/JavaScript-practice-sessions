import { createReadStream } from "node:fs";
import http from "node:http";

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    const readStream = createReadStream("./public/index.html");
    readStream.pipe(res);
  } else if (req.url === "/favicon.ico") {
    const readStream = createReadStream(`./public/emoji.ico`);
    readStream.pipe(res);
  } else {
    const readStream = createReadStream(`./public${req.url}`);
    readStream.on("error", () => {
      res.end("not found");
    });
    readStream.pipe(res);
  }
});

server.listen(4000, "0.0.0.0", () => {
  console.log("server is listening at port 4000");
});
