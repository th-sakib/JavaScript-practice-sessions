import { Buffer, constants } from 'buffer';

Buffer.poolSize = 10000
const a = Buffer.alloc(4); // allocate new memory scace
const b = Buffer.allocUnsafe(4); // use pre-allocated buffer pool

console.log(constants.MAX_LENGTH);
console.log(constants.MAX_STRING_LENGTH);

// Buffer.allocUnsafe() uses a buffer pool, instead of initializing the memory. 
// Buffer pool is a pre-allocated memory its size generally, 8 KiB = 8192 byte

// console.log(a.byteLength);
// console.log(b.byteLength);
// console.log("####################################################");
// console.log(a.buffer);
// console.log(b.buffer);
// console.log(Buffer.poolSize);

/* 
*** if { buffer size < buffer pool size >>> 1 } (right shift 1)[we can say half of the pool size] ***
If this range is crossed then the old pool will be ignored and created new pool for the newer buffers.
*/

const c = Buffer.allocUnsafe(4095); // will allocate from the pool
const d = Buffer.allocUnsafe(3832);

const joinBuffers = Buffer.concat([c, d]) // join c and d buffer and creates new buffer and the new buffer use buffer pool

const e = Buffer.from('asdf'); // also use buffer pool

console.log(e.buffer);
console.log(d.buffer);

console.log(c.buffer === d.buffer); // true until the buffer pool is full
console.log(b.buffer === d.buffer); // true until the buffer pool is full
