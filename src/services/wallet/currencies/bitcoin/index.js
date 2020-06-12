import database from 'database/schema.js';

class BitcoinCurrency {
  async getBalance() {
    const bitcoinsPurchased = await database.transactions
      .filter((transaction) => transaction.currency == 'bitcoin')
      .toArray();

    return bitcoinsPurchased.reduce((totalAmount, transaction) => {
      return transaction.type === 'purchase'
        ? (totalAmount += parseInt(transaction.amount))
        : (totalAmount -= parseInt(transaction.amount));
    }, 0);
  }

  async getExchangeRate() {
    let response = await fetch(
      'https://www.mercadobitcoin.net/api/BTC/ticker/',
      { mode: 'cors' }
    );
    const responseContent = await response.text();
    const rate = responseContent ? JSON.parse(responseContent) : {};
    let buy = null;
    let sell = null;

    if (rate.ticker) {
      buy = rate.ticker.buy;
      sell = rate.ticker.sell;
    }
    return {
      buy,
      sell,
    };
  }
}

export default BitcoinCurrency;
