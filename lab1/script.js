class ATM {
    constructor(self, balance=0) {
        this.balance = balance;
        this.transactionHistory = [];
    }
    checkBalance() {
        return this.balance;
    }
    deposit(amount) {
        this.balance = this.balance  + amount;
        this.transactionHistory.push(`Deposit: ${amount} Balance: $${this.balance}`);
        return this.balance;
    }
    checkWithdrawal(amount) {
        this.transactionHistory.push(`Check withdrawal: $${this.balance} - $${amount} = ${this.balance - amount}`);
        return this.balance - amount;
    }
    withdraw(amount) {
        this.balance -= amount;
        this.transactionHistory.push(`Withdrawal: $${amount} -- Balance: $${this.balance}`);
    }
    checkHistory() {
        return this.transactionHistory;
    }
}
let newAccount = new ATM();
alert("Welcome to your new bank account!");

while (true) { 
    menu = prompt("What would you like to do?\n[d]eposit\n[w]ithdraw\n[c]heck balance\n[h]istory\n[t]est overdraw\n[e]xit");
    if (menu === "d") {
        let dep = prompt("How much would you like to deposit? ");
        newAccount.deposit(parseInt(dep));
        alert(`Your account is now $${newAccount.checkBalance()}`);
    } else if (menu === "w") {
        let wd = prompt("How much would you like to withdraw?");
        newAccount.withdraw(parseInt(wd));
        alert(`Your account is now $${newAccount.checkBalance()}`);
    } else if (menu === "c") {
        alert(`Your current balance is $${newAccount.checkBalance()}`);
    } else if (menu === "t") {
        let twd = prompt("How much would you like to test for?");
        alert(`Your account is now $${newAccount.checkWithdrawal(parseInt(twd))}`);
    } else if (menu === "h") {
        alert(`Here is your transaction history: ${newAccount.checkHistory()}`);
        // history = newAccount.check_history();
    } else {
        alert(`Goodbye`);
        break
    }
}
