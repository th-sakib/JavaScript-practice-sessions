// process object gives us information and control over the current nodejs process.
console.log(process.version);
console.log(process.platform);
console.log(100 - (process.availableMemory() / 1024 / 1024 / 1024) * 8) / 100; // getting free ram in percentage

/*
 * process.argv returns an array with
 * 1st property: the nodejs path where node js is installed also called `process.execPath`
 * 2nd property: the current js file which is executed
 * ...rest properties will be the arguments:
 *     suppost the command is `node intex.js one two`
 *     1st property: [the nodejs path]
 *     2st property: [the path of the current executed file]
 *     3rd property: one
 *     4th property: two
 * */
console.log(process.argv); //** returns the array of arguments from the cli command
