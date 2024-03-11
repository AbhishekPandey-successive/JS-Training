// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount{
    constructor(balance,owner)
    {
        this.balance=balance;
        this.owner=owner;
    }

    deposit()
    {
        console.log(`Total deposit amount is balance 1000`)
    }

    withdraw()
    {
        console.log("Withdraw amount is 500");
    }

    displayBalance()
    {
        console.log(`Balance amount is ${this.balance+1000-500}`)
    }
}

let userAccount=new BankAccount(10000,"Abhishek Pandey")

userAccount.deposit();
userAccount.withdraw();
userAccount.displayBalance();