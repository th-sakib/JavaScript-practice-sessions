import fs from 'node:fs/promises'

// == creating new or overwriting the existing file ==
await fs.writeFile('./text.txt', "hello");

// == creating new or appending to the existing file ==
await fs.appendFile("./test2.txt", "hola amigo");
await fs.appendFile("./test2.txt", "\nkayse ho thik ho?");

setInterval(() => {
    fs.writeFile("./timer.txt", new Date().toLocaleTimeString());
}, 1000)