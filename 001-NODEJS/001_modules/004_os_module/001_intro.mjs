import os from "os";

/*
 * The "os" module gives us set of uitilities for interacting with the underlaying operating system.
 *
 * I'll keep the outputs in comment remember the output is for my current device
 * */

//* Get CPU Architechture
const arch = os.arch(); // x64

//* Get platform information
const platform = os.platform(); // linux

//* Get OS Type
//Returns the operating system name as returned by uname on POSIX systems, or from the ver command on Windows.
const type = os.type(); // linux

//* Get the OS release number
const release = os.release(); // 6.6.87.2-microsoft-standard-WSL2

//* Get kernel version
const kernelVersion = os.version(); // #1 SMP PREEMPT_DYNAMIC Thu Jun  5 18:30:46 UTC 2025

// ====== user info ==========
//* get the information about current user
console.log(os.userInfo());
// Get the home directory
const homeDir = os.homedir();
console.log(`Home Directory: ${homeDir}`);
// Get the system hostname
const hostname = os.hostname();
console.log(`Hostname: ${hostname}`);
console.log(os.tmpdir());

// ==== system resources =======
// * get cpu information
// Returns array of objects containing information about each logical CPU core
console.log(os.cpus().length);

//* get total memory
console.log(
  "total memory",
  `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GiB`,
);
//* get free memory
console.log(
  "free memory",
  `${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GiB`,
);
console.log("hour: ", Math.floor(os.uptime() / 60 / 60));
console.log("min: ", Math.floor((os.uptime() % 3600) / 60));
