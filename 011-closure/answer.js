/**
1. What will be the output of the following code and why?
function outer() {

  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();

 */
/**
 * The output will be:
 * 1
 * 2
 * Because when outer() function is invoked it returned inner function and we stored it in counter variable.
 * When we call counter() it increases the count variable value by 1 and then it becomes 2, when we call it again. Because count variable is being preserved by closure.
 *
 */

/**
 * 2. What will be the output and why?
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()());
answer: 
The output will be:
it will return 100. Because when we first call testClosure it returns a function ( the function declared with function expression) then we are calling it using IIFE( immediately Invoked Function Execution ). and that's why we are getting x * x as a result which is '100'. 
 */

/**
 *
 */
