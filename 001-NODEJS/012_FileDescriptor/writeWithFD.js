import fs from "node:fs";

const fd = fs.openSync("text.txt", "w"); // open text.txt in write mode

fs.write(fd, "🐸", (err, byteWritten, writtenData) => {
  if (err) console.log(err);
  console.log(byteWritten);
  console.log(writtenData);
});
