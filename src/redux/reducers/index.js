import { currenciesReducer } from './currenciesReducer';
import { bankStatementReducer } from './bankStatementReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  currenciesReducer: currenciesReducer,
  bankStatementReducer: bankStatementReducer,
});
