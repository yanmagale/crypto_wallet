import database from 'database/schema.js';

const BankStatementService = {
  async getEntries() {
    return await database.transactions.orderBy('id').reverse().toArray();
  },
};

export default BankStatementService;
