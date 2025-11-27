import path from "path";
import url from "url";
// const path = require("path");

// in common js we can access dirName and fileName like this:
// const filename = __filename;
// const dirname = __dirname;

const filename = import.meta.filename;
const dirname = import.meta.dirname;

// before node v20 | OLD AGE way to retrieve file/directory names
//* there was not any import.meta.filename/dirname
const primitiveAgedFilename = url.fileURLToPath(import.meta.url);
const primitiveAgedDirname = path.dirname(primitiveAgedFilename);
