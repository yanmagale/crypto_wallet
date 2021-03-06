import { SET_TRANSACTIONS } from 'redux-folder/actions/actionTypes';

const initialState = {
  transactions: [],
};

export const bankStatementReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: [...action.transactions],
      };
    default:
      return state;
  }
};
