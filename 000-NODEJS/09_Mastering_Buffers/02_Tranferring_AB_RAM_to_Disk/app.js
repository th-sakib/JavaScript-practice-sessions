import fs from 'node:fs/promises';

const uint8array = new Uint8Array(8);
uint8array[0] = 0x53;
uint8array[1] = 0x61;
uint8array[2] = 0x6b;
uint8array[3] = 0x69;
uint8array[4] = 0x62;

fs.writeFile('buffer-text.txt', uint8array.subarray(0, 5), "utf-8");
// If we want we can send this from our server as a response and anyone can read this buffers.


// const decoder = new TextDecoder("utf-8");
// const decodedText = decoder.decode(uint8array)
// console.log(decodedText);