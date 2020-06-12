import { combineReducers } from 'redux';

import { currenciesReducer } from './currenciesReducer';
import { bankStatementReducer } from './bankStatementReducer';
import { walletReducer } from './walletReducer';
import { nationalExchangeReducer } from './nationalExchangeReducer';

export const Reducers = combineReducers({
  currenciesReducer: currenciesReducer,
  bankStatementReducer: bankStatementReducer,
  walletReducer: walletReducer,
  nationalExchangeReducer: nationalExchangeReducer,
});
