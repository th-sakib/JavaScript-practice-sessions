import fs from "node:fs";

const readable = fs.createReadStream('chars.txt', {
  highWaterMark: 4,
  encoding: "utf8",
});

// set encoding
// readable.setEncoding("utf8");

// data event => fire immedietly and put to flowing mode
readable.on("data", (chunks) => {
  console.log(chunks);

  // destroy will destroy data flowing and pass error message as payload
  readable.destroy(new Error("testing"));
});

// close event => fire when the readable stream is closed
readable.on("close", () => {
  console.log("closed");
})

// error event => fire when error occurs
readable.on("error", (err) => {
  console.log(err);
})

// open event => fire when file opens
readable.on("open", (filedescriptor) => {
  console.log(filedescriptor);
})

// ready event => fire when idk... :)
readable.on("ready", (data) => {
  console.log(data);
})