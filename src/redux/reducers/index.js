import { combineReducers } from 'redux';

import { currenciesReducer } from './currenciesReducer';
import { bankStatementReducer } from './bankStatementReducer';
import { walletReducer } from './walletReducer';

export const Reducers = combineReducers({
  currenciesReducer: currenciesReducer,
  bankStatementReducer: bankStatementReducer,
  walletReducer: walletReducer,
});
