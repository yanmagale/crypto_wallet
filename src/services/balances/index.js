import database from 'database/schema.js';

const BalancesService = {
  async add(balance) {
    return await database.table('balances').add(balance);
  },

  async getAmount() {
    const balancesOperations = await database.balances.toArray();

    return balancesOperations.reduce((totalAmount, balance) => {
      if (balance.type === 'add') {
        return (totalAmount += parseInt(balance.amount));
      }

      return (totalAmount -= parseInt(balance.amount));
    }, 0);
  },
};

export default BalancesService;
