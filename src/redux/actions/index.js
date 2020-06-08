import {
  SET_CURRENCIES,
  SET_TRANSACTIONS,
  SET_BALANCES,
  SET_RATES,
} from './actionTypes';

export const setCurrencies = (currencies) => ({
  type: SET_CURRENCIES,
  currencies,
});

export const setTransactions = (transactions) => ({
  type: SET_TRANSACTIONS,
  transactions,
});

export const setBalances = (balances) => ({
  type: SET_BALANCES,
  balances,
});

export const setRates = (rates) => ({
  type: SET_RATES,
  rates,
});
