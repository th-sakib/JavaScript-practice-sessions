/**
 * Hexadecimal number system
  0xa345 > Hex

  5 x 16 ^ 0 = 5
  4 x 16 ^ 1 = 64
  3 x 16 ^ 2 = 768
  a x 16 ^ 3 = 40960
            ---------
              41797 => decimal

 */
const hex = 0xa345; // if we hover in the variable we can see the value in decimal.

// === converting decimal number into hexadecimal ===
const decimalNum = 41797;
const hexNum = decimalNum.toString(16);
console.log(hexNum);