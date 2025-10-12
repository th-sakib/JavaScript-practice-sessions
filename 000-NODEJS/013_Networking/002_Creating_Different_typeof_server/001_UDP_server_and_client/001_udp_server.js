import dgram from "node:dgram";

const socket = dgram.createSocket("udp4");

// This listening event only occusrs when the socket is ready to recieve data
// 1. while socket.bind()
// 2. first time of calling  socket.send() 
// This event is useless if we pass callback to the socket.bind(() => {});
////
// socket.on('listening', () => {
//   console.log(socket.address());
//   // console.log(socket.remoteAddress());
// });

socket.on("message", (msg, rinfo) => {
  console.log("running message event")
  console.log(msg.toString());

  console.log(rinfo.port)
  console.log(rinfo.address)
  console.log(rinfo.family)
  console.log(rinfo.size)

  // Sending message the client
  socket.send("yes I got something from you", rinfo.port, rinfo.address);
});

socket.bind(3000, () => {
  console.log(socket.address());
  console.log(`Server is listening at port: ${socket.address().port}`)
  // console.log(socket.remoteAddress());
});
