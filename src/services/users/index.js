import database from 'database/schema.js';

const UsersService = {
  async create(user) {
    return await database.table('users').add(user);
  },
  async hasCreatedUsers() {
    const users = await database.users.orderBy('id').reverse().toArray();
    return !!users.length;
  },
};

export default UsersService;
