# Have a look at this example with a partner


## Bank Account Management Program

This program simulates basic bank account operations using a `BankAccount` class.

## `BankAccount` Class

The `BankAccount` class provides the following functionalities:

* **Constructor:**
    * Takes `accountNumber`, `ownerName`, and an optional `initialBalance` (defaulting to 0) as arguments.
    * Initialises a new bank account object with the provided information.

* **`deposit(amount)`:**
    * Adds the given `amount` to the account balance.
    * Throws an error if the `amount` is negative.

* **`withdraw(amount)`:**
    * Subtracts the given `amount` from the account balance.
    * Throws an error if the `amount` is negative or if the account has insufficient funds.

* **`transfer(targetAccount, amount)`:**
    * Transfers the given `amount` from the current account to the `targetAccount`.
    * Utilizes the `withdraw` and `deposit` methods internally.
    * Includes error handling to manage potential issues during the transfer.

## Example Usage (`handleTransactions` function)

* Creates two `BankAccount` objects: `myAccount` and `friendAccount`.
* Performs a successful deposit into `myAccount`.
* Attempts a transfer from `myAccount` to `friendAccount`, which fails due to insufficient funds.
* Displays the final balances of both accounts.

## Error Handling

The program incorporates error handling to address:

* Invalid input values (e.g., negative deposit/withdrawal amounts).
* Insufficient funds during withdrawals.
* Potential errors during transfers.

This ensures robust operation and prevents unexpected program behaviour.