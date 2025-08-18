import fs from "fs";

// ------------------ just for showing progression ------------
const stats = fs.statSync("C:\\Users\\Sakib\\Downloads\\test.mp4");
const fileSize = stats.size;
// ------------------ just for showing progression ------------

/*
This `chars.txt` file is only 64 bytes which is not that much big of a deal
for memery to handle this small chunk of buffer.
*/
// const contentBuf = await fs.readFile("./chars.txt");
// console.log(contentBuf.byteLength)
// console.log(contentBuf.toString())

/*
But incase we have more bigger files. And for them to directly trying to read or write that file
will overwhelm our memory.

Because we have limited amount of memory, in my case I have (8GiB) of RAM.
> Also we can't use Buffer more than 2GiB.
*/

// const contentBigBuf = await fs.readFile("C:\\Users\\Sakib\\Downloads\\test.mp4");
// console.log(contentBigBuf.byteLength)
// console.log(contentBigBuf.toString())

// =========== using streams ============
// by default maxSize of one chunk is 54KB
// We can explicitely set this by using `highWaterMark` option
// in our case we are settin it to 100MB so one chunk contain 100 MB of buffer

const readStream = fs.createReadStream("C:\\Users\\Sakib\\Downloads\\test.mp4", { highWaterMark: 100 * 1024 * 1024 })

let countReadingStream = 0
let totalChunk = 0
let parcentage = 0;
readStream.on("data", (chunkBuffer) => {
    countReadingStream++;

    totalChunk += chunkBuffer.byteLength;
    parcentage = (totalChunk / fileSize) * 100;
    console.log(parcentage.toFixed(2) + "%");


    // fs.appendFile("testing.mp4", chunkBuffer, (err) => {
    //     if (err) throw err
    //     console.log("success");
    // })
});

readStream.on("end", () => {
    console.log(countReadingStream);
});