// import fs from "fs"

// ****************** Synchronous way of reading data ******************

// == This returns buffer so we need to conver that into string. ==
// const contentBuffer = fs.readFileSync('./index.html');
// const content = contentBuffer.toString();

// == This returns actual content | no buffer ==
// const content = fs.readFileSync('./index.html', "utf-8");

// == This returns buffer too | it works **Asynchronously** ==
// fs.readFile("./index.html", "utf-8", (err, data) => {
//     console.log(data);
// })

// ****************** Asynchronous way of reading data ******************

// == we have a promise based fs module by nodejs ==
import fs from "fs/promises";
// const contentBuffer = await fs.readFile('./index.html', "utf8");
const content = await fs.readFile("./index.html", "utf8");
const stats = await fs.stat("./index.html");
console.log(stats);

export default content;

