console.log(process.stdin.fd);
console.log(process.stdout.fd);
console.log(process.stderr.fd);

/*
 * This data stream always get assigned with file descriptor:
 * stdin => 0
 * stdout => 1
 * stderr => 2
 */
