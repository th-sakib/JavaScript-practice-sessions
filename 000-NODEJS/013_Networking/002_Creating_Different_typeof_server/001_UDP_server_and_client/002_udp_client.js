import dgram from "node:dgram";

const socket = dgram.createSocket("udp4");

socket.on("message", (msg, rinfo) => {
  console.log(msg.toString());

  console.log(rinfo.port);
  console.log(rinfo.address);
});

socket.send("hello from client", 3000, "192.168.1.102", (err, bytes) => {
  if (err) console.log(err);
  console.log(bytes);
});
