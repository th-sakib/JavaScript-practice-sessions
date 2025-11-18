// # declaring an Array
const vagitables = ["bitter gourd", "cucumber", "cauliflower", "cabbage"];

// declaring with contructor function
const fruit = new Array("orange", "banana", "mango");
const count = new Array(1, 2, 3, 4, 5, 6);

// when used only one Number as argument it creates that much empty slot
const test = new Array(8); // 8 x empty slots, length: 8, values: empty | so be aware of it
const testWithString = new Array("string"); // but this work as expected

// console.log(vagitables); // ["bitter gourd", "cucumber", "cauliflower", "cabbage"]
// console.log(fruit); // ["orange", "banana", "mango"]
// console.log(count); // [1, 2, 3, 4, 5, 6]
// console.log(test); // [<8 empty items>]
// console.log(testWithString); // ['string']

// retriving items from array
// array[index]
vagitables[0]; // bitter gourd | here 0 is the index

// # iterating over Array
for (let i = 0; i < vagitables.length; i++) {
  const desc = `index ${i}, vagitable: ${vagitables[i]}`;
  // console.log(desc);
}

// # methods
fruit.push("apple"); //["orange", "banana", "mango", "apple"] | return value 4 | mutats the array
fruit.unshift("jackfruit"); // ["jackfruit", "orange", "banana", "mango", "apple"] | returns 5 | mutats the array
fruit.pop(); // remove the last item | Returns the Item it removed | mutats the array
fruit.shift(); // remove the first item | returns the Item it removed | mutats the array

copyFruitArray = fruit.slice(1, 2); // this returns an array but doesn't modify the original Array | fruit != copyFruitArray

Array.isArray(fruit); // returns true
Array.isArray([]); // true
Array.isArray("s"); // false
Array.isArray({ name: "s" }); // false

// # destructure
const arr = ["item1", "item2", "item3"];
// const item1 = arr[0]
// const item2 = arr[1]
// const item3 = arr[2]

// with ES6 destructuring
const [item1, item2, item3, item4 = "item4"] = arr;

// # nested array

const arr1 = ["item1", "item2", [1, 2, 3]];
// console.log(arr1[2][2]); // 3
// or
const [, , [, , item]] = arr1;
// console.log(item); // 3

// # Rest Parameter
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const [count1, count2, ...rest] = arr2; // rest parameter
// console.log(rest); // [ 3, 4, 5, 6, 7 ]

// # Spread Operator
const copyArr2 = [...arr2];
copyArr2 == arr2; // false

// Swap value with destructuring
let a = 1;
let b = 2;
[b, a] = [a, b]; // a's value destructured into b and b's value destructured into a
copyArr2.length = 1;

// # concat method
const exampleArr = ["a", "b", "e", "f"];
const exampleArr2 = ["c", "d"];
const newArr = exampleArr.concat(exampleArr2);

// # join method
const joinedArr = exampleArr.join();
const joinedArr2 = exampleArr.join(".");
[].join(); // returns "" empty string

// # fill method

{
  const exampleArr = ["a", "b", "c", "d"];
  // exampleArr.fill("meaw");
  // console.log(exampleArr); //['meaw', 'meaw', 'meaw', 'meaw'] // mutates the array
  exampleArr.fill("meaw", 1, 4); // array.fill("what to fill with", start, end);
  // console.log(exampleArr); //[ 'a', 'meaw', 'meaw', 'meaw' ] // mutates the array
}
{
  // # include method | doesn't mutate original array
  const exampleArr = ["a", "b", "c", "d", "a"];
  const res = exampleArr.includes("a");
  // console.log(res); // true

  // # indexOf method
  const res2 = exampleArr.indexOf("a"); // returns the index number
  // console.log(res2); // 0
  const res3 = exampleArr.indexOf("z");
  // console.log(res3); // -1

  // # lastIndexOf() method
  const res4 = exampleArr.lastIndexOf("a");
  // console.log(res4); // 4
}
{
  // reverse() method
  // toReversed() is for not mutating the original array
  // it reverse the array | and modifies the original array
  const arr = ["a ", "b", "c", "d"]; // [ 'a', 'meaw', 'meaw', 'meaw' ]
  const res = arr.toReversed();
  // console.log(res);
  // console.log(arr.reverse());
}

{
  function aaa() {
    console.log(arguments); // array like object
    const arr = [...arguments]; // another way is to use Array.from()
    console.log(arr);
  }
  aaa(1, 2);
}
