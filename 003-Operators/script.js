// 1. Odd or Even?
// [ ] Take a number and find if the number is an odd or even number.
// [ ] Print the number and result in the console.

{
  let num = 132412342345234;
  const evenNum = num % 2 == 0;
  // const oddNum = num & (2 != 0);
  const res = evenNum ? "num is even" : "num is odd";
  console.log(res);
}

// 2. Do you have a Driving License?
// Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

// [ ] Manage age as a variable.
// [ ] Check if the age is elligible for a driving license and print it on the console accordingly.

{
  let age = 18;
  const doIHaveLicence =
    age >= 18 ? "Yes! I have driving licence" : "Sorry! I am still not 18 yet";
  console.log(doIHaveLicence);
}

// 3. Calculate CTC (Cost per Company) with a Bonus
// Let's calculate how much you earn from your office.

// [ ] You get 12,3000 taka as your monthly salary.
// [ ] You get a 20% bonus on your annual salary.
// [ ] How much money do you make per annum as a CTC?

{
  const monthlyEarning = 123000;
  const bonusOnAnnual = 20; // 20%
  const AnnualEarning = monthlyEarning * 12;

  const CTC = AnnualEarning + AnnualEarning * (20 / 100);
  console.log(CTC + " taka");
}

// 4. Write a program for the Traffic Light Simulation.
// Red Light... Green Light... Let's Play!

// [ ] Create a color variable.
// [ ] Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.

{
  let color = "red";
  const stopOrGo =
    color === "red"
      ? "STOP"
      : color === "green"
      ? "GO"
      : "wait for the light to be eather green or red";
  console.log(stopOrGo);
}

// 5. Create an Electricity Bill Calculator
// Let's calculate how much you pay for electricity bills per month and annually.

// [ ] Create a units variable. Based on this value you will calculate the total electricity bill for a months.
// [ ] If each day you consume the units and each unit cost 150 taka, how much will you be charged per month?
// [ ] If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

{
  let units = 6;
  let perMonthBill = 6 * 30;
  let perAnnualBill = perMonthBill * 12;
  let afterHaving20PercentDiscount = perAnnualBill + perAnnualBill * (20 / 100);
  console.log(afterHaving20PercentDiscount, " Taka bill");
}

// 6. Leap Year Checker
// Is 2025 a Leap Year?

// [ ] Take year as input.
// [ ] Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

{
  let year = 2025;
  let isLeapYear =
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "" : "not";
  console.log(`${year} is ${isLeapYear} a leap year`);
}

// 7. Max of Three Numbers
// Find the max number from the lot.

// [ ] Take three numbers and assign them to variables p, q, and r.
// [ ] Now find the maximum of these three numbers using the comparison operators.

{
  let p = 234;
  let q = 433;
  let r = 324;

  const maxNum =
    p > q && p > r
      ? p + " is max number"
      : q > r && q > p
      ? q + " is max number"
      : r + " is max number";
  console.log(maxNum);
}

// 8. Biwise Doubling
// A tricky one for you

// [ ] Create a variable count and assign a value, say, 5.
// [ ] Now use the Bitwise shift operator to make the number double.
// [ ] Print it on the console.

{
  let count = 5;
  // 5 / 2 = 2 (1)
  // 2 / 2 = 1 (0) // 101 in binary

  // 101 << 1 = 1010 as its shifted in the left in one position
  // 1010 (base 2)
  // [0 * (2 ^ 0) + 1 * (2 ^ 1) + 0 * (2 ^ 2) + 1 * (2 ^ 3)]
  // = 0 + 2 + 0 + 8
  // = 10 (base 10)[decimal]

  // So, count << 1 will make it double

  const doubleCount = count << 1;
  console.log(doubleCount);
}
