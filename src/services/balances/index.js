import database from 'database/schema.js';

const BalancesService = {
  async add(balance) {
    return await database.table('balances').add(balance);
  },

  async getAmount() {
    const balancesOperations = await database.balances.toArray();

    return balancesOperations.reduce((totalAmount, balance) => {
      const newAmount =
        balance.type === 'add'
          ? (totalAmount += balance.amount)
          : (totalAmount -= balance.amount);

      return parseFloat(newAmount.toFixed(2));
    }, 0);
  },
};

export default BalancesService;
