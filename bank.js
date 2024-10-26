class BankAccount {
  constructor(accountNumber, ownerName, initialBalance = 0) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    if (this.balance < amount) {
      throw new Error("Insufficient funds");
    }
    this.balance -= amount;
  }

  transfer(targetAccount, amount) {
    try {
      this.withdraw(amount);
      targetAccount.deposit(amount);
    } catch (error) {
      console.error(`Transfer failed: ${error.message}`);
      // Optionally re-throw the error if you need to notify the caller
      throw new Error("Transfer operation failed");
    }
  }
}

function handleTransactions() {
  let myAccount = new BankAccount(101, "Steve Rich", 500);
  let friendAccount = new BankAccount(102, "Bessie Owens", 300);

  try {
    myAccount.deposit(200);
    myAccount.transfer(friendAccount, 1500); // This should fail
  } catch (error) {
    console.error(`Operation failed: ${error.message}`);
  }

  console.log(`Account Balance (Steve Rich): £${myAccount.balance}`);
  console.log(`Account Balance (Bessie Owens): £${friendAccount.balance}`);
}

handleTransactions();
