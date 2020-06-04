import React, { Component } from 'react';

import Currency from '../currency/';

import { Wrapper, CurrencyContainer } from './style';

class Wallet extends Component {
  constructor() {
    super();
    this.state = {
      balances: [],
      rates: [],
      updatedBalances: false,
      updatedRate: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { currencies } = this.props;
    if (
      currencies.length &&
      !this.state.updatedBalances &&
      !this.state.updatedRate
    ) {
      const promises = currencies.map((currency) => currency.balance);
      const ratesPromises = currencies.map((currency) => currency.exhangeRate);

      Promise.all(promises).then((results) => {
        this.setState({
          balances: [...this.state.balances, ...results],
          updatedBalances: true,
        });
      });

      Promise.all(ratesPromises).then((results) => {
        this.setState({
          rates: [...this.state.rates, ...results],
          updatedRate: true,
        });
      });
    }
  }
  render() {
    const { currencies } = this.props;
    const { balances } = this.state;
    const { rates } = this.state;

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
                exchangeRate={rates[index] ? rates[index].buy : ''}
              />
            </CurrencyContainer>
          ))}
      </Wrapper>
    );
  }
}

export default Wallet;
