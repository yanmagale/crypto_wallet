import React, { Component } from 'react';

import Currency from '../currency/';

import { Wrapper, CurrencyContainer } from './style';

class Wallet extends Component {
  constructor() {
    super();
    this.state = {
      balances: [],
      updated: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { currencies } = this.props;
    if (currencies.length && !this.state.updated) {
      const promises = currencies.map((currency) => currency.balance);
      Promise.all(promises).then((results) => {
        this.setState({
          balances: [...this.state.balances, ...results],
          updated: true,
        });
      });
    }
  }
  render() {
    const { currencies } = this.props;
    const { balances } = this.state;
    return (
      <Wrapper>
        {balances.length &&
          currencies.map((currency, index) => (
            <CurrencyContainer key={index}>
              <Currency
                name={currency.name}
                balance={balances[index]}
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
