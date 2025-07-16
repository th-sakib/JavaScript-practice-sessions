import fs from 'node:fs/promises'

setInterval(() => {
    fs.writeFile("./timer.txt", new Date().toLocaleTimeString());

}, 1000)