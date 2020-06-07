import { SET_CURRENCIES } from './actionTypes';

export const setCurrencies = (currencies) => ({
  type: SET_CURRENCIES,
  currencies,
});
