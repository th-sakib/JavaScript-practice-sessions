import net from "node:net";

// Create server
const server = net.createServer();

const userList = [];

process.stdin.on("data", (data) => {
  // const userId = data.toString().split(" ")[0];
  // const msg = data.toString().split(" ").pop(data.toString().split(" ")[0]);
  // userList[userId].write(msg);
  const usernameFromServer = data.toString().split(" ")[0];
  const msg = data
    .toString()
    .split(" ")
    .slice(1)
    .toString()
    .replaceAll(",", " ");

  userList.forEach((user) => {
    if (user.username === usernameFromServer) {
      user.socket.write(msg);
    }
  });
});

server.on("connection", (socket) => {
  // Here the **net.socket** is a duplex stream unlike dgram.socket.
  socket.on("data", (data) => {
    // setting the database
    const usernameAndSocket = {
      username: data.toString().trim(),
      socket,
    };
    userList.push(usernameAndSocket);

    // show message
    console.log(
      `\ndata from client ${socket.remoteAddress}: ${socket.remotePort}: \n`,
      data.toString(),
      "\n",
    );

    // show client message to another client
    userList.forEach((user) => {
      const usernameFromClient = data.toString().split(" ")[0];
      const msg = data
        .toString()
        .split(" ")
        .slice(1)
        .toString()
        .replaceAll(",", " ");

      if (user.username === usernameFromClient) {
        user.socket.write(msg);
      }
    });

    socket.write("Yes. Your message reached me.");
    // socket.end("HTTP\n\n Got your message");
  });

  // console.log(socket.address());

  // get information about client
  // console.log("client address", socket.remoteAddress);
  // console.log("client port", socket.remotePort);

  // Send data to client
  // socket.write("Got your message.");

  socket.on("close", () => {
    console.log(socket.remoteAddress, ": Cleint has been terminated!!!");
  });

  socket.on("error", (err) => {
    console.error("error from server: ", err);
  });
});

server.listen(4000, "0.0.0.0", () => {
  console.log("server is listening at port 4000");
});
