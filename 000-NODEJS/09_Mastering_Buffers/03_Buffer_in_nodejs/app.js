/**
 * Buffer class is a subclass of Uint8Array() class,
 * and it extends methods that cover additional use cases
 */
import { Buffer } from 'node:buffer';

// ======== creating buffers using nodejs Buffer class ===========
// const nodeBuffer = new Buffer(4); // deprecated

const buffer = new ArrayBuffer(4);
const nodeBuffer = Buffer.from(buffer); // make node buffer using Array Buffer

// or we can use Buffer.aloc()
{
    const nodeBuffer = Buffer.alloc(4);
}

// practice 
{
    const buffer = new ArrayBuffer(4);
    const uint8array = new Uint8Array(buffer);
    const nodeBuffer = Buffer.from(buffer);
    uint8array[0] = 97;
    uint8array[1] = 98;
    uint8array[2] = 0x63;
    uint8array[3] = 0x64;
    console.log(nodeBuffer.buffer);
    console.log(nodeBuffer.toString("utf-8"));
}
