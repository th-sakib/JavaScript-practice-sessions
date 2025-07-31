import fs from "node:fs/promises";

// FS readfiel gives us buffer | nodejs's Buffer
const readedFile = await fs.readFile('text.txt');
// console.log(readedFile); // <Buffer 61 62 41 42>

/**
 * - The data or response comes and go to a server is form of *Buffer*
 * 
 * - But incase the response file or any other file that has bigger size then,
 * it will occupy huge chunk of the memory (RAM). thats why we need streams.
 */
