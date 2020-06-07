import { SET_CURRENCIES } from 'reduxFolder/actions/actionTypes';

const initialState = {
  currencies: [],
};

export const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCIES:
      return {
        ...state,
        currencies: [...action.currencies],
      };
    default:
      return state;
  }
};
