export default class CurrencyManager {
  constructor() {
    this._currencies = [];
  }

  addCurrency(currency) {
    this._currencies = [...this._currencies, currency];
  }

  getCurrency(name) {
    return this._currencies.find((currency) => currency._name === name);
  }

  getCurrencies() {
    return this._currencies;
  }
}
