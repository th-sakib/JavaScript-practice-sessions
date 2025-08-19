import fs from 'fs';

const readable = fs.createReadStream('chars.txt');

readable.read()