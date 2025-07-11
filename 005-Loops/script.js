// 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
// *
// * *
// * * *
// * * * *
// * * * * *

{
  for (let row = 1; row <= 5; row++) {
    let a = "";
    for (let col = 1; col <= row; col++) {
      a += "* ";
      // console.log(a);
    }
    console.log(a);
  }
}

// 2. Craete Multiplication Table (Using for loop)
// Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:

// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30

{
  let N = 9;
  for (let i = 1; i <= 10; i++) {
    console.log(`${N} X ${i} = ${N * i}`);
  }
}

// 3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.

{
  let odd = 1;
  for (let i = 2; i <= 500; i++) {
    if (i % 2 === 1) {
      odd = `${odd}, ${i}`;
    }
  }
  console.log(odd);
}

// 4. Skipping Multiples of 3
// Write a program to print numbers from 1 to 20, but skip multiples of 3.

{
  for (i = 1; i <= 20; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
  }
}

// 5. Reverse Digits of a Number (Using while loop)
// Write a program to reverse the digits of a given number using a while loop.

// Example:

// Input: 6789
// Output: 9876

{
  let input = 6789;
  let reveresed = 0;
  while (input !== 0) {
    const digit = input % 10;
    reveresed = reveresed * 10 + digit;
    input = Math.floor(input / 10);
  }
  console.log("reveresed number: ", reveresed);
}

// 0 * 10 + 9 = 9
// 9 * 10 + 8 = 98
// 98 * 10 + 7 = 987
// 987 * 10 + 6 = 9876

// 6. Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.
