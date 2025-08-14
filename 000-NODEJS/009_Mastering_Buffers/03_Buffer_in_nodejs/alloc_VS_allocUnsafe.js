import { Buffer } from "node:buffer";

const buffer1 = Buffer.alloc(4)
const buffer2 = Buffer.allocUnsafe(4)
console.log(buffer1);
console.log(buffer2);

/**
 * Buffer.alloc() creates buffer and allocate every single byte as 0 or empty
 * Buffer.allocUnsafe() creates buffer and allocate random bytes into the buffers
 * 
 * Buffer.allocUnsafe() is much faster then Buffer.alloc()
 * Because Buffer.allocUnsafe() uses buffer pool(pre-allocated array buffer)
 */