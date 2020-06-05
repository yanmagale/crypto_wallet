import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import UsersService from 'services/users/';
import CurrencyBuilder from 'services/wallet/currencyHelper/';

import Wallet from 'components/Wallet';

class WalletPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
  }
  componentDidMount() {
    UsersService.hasCreatedUsers()
      .then((hasUsers) => {
        return !hasUsers ? this.props.history.push('/') : '';
      })
      .then(this.getWalletCurrencies())
      .catch((err) => console.log(err));
  }

  getWalletCurrencies() {
    const myCurrencies = CurrencyBuilder.getCurrencies();

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

export default withRouter(WalletPage);
