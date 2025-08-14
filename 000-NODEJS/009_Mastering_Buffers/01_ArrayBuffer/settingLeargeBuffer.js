const arrayBuffer = new ArrayBuffer(1.99 * 1024 * 1024 * 1024); // almost 2GiB
const view = new DataView(arrayBuffer)

for (let i = 0; i < arrayBuffer.byteLength; i++) {
    view.setInt8(i, i + 1)
} // increases memory(RAM) uses 
console.log(view);