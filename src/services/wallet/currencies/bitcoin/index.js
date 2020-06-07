import database from 'database/schema.js';

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

  async getExchangeRate() {
    let response = await fetch(
      'https://www.mercadobitcoin.net/api/BTC/ticker/',
      { mode: 'cors' }
    );
    const rate = await response.json();
    const { buy = null, sell = null } = rate.ticker;
    return {
      buy,
      sell,
    };
  }
}

export default BitcoinCurrency;
