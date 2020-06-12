import Dexie from 'dexie';

const database = new Dexie('CryptoWallet');
database.version(1).stores({
  users: '++id, name, email',
  transactions: '++id, type, amount, currency',
  balances: '++id, type, amount',
});

database.open().catch(function (e) {
  console.error('Error at create database: ' + e);
});

export default database;
