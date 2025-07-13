// trying to replicate require() function in nodejs
const math = loadModule('./sum')

function loadModule(path) {
    const vm = require('vm')
    const fs = require('fs');

    // const resolvedPath = __dirname + path + ".js"
    if (!path.endsWith(".js")) {
        path = path + ".js";
    }

    const content = fs.readFileSync(path).toString();
    const fly = {};
    // wrap with wrapper function
    (function (__filename, __dirname, fly, module) {
        // eval(content)
        vm.runInNewContext(content, { fly, loadModule, console })
    })(__filename, __dirname, fly, module)
    return fly
}
