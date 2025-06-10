# Closure in JS

**Definition**: A closure is the combination of a function bundled together with reference to its surrounding state( the [[lexical environment]])

---

Closure is function that can access its parent's variables.
Also Closure allows a function to access its outer functions variable even if the outer function is already **executed**.

---

## Code example

```js
function outer() {
  let random = "random";
  return function inner() {
    console.log(random);
  };
}

const result = outer();
console.log(result);
```

Here "result" will be the inner function with context of the "random" variable even tho the outer function is already been executed.
This is also called [[memoizationVSmemorization | memoization]].

---

## Taking advantage of object to memoize multiple function

```js
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposite: (amount) => {
      balance += amount;
      console.log(
        "deposite amount: ",
        amount,
        ", Current balance: ",
        initialBalance
      );
    },
    withdraw: (amount) => {
      if (amount > balance) {
        console.log("insufficiant balance");
      } else {
        balance -= amount;
      }
    },
    checkBalance: () => {
      console.log(balance);
    },
  };
}

const myAccount = createBankAccount(10);

myAccount.deposite(10);
myAccount.deposite(30);
myAccount.withdraw(10);
myAccount.checkBalance();
```

In this code snippet balance is encapsulated using closure. And for closure we can access the balance even when the **createBankAccount()** function is executed.

## Warning

As the closure can remember the reference of its outer scope there is chance of memory leaks. So, be caution with your closure.

---

## Keytakeway | Uses

1. You can keep variables private without exposing them.
2. We can make function factory.
3. We can stop variable pollution.
4. We can keep variables alive between multiple calls.

---

## My Shocking Discovery

I was using closure in many places without even knowing. Like in the event handlers.

```js
let a = 1;

document.getElementByID(#demo).addEventListener("click", function() {
	a++;
})
```

The _a_ is being memoized because of closure.

## Relates with:

[[memoizationVSmemorization]]
