import { currenciesReducer } from './currenciesReducer';
import { bankStatementReducer } from './bankStatementReducer';
import { walletReducer } from './walletReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  currenciesReducer: currenciesReducer,
  bankStatementReducer: bankStatementReducer,
  walletReducer: walletReducer,
});
