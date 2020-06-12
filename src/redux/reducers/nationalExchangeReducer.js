import { SET_NATIONAL_AMOUNT } from 'redux-folder/actions/actionTypes';

const initialState = {
  amount: 0,
};

export const nationalExchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NATIONAL_AMOUNT:
      return {
        ...state,
        amount: action.amount,
      };
    default:
      return state;
  }
};
