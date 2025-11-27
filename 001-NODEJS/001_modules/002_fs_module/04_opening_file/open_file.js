import fs from "node:fs";

const buff = Buffer.allocUnsafe(10);

fs.open("./path.txt", "r", (err, fd) => {
  if (err) console.error(err);

  fs.read(fd, buff, (err, bytesRead, buffer) => {
    if (err) console.log(err);

    console.log("no promise", bytesRead);
    console.log("no promise", buffer);
  });
});

// ======== The promises version ==============
import fsPromise from "node:fs/promises";

const fileHandle = await fsPromise.open("./path.txt", "r+");

// == reading with the promises version ==
// const { bytesRead, buffer } = await fileHandle.read();
// console.log(bytesRead, buffer.toString());

// == writting with the promises version ==
const {bytesWritten, buffer} = await fileHandle.write("hello from promises version");
console.log(bytesWritten, buffer.toString());
fileHandle.close();
