// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().


class BankAccount {

    constructor(balance) {
      this.balance = balance;
      console.log(`Opening Balance: $${balance}`);
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited: $${amount}`);
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn: $${amount}`);
      } else {
        console.log(`Want to withdraw: $${amount}`);
        console.log('Insufficient balance');
      }
    }
  
    displayBalance() {
      console.log(`Account Balance: $${this.balance}`);
    }
  }
  
  
  const account = new BankAccount( 1500);
  
  
  account.deposit(500);
  
  
  account.withdraw(400);
  
  
  account.displayBalance();
  
  
  account.withdraw(1800);
  
  account.displayBalance();

  









