const meta = import.meta;

// we can destructure the filename and dirname
const { filename: __filename, dirname, resolve: resolveFn, url } = meta;

console.log(__filename, "\n\n\n", dirname);
// console.log(meta);

// const a = process.cwd() // not suitable for finding the filename and dirname, Its for current working directory.
// console.log("FROM CWD: ", a);

/* 
// import.meta [log]
[Object: null prototype] {
  dirname: '/mnt/d/codes/web-dev/JavaScript/JS-Practice/000-NODEJS/02_ESM',
  filename: '/mnt/d/codes/web-dev/JavaScript/JS-Practice/000-NODEJS/02_ESM/getFilenameInESM.js',
  resolve: [Function: resolve],
  url: 'file:///mnt/d/codes/web-dev/JavaScript/JS-Practice/000-NODEJS/02_ESM/getFilenameInESM.js'
}
*/