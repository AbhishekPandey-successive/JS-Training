// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount{
    constructor(balance,owner)
    {
        this.balance=balance;
        this.owner=owner;
    }

    deposit()
    {
        console.log(`Total deposit amount is balance : ${this.balance}`)
    }

    withdraw()
    {
        console.log("Withdraw amount is 1000");
    }

    displayBalance()
    {
        console.log(`Balance amount is ${this.balance}`)
    }
}

let userAccount=new BankAccount(10000,"Abhishek Pandey")

userAccount.deposit();
userAccount.withdraw();
userAccount.displayBalance();