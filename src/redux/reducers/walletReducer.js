import { SET_BALANCES, SET_RATES } from 'reduxFolder/actions/actionTypes';

const initialState = {
  balances: [],
  rates: [],
};

export const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BALANCES:
      return {
        ...state,
        balances: [...action.balances],
      };
    case SET_RATES:
      return {
        ...state,
        rates: [...action.rates],
      };
    default:
      return state;
  }
};
