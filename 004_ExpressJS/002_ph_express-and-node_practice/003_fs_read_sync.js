import fs from "fs";

// read with sync method
const content = fs.readFileSync("./002_cli_with_argv.js", "utf8");
// console.log(content);

// usign read async
fs.readFile("./002_cli_with_argv.js", "utf8", (err, data) => {
  if (err) {
    console.error("error: \n", err);
  }
  // console.log("async data =====================: ", data);
});

// sync version = fs.writeFileSync()
fs.writeFile("./test.txt", "abcdefg", (err) => {
  if (err) console.log("error", err);
  fs.appendFile("./test.txt", "\n123456789", (err) => {
    if (err) console.log("error", err);
  });

  fs.access("./test.txt", undefined, (err) => {
    if (err) console.log(err);
    fs.unlink("./test.txt", () => {
      if (err) console.log(err);
    });
  });
});

//delete if the file exists
// if (fs.existsSync("./test.txt")) {
// fs.rmdir("./test.txt", (err) => {
//   if (err) console.log("error", err);
// });
// fs.rm("./test.txt", (err) => {
//   if (err) console.log("error", err);
// });
// fs.unlinkSync("./test.txt");
// }
console.log(module.path());
