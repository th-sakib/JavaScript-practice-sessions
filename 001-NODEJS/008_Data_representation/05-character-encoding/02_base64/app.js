
// a
// console.log(btoa("a"))
const buffer = Buffer.from([0xFF, 0xA0, 0x00]);
console.log(buffer.buffer);

// ⚠ Attempt to decode as UTF-8 text
console.log(buffer.toString('utf8'));  // prints garbage or throws error

// ✅ Encode as Base64
console.log(buffer.toString('base64')); // "/6AA"