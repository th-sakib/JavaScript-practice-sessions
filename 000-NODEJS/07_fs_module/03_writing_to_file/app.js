import fs from 'node:fs/promises'

// == write file using 
await fs.writeFile('./text.txt', "hello");