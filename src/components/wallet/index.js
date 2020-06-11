import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBalances, setRates } from 'redux-folder/actions';

import Currency from 'components/currency/';

import { Wrapper, CurrencyContainer } from './style';

class Wallet extends Component {
  constructor() {
    super();
    this.state = {
      updatedBalances: false,
      updatedRate: false,
    };
  }

  componentDidUpdate() {
    const { currencies, setBalances, setRates } = this.props;
    if (
      currencies.length &&
      !this.state.updatedBalances &&
      !this.state.updatedRate
    ) {
      const promises = currencies.map((currency) => currency.balance);
      const ratesPromises = currencies.map((currency) => currency.exhangeRate);

      Promise.all(promises).then((results) => {
        setBalances(results);
        this.setState({
          updatedBalances: true,
        });
      });

      Promise.all(ratesPromises).then((results) => {
        setRates(results);
        this.setState({
          updatedRate: true,
        });
      });
    }
  }
  render() {
    const { currencies, balances, rates } = this.props;

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

const mapDispatchToProps = (dispatch) => {
  return {
    setBalances: (balances) => {
      dispatch(setBalances(balances));
    },
    setRates: (rates) => {
      dispatch(setRates(rates));
    },
  };
};

const mapStateToProps = (state) => ({
  balances: state.walletReducer.balances,
  rates: state.walletReducer.rates,
});

const WalletComponent = connect(mapStateToProps, mapDispatchToProps)(Wallet);

export default WalletComponent;
