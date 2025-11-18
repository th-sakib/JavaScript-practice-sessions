import { createReadStream } from "node:fs";
import net from "node:net";

const server = net.createServer();

// The HTTP\n\n is something chrome or chromium based browesers,
// understand that the TCP request is following http response.
// While without it, it doesn't show the content.
server.on("connection", (socket) => {
  // sending response to the client
  // Although we are just writting to the stream
  // the HTTP message will tell the browser it is a valid http response
  // socket.end(`HTTP/1.2\n\nHello`);

  // let's try to send a file instead
  // reading from the disc and piping it to the writable stream(the socket is a duplex stream)
  // *** This part before \n\n is the set the HEADERs; ***
  //
  // socket.write("HTTP/1.1 200 OKAYAAAY\nAccess-Control-Allow-Origin:*\n\n");
  // cleaner way to set headers
  socket.write("HTTP/1.1 \n");
  socket.write("Access-Control-Allow-Origin: * \n");
  socket.write("Access-Control-Expose-Headers: *")
  socket.write("\n\n");

  const filePath =
    "/home/linth/Downloads/Gemini_Generated_Image_gp4gzxgp4gzxgp4g.png";
  const readable = createReadStream(filePath);

  readable.pipe(socket);
  readable.on("end", () => {
    console.log("file end")
  });

  /*
   * When browser send request to the server (which is this server, in our case)
   * We can see the request.
   */
  socket.on("data", (chunk) => {
    console.log(chunk.toString());
  });
  /*
   * The message shows its a get reuest. And many more information about the client (browser)
   *
   * */

  // error handling
  socket.on("error", (err) => {
    console.error("error on the server: \n", err);
  });
});

server.listen(4000, () => {
  console.log(`server is listening at port 4000`);
});
