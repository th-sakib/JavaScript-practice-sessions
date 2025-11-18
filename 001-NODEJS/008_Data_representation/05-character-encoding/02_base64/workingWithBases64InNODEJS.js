import { writeFile } from "node:fs";
import fs from "node:fs/promises";

// btoa() in nodejs
const bufferContent = await fs.readFile("./exampletextForNODEJSWORKINGFILE.txt");
const base64encodedText = bufferContent.toString("base64");

// atob() in nodejs
await fs.writeFile("exampleWriteFile.txt", base64encodedText, "base64")

// coverting video to base64 string
const videoBuffer = await fs.readFile('./video/asdf.mp4');
const base64videostring = videoBuffer.toString('base64')

await fs.writeFile("temp.txt", base64videostring);