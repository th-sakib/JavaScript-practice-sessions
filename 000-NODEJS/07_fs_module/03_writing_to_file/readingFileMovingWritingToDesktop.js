import fs from "node:fs/promises";

try {
    const imageBuffer = await fs.readFile('./images.png')
    await fs.writeFile("C:\\Users\\Sakib\\Desktop\\image.png", imageBuffer)
} catch (error) {
    await fs.writeFile("./error.log", `message: ${error.message}\n\nstack: ${error.stack}`)
}