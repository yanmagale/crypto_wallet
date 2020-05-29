import Dexie from 'dexie';

const database = new Dexie('CryptoWallet');
database.version(1).stores({ users: '++id' }, { transactions: '++id' });

// db.version(1).stores({
//     friends: '++id, name, age' // don't index "picture"
//   });

database.open().catch(function (e) {
  console.error('Error at create database: ' + e);
});

export default database;
