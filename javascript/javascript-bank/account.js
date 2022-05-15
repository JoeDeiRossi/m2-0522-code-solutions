/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  let balance = 0;
  for (let i = 0; i < this.transactions.length; i++) {
    const currentTransaction = this.transactions[i];
    switch (currentTransaction.type) {
      case 'deposit':
        balance += currentTransaction.amount;
        break;
      case 'withdrawal':
        balance -= currentTransaction.amount;
        break;
    }
  }
  return balance;
};
