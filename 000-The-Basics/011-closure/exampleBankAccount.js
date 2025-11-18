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
