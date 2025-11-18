import http from "node:http";
import fs from "node:fs/promises";
import mime from "mime";
import { createWriteStream } from "node:fs";

const server = http.createServer(async (req, res) => {
  console.log(req.method);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");

  if (req.method === "GET") {
    if (req.url === "/") {
      serveDirsContents(req, res);
    } else {
      try {
        const [url, query] = req.url.split("?");
        // opening the file
        const fileHandle = await fs.open(`./storage${decodeURIComponent(url)}`);
        const stats = await fileHandle.stat();

        // if Directory do show content as html
        if (stats.isDirectory()) {
          serveDirsContents(req, res);
        } else {
          // extracting query params from the query string and url
          const [url, queryString] = req.url.split("?");
          const mimeType = mime.getType(url);

          let queryParams = {};
          queryString.split("&").forEach((queryParamString) => {
            const [key, value] = queryParamString.split("=");
            queryParams[key] = value;
          });

          // reading the file
          const readStream = fileHandle.createReadStream();

          res.setHeader("Content-Type", mimeType);
          res.setHeader("Content-Length", stats.size);
          if (queryParams.mode === "download") {
            // Content-Disposition: inline; says the file should be previewed
            // Content-Disposition: attachment; means the file should be downloaded
            res.setHeader(
              "Content-Disposition",
              `attachment; filename=${url.slice(1)}`
            );
          }

          readStream.pipe(res);
        }
      } catch (error) {
        console.error(error);
        res.end("file not found");
      }
    }
  } else if (req.method === "POST") {
    // creating the stream in /storage directory
    const writeStream = createWriteStream(`./storage/${req.headers.filename}`);

    // writing the file into the stream
    req.pipe(writeStream);
    // req.on("data", (chunk) => {
    //   writeStream.write(chunk);
    // });
    req.on("end", () => {
      res.end("File uploaded");
    });
  } else if (req.method === "OPTIONS") {
    res.end("ok option");
  } else if (req.method === "DELETE") {
    req.on("data", async (chunk) => {
      try {
        await fs.rm(`./storage/${chunk}`);
        res.end("removed");
      } catch (error) {
        console.error(error);
      }
    });
  } else if (req.method === "PATCH") {
    req.on("data", async (chunk) => {
      const { oldName, newName } = JSON.parse(chunk.toString());
      try {
        const result = await fs.rename(
          `./storage/${oldName}`,
          `./storage/${newName}`
        );
        console.log(result);
        res.end("rename successfull");
      } catch (error) {
        console.error("rename error on server: ", error);
      }
    });
  }
});

async function serveDirsContents(req, res) {
  const [url, query] = req.url.split("?");
  const directoryContent = await fs.readdir(`./storage${url}`);

  res.end(JSON.stringify(directoryContent));
}

server.listen(4000, () => {
  console.log("server is on the bizz");
});
