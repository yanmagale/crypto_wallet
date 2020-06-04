import React, { Component } from 'react';
import styled from 'styled-components';

import Currency from '../../services/wallet/currency.js';
import CurrencyManager from '../../services/wallet/currencyManager.js';

import BitcoinCurrency from '../../services/wallet/currencies/bitcoin';
import BritaCurrency from '../../services/wallet/currencies/brita';

import Wallet from '../../components/Wallet';

class WalletPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
  }
  componentDidMount() {
    // Setup
    const walletManager = new CurrencyManager();
    const bitcoinWallet = new Currency({
      name: 'bitcoin',
      initials: 'BTC',
      currencySymbol: 'B$',
      exchange: new BitcoinCurrency(),
    });
    const britaWallet = new Currency({
      name: 'brita',
      initials: 'BRI',
      currencySymbol: 'R$',
      exchange: new BritaCurrency(),
    });
    const myCurrencies = [];

    walletManager.addCurrency(bitcoinWallet);
    walletManager.addCurrency(britaWallet);
    const wallets = walletManager.getCurrencies();

    wallets.forEach((wallet, index) => {
      myCurrencies.push({
        name: wallet.getName(),
        balance: wallet.getBalance(),
        initials: wallet.getInitials(),
        currencySymbol: wallet.getCurrencySymbol(),
        exhangeRate: wallet.getExchangeRate(),
        index: index,
      });
    });

    this.setState({
      currencies: [...myCurrencies],
    });
  }

  render() {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;

    const { currencies } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Title>My Crypto Wallet</Title>
        </header>
        <div>
          <Wallet currencies={currencies} />
        </div>
      </div>
    );
  }
}

export default WalletPage;
