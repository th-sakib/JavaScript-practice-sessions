// ## 1. What will be the output of the following code and why?
{
  let user = "Alice";

  function outer() {
    function inner() {
      console.log(user);
    }
    let user = "Bob";
    inner();
  }

  outer();
  // answer: Bob | because in the inner function we are trying to log "user" variable. As the variable not present int that scope it will try to look for its parent's scope and the parent here is outer() and there is user variable which is assigned with the value "Bob"
}

// ## 2. What is the mistake in the code below?
{
  let total = 0; // Global, bad practice

  function add(num) {
    total += num;
  }

  add(5);
  add(10);
  console.log(total);
  /**
   * answer:
   *
   * total varibale is in the global. which is bad practice. as the total variable needed inside the function.
   * we can just declare it inside function to reduce global scope name colition.
   *
   * if we need the value after function call we can create a CLOSURE. that way we can still remember the variable even its in the function scope
   */
}
// 3. Create a function with a nested function and log a variable from the parent function
{
  function parent() {
    let a = 12341234;
    function child() {
      console.log(a);
    }
    child();
  }
  parent();
  // The child function has access to the a variable from the parent function. This is possible because of lexical scoping, where functions have access to variables in their own scope and any parent scope.
}

// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
{
  function looper() {
    for (let i = 0; i < 3; i++) {
      console.log("inside loop: ", i);
    }
    console.log("outside loop: ", i); // Uncaught ReferenceError: i is not defined | if it was declared with var we would access i outside the loop too
    // hint: var is function scoped & let, const is block scoped
  }
  // looper();
}
// 5. Write a function that tries to access a variable declared inside another function.
{
  function helper() {
    let a = "meaw";
  }

  function actual() {
    console.log(a); // a is not defined because its actual scope and lexucal scopes don't have the a variable
  }
  // actual();
}
// 6. What will be the output and why?
{
  console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 10;
  /**
   * the output will be a error message saying: the variable can't be accessed without initialization.
   *
   * Because let, const has a TDZ. thats why we can't access the variable wihout initialization.
   *
   * Before this initialization, JavaScript enters a Temporal Dead Zone (TDZ), which means the variable a exists in the scope but is not yet accessible. Trying to access a before it's initialized results in a ReferenceError.
   */
}

// 7. Where is the `age` variable accessible?

{
  function showAge() {
    let age = 25;
    console.log(age);
  }

  console.log(age);

  /**
Options:

- A: In Global 
- B: Only inside showAge ✅
- C: in the birth certificate
- D: None of the above
 */
}

// ## 8. What will be the output and explain the output?
{
  let message = "Hello";

  function outer() {
    let message = "Hi";

    function inner() {
      console.log(message);
    }

    inner();
  }

  outer();
  // result: "Hi" |  because that's the value of the message variable in the outer() function, which is the closest scope to the inner() function.
}
/*
## 9. What will be the output and why?

```js
let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x);
  }

  inner();
}

outer();
```

JavaScript functions can access variables from their own scope and from enclosing scopes (lexical scoping). In this case, the inner() function looks in its own scope first, then in the outer() function scope, and finally in the global scope if necessary.

## 10. What will be the output and why?

```js
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();
```

the value of count will be memoized and thats why it will be -2
*/
