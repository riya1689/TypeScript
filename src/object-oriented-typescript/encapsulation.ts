//restrict access from outside world using access modifier

// access >> modify

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  private addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }
 
  callHiddenMethod(balance:number){
    this.addBalance(balance)
  }

}

class StudentBankAccount extends BankAccount {
  test() {
    this.
  }
}

const riyaAccount = new BankAccount(111, "riya", 20);



riyaAccount.