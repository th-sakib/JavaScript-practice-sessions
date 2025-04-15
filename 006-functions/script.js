// 1. Write a Function to Convert Celsius to Fahrenheit
// Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const C2F = celsiusToFahrenheit(45);

console.log(C2F);

// 2. Create a Function to Find the Maximum of Two Numbers
// Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.

function findMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const maxNum = findMax(12, 21);
console.log(maxNum);

// 3. Function to Check if a String is a Palindrome
// Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.

function isPalindrome(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  if (reversed === str) return true;

  return false;
}

const isPalindromeRes = isPalindrome("madam");
console.log(isPalindromeRes);

// 4. Write a Function to Find Factorial of a Number
// Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1

function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(3));

// 5. Write a function to Count Vowels in a String
// Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.

const vowels = ["a", "e", "i", "o", "u"];
function countVowels(str) {
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) count++;
  }
  return count;
}
const countVowelsRes = countVowels("aaaaaiiiii");
console.log(countVowelsRes);
