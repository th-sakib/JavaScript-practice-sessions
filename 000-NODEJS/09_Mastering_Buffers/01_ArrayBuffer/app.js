// #### creating Array buffer, using ArrayBuffer constructor ####
const buffer = new ArrayBuffer(4);

// #### creating DataView, using the buffer we created earlier ####
const view = new DataView(buffer);
// This view object now contain some usefull methods in its prototype. Which we can use and read-write the ArrayBuffer content.

// writting value in ArrayBuffer using the view.
view.setInt8(0, 90); // store decimal value 80 into the buffer
view.setInt8(1, 0x50); // store hex value 80 into the buffer
view.setInt8(2, 0o20); // store octal value 80 into the buffer
view.setInt8(3, 0b101010); // store binary value 80 into the buffer

// reading value in ArrayBuffer using the view.
console.log(view.getInt8(0)) // 90 
console.log(view.getInt8(1)) // 80
console.log(view.getInt8(2)) // 16
console.log(view.getInt8(3)) // 42