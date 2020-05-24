export default class WalletsStrategy {
  constructor() {
    this._wallet = null;
  }

  set wallet(wallet) {
    this._wallet = wallet;
  }

  get wallet() {
    return this._wallet;
  }
  //   nome
  //   sigla
  //   saldo atual

  getBalance() {
    return this._wallet.getBalance();
  }
}
