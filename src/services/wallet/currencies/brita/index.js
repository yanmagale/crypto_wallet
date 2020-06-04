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

  async getExchangeRate() {
    const currentDay = new Date();
    let response = await fetch(
      `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${
        currentDay.getMonth() + 1
      }-${currentDay.getDate()}-${currentDay.getFullYear()}'`
    );

    const dollarCurrency = await response.json();

    if (dollarCurrency.value && dollarCurrency.value.length) {
      return {
        buy: dollarCurrency.value[0].cotacaoCompra,
        sell: dollarCurrency.value[0].cotacaoVenda,
      };
    } else {
      return {
        buy: null,
        sell: null,
      };
    }
  }
}

export default BritaCurrency;
