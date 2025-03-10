//Ques: 1. What will be the output of this code snippet and why?
{
  let day = "Monday";

  switch (day) {
    case "monday":
      console.log("It's the start of the week.");
      break;
    default:
      console.log("It's a normal day.");
  }

  // output: It's a normal day.
  // reason: Because day is "Monday" and in the switch statement case is "monday" as js is case sensitive that's why "Monday" !== "monday" so it will go to default case.
}

// Ques: 2. Build an ATM Cash Withdrawal System
// Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

{
  let amount = 150;

  if (amount % 100 === 0) {
    console.log("Withdrawal successful");
  } else {
    console.log("Invalid amount");
  }
}

// Ques: 3. Build a Calculator with switch-case
// Write a simple calculator that takes an operator (+, -, *, /, %) as input, and performs the operation on two numbers. Print the output on the console.

{
}

// 4. Pay for your movie ticket
// Imagine, the INOX charges ticket prices based on age:

// Children (<18 years): $3
// Adults (18 - 60 years): $10
// Seniors (60+ years): $8
// Write a program that prints the ticket price based on the person’s age.

{
  let personAge = 18;

  if (personAge < 18) {
    console.log("ticket price: $3");
  } else if (personAge >= 18 && personAge < 61) {
    console.log("ticket price: $10");
  } else {
    console.log("ticket price: $8");
  }
}

// 5. Horoscope Sign Checker
// Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.

{
  let month = "september";

  switch (month) {
    case "january":
    case "february":
      console.log("Horoscope A");
      break;
    case "march":
    case "april":
      console.log("Horoscope B");
    case "may":
    case "june":
      console.log("Horoscope C"); // and so on
    default:
      console.log("write a valid month name and in lowercase");
  }
}

// 6. Which Triangle?
// A triangle has 3 sides. A Triangle type is determined by its sides:

// All sides equal is called, Equilateral Triangle.
// Two sides equal is called, Isosceles Triangle.
// All sides different is called, Scalene Triangle.
// Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.

{
  let sideA = 4;
  let sideB = 2;
  let sideC = 3;

  if ((sideA === sideB) === sideC) {
    console.log("Equalateral Tringle");
  } else if ((sideA !== sideB) !== sideC) {
    console.log("Scalene Tringle");
  } else {
    console.log("Isosceles Triangle");
  }
}
