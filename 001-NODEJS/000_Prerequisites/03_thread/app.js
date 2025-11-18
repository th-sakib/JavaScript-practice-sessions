const { Worker } = require("worker_threads");

new Worker("./a");
new Worker("./b");
new Worker("./c");

// for (let i = 0; i < 1000000000; i++) {
//   if (i % 400000000 == 0) {
//     console.log(`Running loop 1 ${i}`);
//   }
// }

// for (let i = 0; i < 1000000000; i++) {
//   if (i % 400000000 == 0) {
//     console.log(`Running loop 2 ${i}`);
//   }
// }

// for (let i = 0; i < 1000000000; i++) {
//   if (i % 400000000 == 0) {
//     console.log(`Running loop 3 ${i}`);
//   }
// }
