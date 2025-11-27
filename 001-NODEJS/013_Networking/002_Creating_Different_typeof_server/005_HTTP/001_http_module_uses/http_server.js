import http from "node:http";

const server = http.createServer();

/*
 * Connection event is for specfic scenerio where we want,
 * access of lower level socket control.
 * But its not recommended to use in regular basis.
 * We use request event more than this one for handle http requests and responses
 */

server.on("connection", (socket) => {
  socket.end("HTTP \n\nHi from server");
  socket.on("error", (err) => {
    console.log(err);
  });
  /*
   * Here as the connection is emitting the tcp.socket,
   * we will get the headers along the data sent by the client.
   * unlike the 'request' event this include the TCP headers too
   * */
  socket.on("data", (chunk) => {
    console.log(chunk.toString());
  });
});

// request event is emitted when,
// a client request to the server

server.on("request", (req, res) => {
  console.log("got the request: ");

  // setting header
  res.setHeader("Content-Length", 17);

  // get the requested url
  console.log(req.url);

  /*
   * Here the tcp heaaders what we got in net module, will not be present
   * It will keep the only data sent by the client with request not the headers
   * Only the data part separeted by \n\n will appear here
   * */
  req.on("data", (chunk) => {
    console.log(chunk.toString());
  });

  // writing to the response stream
  res.write("hello from server");
});

server.on("error", (err) => {
  console.log(err);
});

server.listen(4000, "0.0.0.0", () => {
  console.log("this is server is listening at port 4000");
});
