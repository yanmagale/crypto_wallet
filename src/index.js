import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUpPage from 'pages/sign-up/';
import WalletPage from 'pages/wallet/';
// import BankStatementPage from 'pages/bank-statement/';
// import BuyCurrencyPage from 'pages/buy-currency/';
import { Store } from 'redux-folder/store';

import './styles/index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignUpPage} />
          <Route path="/wallet" component={WalletPage} />
          {/* <Route path="/buy/" component={BuyCurrencyPage} />
          <Route path="/bank-statement/" component={BankStatementPage} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
