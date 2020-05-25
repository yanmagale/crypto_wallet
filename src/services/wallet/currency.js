export default class Currency {
  constructor({ name, initials, currencySymbol, exchange }) {
    this._name = name;
    this._inititals = initials;
    this._currencySymbol = currencySymbol;
    this._exchange = exchange;
  }

  getName() {
    return this._name;
  }

  getCurrencySymbol() {
    return this._currencySymbol;
  }

  getInitials() {
    return this._inititals;
  }

  getBalance() {
    return this._exchange.getBalance();
  }

  getExchangeRate() {
    return this._exchange.getExchangeRate();
  }
}
