/**
 * Octal number system
  05642 => octal

  2 x 8 ^ 0 = 2
  4 x 8 ^ 1 = 32
  6 x 8 ^ 2 = 384
  5 x 8 ^ 3 = 2560
            ------
              2978 => decimal

 */
// const octalNumber = 012; // error => old syntax
const octalNumber = 0o12; // octal value
const octalNumber2 = 0O12; // octal value 2 with capital "O"

// === convert octal to decimal ===
console.log(0o12); // give output as decimal number.
const decimalFromOctal = parseInt(12, 8) // coverts octal to decimal. the 8 is the base which we passed in the second arg.

const num = 0o34
num.toString(8); // converts the varibale octal value to decimal number system