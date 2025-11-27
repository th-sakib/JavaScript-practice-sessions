#!/usr/bin/env node
import fs from "node:fs/promises"

// == get file path ==
const filePath = process.argv[2]
if (!filePath) {
    throw new Error("no file path given")
}

// == read file using the path ==
const content = await fs.readFile(`${filePath}`, 'utf8')

// Making the content array
const everyWords = content.match(/\b[A-Za-z]+\b/g);

// ###*** get user specified word count ***###
// getting the user specified word
const searchWord = process.argv[3]

let wordCount = {}
if (searchWord) {
    everyWords.forEach(word => {
        if (word === searchWord && (word in wordCount)) {
            wordCount[word] += 1
        } else if (word === searchWord) {
            wordCount[word] = 1
        }
    })
    console.log("Your given word found: ", wordCount);
}

// ###*** get every word count ***###
let wordsCount = {};
if (!searchWord) {
    everyWords.forEach((word) => {
        if (word in wordsCount) {
            wordsCount[word] += 1;
        } else {
            wordsCount[word] = 1;
        }
    })
    console.log(wordsCount);
}