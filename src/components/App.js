import React, { Component } from 'react';
import styled from 'styled-components';
import WalletsStrategy from '../services/wallets';
import BitcoinCurrency from '../services/wallets/cryptos/bitcoin';
import BritaCurrency from '../services/wallets/cryptos/brita';

class App extends Component {
  componentDidMount() {
    const WalletStrategy = new WalletsStrategy();
    const bitcoin = new BitcoinCurrency();
    const brita = new BritaCurrency();
    WalletStrategy.wallet = bitcoin;
    WalletStrategy.getBalance();

    WalletStrategy.wallet = brita;
    WalletStrategy.getBalance();
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
