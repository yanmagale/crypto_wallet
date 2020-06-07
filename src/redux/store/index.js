import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Reducers } from 'reduxFolder/reducers';

export const Store = createStore(Reducers, composeWithDevTools());
