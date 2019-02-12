class ATM {
    constructor(self, balance=0) {
        this.balance = balance;
        this.transactionHistory = [];
    }

    deposit(amount) {
        this.balance += amount;
        this.transactionHistory.push(`Deposit: ${amount} Balance: $${this.balance}`);
        return this.balance;
    }

    withdraw(amount) {
        this.balance -= amount;
        this.transactionHistory.push(`Withdrawal: $${amount} -- Balance: $${this.balance}`);
    }
}

let newAccount = new ATM();
let body = document.getElementsByTagName("body")[0];
let depositButton = document.getElementById("deposit");
let withdrawButton = document.getElementById("withdraw");
let balance = document.getElementById("balance");
let ul = document.createElement("ul");

depositButton.addEventListener("click", function(event) {
    let depositAmt = document.getElementById("amount");
    let d = new Date();
    let date = d.toLocaleString();
    newAccount.deposit(parseFloat(depositAmt.value));
    balance.innerText = `Balance: $${newAccount.balance}`;
    let li = document.createElement("li");
    li.innerText = `Deposited $${depositAmt.value}\n${date}`;
    ul.appendChild(li);
    depositAmt.value = "0";
});
withdrawButton.addEventListener("click", function(event) {
    let withdrawAmt = document.getElementById("amount");
    let d = new Date();
    let date = d.toLocaleString();
    newAccount.withdraw(parseFloat(withdrawAmt.value));
    balance.innerText = `Balance: $${newAccount.balance}`;
    let li = document.createElement("li");
    li.innerText = `Withdrawal $${withdrawAmt.value}\n${date}`;
    ul.appendChild(li);
    withdrawAmt.value = "0";
});

body.appendChild(ul);

