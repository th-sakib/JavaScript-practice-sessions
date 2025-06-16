// declaring an Array
const vagitables = ["bitter gaurd", "cucumber", "cauliflower", "cabbage"];

// declaring with contructor function
const fruit = new Array("orange", "banana", "mango");
const count = new Array(1, 2, 3, 4, 5, 6);

// when used only one Number as argument it creates that much empty slot
const test = new Array(8); // 8 x empty slots, length: 8, values: empty | so be aware of it
const testWithString = new Array("string"); // but this work as expected

// console.log(vagitables);
// console.log(fruit);
// console.log(count);
// console.log(test);
// console.log(testWithString);
