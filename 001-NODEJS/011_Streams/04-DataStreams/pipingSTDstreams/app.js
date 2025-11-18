/*
- So, the 'anotherApp.js` is writing to the Terminal (stdout).
- We can just pipe that to our `app.js` which is this file.
- `node anotherApp.js | node app.js`.
- We used "|" pipe sysmbol which pipe `anotherApp.js` stdout to `app.js` stdin.
- Now we can read this data from stdin of `app.js`.

- This pipe (|) is just pipe the stdout not stderr.
 * */
process.stdin.on("data", (chunk) => {
  console.log("from app.js: ", chunk.toString());
})


