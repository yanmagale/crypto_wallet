import database from 'database/schema.js';

const TransactionService = {
  async create(transaction) {
    return await database.table('transactions').add(transaction);
  },
};

export default TransactionService;
