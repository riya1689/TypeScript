// access >> modify

// class BankAccount{
//     userBalance: number;
//     constructor(userId: number, userName: string, userBalance: number){
//         this.userId = userId;
//         this.userName = userName;
//         this.userBalance = userBalance;
//     }
// }
// const riyaAccount= new BankAccount(000, "Riya", 01);
// riyaAccount.userId =323;
//addBalance(balance: number){
//    this.userBalance = this.userBalance + balance;
//}

//readonly diye property access kora jay na
//private property can only modify inside class block
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
}
//parent class theke derived child class e parent class er kono private property
//child class e access dite chailye parent class e private use na kore protected use korte hoy
class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance;
  }
}

const riyaAccount = new BankAccount(111, "riya", 20);

riyaAccount.addBalance(100);
riyaAccount.addBalance(50);

console.log(riyaAccount);