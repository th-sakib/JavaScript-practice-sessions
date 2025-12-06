import config from "./config";
import { createServer, IncomingMessage, Server, ServerResponse } from "http";

// I'm explicitely telling the types. Though in general they are inferred
const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "msg from server",
          path: req.url,
        }),
      );
    }
  },
);

server.listen(config.port, () => {
  console.log(`server is running at port ${config.port}`);
});
