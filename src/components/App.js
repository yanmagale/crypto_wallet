import React, { Component } from 'react';
import styled from 'styled-components';

import Currency from '../services/wallet/currency.js';
import CurrencyManager from '../services/wallet/currencyManager.js';

import BitcoinCurrency from '../services/wallet/currencies/bitcoin';
import BritaCurrency from '../services/wallet/currencies/brita';

class App extends Component {
  componentDidMount() {
    const walletManager = new CurrencyManager();
    const bitcoinWallet = new Currency('bitcoin', 'BTC', new BitcoinCurrency());
    const britaWallet = new Currency('brita', 'BRI', new BritaCurrency());

    walletManager.addCurrency(bitcoinWallet);
    walletManager.addCurrency(britaWallet);

    const myWallet = walletManager.getCurrency('brita');
    myWallet.getBalance();
    console.log(myWallet.getName());
  }

  render() {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;
    return (
      <div className="App">
        <header className="App-header">
          <Title>My Crypto Wallet</Title>
        </header>
        <div>
          <div>Britas</div>
          <div>Bitcoin</div>
        </div>
      </div>
    );
  }
}

export default App;
