import {
  SET_CURRENCIES,
  SET_TRANSACTIONS,
  SET_BALANCES,
  SET_RATES,
  SET_NATIONAL_AMOUNT,
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

export const setNationalAmount = (amount) => ({
  type: SET_NATIONAL_AMOUNT,
  amount,
});
