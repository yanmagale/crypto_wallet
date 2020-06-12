import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrencies } from 'redux-folder/actions';

import UsersService from 'services/users/';
import CurrencyBuilder from 'services/wallet/currencyHelper';

import WalletComponent from 'components/wallet/';
import NationalExchange from 'components/national-exchange';

import { Wrapper, Title, WalletInformation, BankStatement } from './style';

class ExchangePage extends Component {
  constructor(props) {
    super(props);
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
    const { setCurrencies } = this.props;
    setCurrencies(CurrencyBuilder.getCurrencies());
  }

  render() {
    const { currencies } = this.props;
    return (
      <Wrapper>
        <header>
          <Title>Minha Carteira de Cryptomoedas</Title>
        </header>
        <WalletInformation>
          Veja abaixo informações sobre as moedas da sua carteira!
        </WalletInformation>
        <WalletComponent currencies={currencies} />
        <BankStatement>
          <NationalExchange />
          <div>
            Para acessar o seu extrato,{' '}
            <Link to={`/account-statement`}>clique aqui</Link>
          </div>
        </BankStatement>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrencies: (currencies) => {
      dispatch(setCurrencies(currencies));
    },
  };
};

const mapStateToProps = (state) => ({
  currencies: state.currenciesReducer.currencies,
});

const ExchangePageComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangePage);

export default withRouter(ExchangePageComponent);
