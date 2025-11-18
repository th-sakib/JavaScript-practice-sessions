import http from "node:http";

// We don't create client in node js apps
// Tho this is written in the browser to send request to the server.
const clientRequest = http.request({ method: "POST" });

// here res is a readable stream
clientRequest.on("response", (res) => {
  res.on("data", (chunk) => {
    console.log(chunk.toString());
  });
});
