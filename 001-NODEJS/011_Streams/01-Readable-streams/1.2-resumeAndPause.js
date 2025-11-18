import fs from "fs";

const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });

readStream.on("data", (chunk) => {
  if (readStream.readableHighWaterMark === readStream.bytesRead) {
    fs.writeFileSync("pause_And_resumesHelper.txt", chunk);
  } else {
    fs.appendFileSync("pause_And_resumesHelper.txt", chunk);
  }

  readStream.pause()
  // setTimeout(() => {
  //   readStream.resume();
  // }, 100);
});

readStream.on("resume", () => { // resume event
  console.log("resume");
})

readStream.on("pause", () => { // pause event
  setTimeout(() => {
    readStream.resume();
  }, 200)
})