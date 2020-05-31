import database from '../../../../database/schema.js';

class BitcoinCurrency {
  async getBalance() {
    const bitcoinsPurchased = await database.transactions
      .filter(
        (transaction) =>
          transaction.type == 'purchase' && transaction.currency == 'bitcoin'
      )
      .toArray();

    return bitcoinsPurchased.reduce((totalAmount, transaction) => {
      return totalAmount + parseInt(transaction.amount);
    }, 0);
  }

  getExchangeRate() {
    return 0.1;
  }
}

export default BitcoinCurrency;
