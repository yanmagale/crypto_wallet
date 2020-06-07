import { currenciesReducer } from './currenciesReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  currenciesReducer: currenciesReducer,
});
