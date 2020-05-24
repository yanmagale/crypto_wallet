export default class Currency {
  constructor(name, initials, exchange) {
    this._name = name;
    this._inititals = initials;
    this._exchange = exchange;
  }

  getName() {
    return this._name;
  }

  getInitials() {
    return this._inititals;
  }

  getBalance() {
    return this._exchange.getBalance();
  }
}
