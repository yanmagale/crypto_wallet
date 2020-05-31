import database from '../../../../database/schema.js';

class BritaCurrency {
  async getBalance() {
    const bitcoinsPurchased = await database.transactions
      .filter(
        (transaction) =>
          transaction.type == 'purchase' && transaction.currency == 'brita'
      )
      .toArray();

    return bitcoinsPurchased.reduce((totalAmount, transaction) => {
      return totalAmount + parseInt(transaction.amount);
    }, 0);
  }

  getExchangeRate() {
    return 0.55;
  }
}

export default BritaCurrency;
