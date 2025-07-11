/**
 *
 * @question
 *
 * 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.
 * 2. Explain Variable and Function Hoisting with Example. Post the code as your answer.
 */

// Temporal dead zone occurs when we try to access a variable declared with let, const keyword. Temporal dead zone is the reason we can't access those variables before daclaring it.
{
  console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
  /**
   *
   * Temporal Dead Zone
   *
   **/
  let a = 12;

  /**
   * @note
   * Variables declared with let and const are hoisted, but they are not accessible until they are initialized.
   *
   * This is different from var, which is hoisted and initialized with undefined during the memory creation phase.
   */
}

{
  //  * 2. Explain Variable and Function Hoisting with Example.

  // Everything in JS engine has two phases 1. memory creation phase, 2. execution phase
  // Before the code run variable declared with var and funcitons get hoisted (memory is created in the creation phase), and variables with let, const get hoisted but it has a TDZ so we cannot access them without initializing them.

  var a = 2; // hoisted | in memory creation phase a = undefined

  // functions get hoisted too | the entire function get hoisted so we can call it before declaration
  function func() {
    let b = 3; // it also get hoisted but it has a TDZ
    const c = 4; // same as let
  }
}
