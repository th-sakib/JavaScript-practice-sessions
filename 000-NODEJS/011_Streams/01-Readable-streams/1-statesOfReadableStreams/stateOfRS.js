import fs from "fs";

const readStream = fs.createReadStream("chars.txt");
console.log("===== initial state =====");
console.log(readStream.readableFlowing); // null
console.log(readStream.readableEnded); // false
console.log(readStream.isPaused()); // false

readStream.on("data", () => { })
console.log("===== flowing state =====");
console.log(readStream.readableFlowing); // true
console.log(readStream.readableEnded); // false
console.log(readStream.isPaused()); // false

readStream.pause();
console.log("===== paused state =====");
console.log(readStream.readableFlowing); // false
console.log(readStream.readableEnded); // false
console.log(readStream.isPaused()); // true

readStream.on("end", () => { })
console.log("===== ended state =====");
console.log(readStream.readableFlowing); // true
console.log(readStream.readableEnded); // true
console.log(readStream.isPaused()); // false