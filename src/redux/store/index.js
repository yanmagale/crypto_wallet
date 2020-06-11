import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Reducers } from 'redux-folder/reducers';

export const Store = createStore(Reducers, composeWithDevTools());
