import React, { Component } from 'react';

import Currency from '../currency/';

import { Wrapper, CurrencyContainer } from './style';

class Wallet extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <Wrapper>
        {currencies.map((currency, index) => (
          <CurrencyContainer key={index}>
            <Currency
              name={currency.name}
              balance={currency.balance}
              initials={currency.initials}
              currencySymbol={currency.currencySymbol}
              exchangeRate={currency.exhangeRate}
            />
          </CurrencyContainer>
        ))}
      </Wrapper>
    );
  }
}

export default Wallet;
