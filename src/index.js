import React from 'react';
import ReactDOM from 'react-dom';
import WalletPage from './pages/Wallet/';
import SignUpPage from './pages/SignUp/';
import BankStatementPage from './pages/BankStatement/';
import BuyCurrencyPage from './pages/BuyCurrency/';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignUpPage} />
        <Route path="/wallet" component={WalletPage} />
        <Route path="/buy/" component={BuyCurrencyPage} />
        <Route path="/bank-statement/" component={BankStatementPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
