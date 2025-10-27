import http from "node:http";
import fs from "node:fs/promises";
import mime from "mime";

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    // serveHTML(req, res);
  } else {
    try {
      const [url, query] = req.url.split("?");
      // opening the file
      const fileHandle = await fs.open(`./storage${decodeURIComponent(url)}`);
      const stats = await fileHandle.stat();

      // if Directory do show content as html
      if (stats.isDirectory()) {
        // serveHTML(req, res);
      } else {
        // extracting query params from the query string and url
        const [url, queryString] = req.url.split("?");

        let queryParams = {};

        const mimeType = mime.getType(url);

        // http://localhost:4000/images?mode=open&lode=meaw
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
      res.end("file not found");
    }
  }
});

async function serveHTML(req, res) {
  const [url, query] = req.url.split("?");
  const directoryContent = await fs.readdir(`./storage${url}`);

  // generating direcotoryContent to viewable HTML
  let dynamicHTML = "";
  directoryContent.forEach((content) => {
    dynamicHTML += `<div>${content} <a href="${
      url === "/" ? "" : url
    }/${content}?mode=open">Open</a> <a href="${
      url === "/" ? "" : url
    }/${content}?mode=download">Download</a></div>`;
  });

  const boilerplateHTML = await fs.readFile("./boilerplate.html");
  const newBoilerplateHTML = boilerplateHTML
    .toString()
    .replace("${dynamicHTML}", dynamicHTML);
  res.end(newBoilerplateHTML);
}

server.listen(4000, "0.0.0.0", () => {
  console.log("server is on the bizz");
});
