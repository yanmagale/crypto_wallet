import { SET_CURRENCIES, SET_TRANSACTIONS } from './actionTypes';

export const setCurrencies = (currencies) => ({
  type: SET_CURRENCIES,
  currencies,
});

export const setTransactions = (transactions) => ({
  type: SET_TRANSACTIONS,
  transactions,
});
