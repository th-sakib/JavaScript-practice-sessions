// === creating typed arrays ===
const a = new ArrayBuffer(8);
const buffer = a.transfer(); // a Array buffer is detached to 'buffer' variable
// const buffer = new ArrayBuffer(8, { maxByteLength: 20 }); // we can specify maximum Byte length

const int8 = new Int8Array(buffer);
const int16 = new Int16Array(buffer);
const int32 = new Int32Array(buffer);
// const bigInt64 = new BigInt64Array(buffer);

const uint8 = new Uint8Array(buffer);
const uint16 = new Uint16Array(buffer);
const uint32 = new Uint32Array(buffer);
// const bigUint32 = new BigUint64Array(buffer);

const float32 = new Float32Array(buffer);
// const float64 = new Float64Array(buffer);

// -- We don't event need ArrayBuffer constructor --
const int8two = new Uint8Array(4); // autometically created ArrayBuffer with byteLength 4
int8two[0] = 0xe7;
int8two[1] = 0b10100110;
int8two[2] = 0;
int8two[3] = 0x23;

// -- We don't even have to do those manual assignments --
const int8WithArray = new Uint8Array([0xe7, 0b10100110, 0, 0x23]); // ✅🤯
// console.log(int8WithArray);