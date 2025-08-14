// #### creating Array buffer, using ArrayBuffer constructor ####
const buffer = new ArrayBuffer(4);

// #### creating DataView, using the buffer we created earlier ####
const view = new DataView(buffer);
// This view object now contain some usefull methods in its prototype. Which we can use and read-write the ArrayBuffer content.

// writting value in ArrayBuffer using the view.
view.setInt8(0, 90); // store decimal value 80 into the buffer
view.setInt8(1, 0x50); // store hex value 50 into the buffer
view.setInt8(2, 0o20); // store octal value 20 into the buffer
view.setInt8(3, 0b101010); // store binary value 101010 into the buffer

// reading value in ArrayBuffer using the view.
// console.log(view.getInt8(0)) // 90 
// console.log(view.getInt8(1)) // 80
// console.log(view.getInt8(2)) // 16
// console.log(view.getInt8(3)) // 42

// ---
const buffer2 = new ArrayBuffer(4);
const view2 = new DataView(buffer2);

view2.setInt8(0, 255);
// console.log(view2.getInt8(0)); // -1 | getInt8 and setInt8. sets and gets value as SIGNED value.

// console.log(view2.getUint8(0)); // 255 | getUint8 gets value as UNSIGNED value.

view2.setUint8(1, 255);
// console.log(view2.getUint8(1)); // 255 | getUint8 and setUInt8. sets and gets value as UnSIGNED value.

view2.setInt8(1, 255);
// console.log(view2.getUint8(1)); // 255 | getUint8 and setUInt8. sets and gets value as UnSIGNED value.
// console.log(view2);

// ++++++++ Multiple Bytes ++++++++++
// we can use int16 (16 bits) to set and get those multiple bytes.
{
    const buffer = new ArrayBuffer(2);
    const view = new DataView(buffer);

    // ====== view.setInt16(byteOffset, value, ?isLittleIndian) ========
    view.setInt16(0, 0x2cd, true);
    // console.log(view.getUint16(0, true)); // return value in decimal
}
