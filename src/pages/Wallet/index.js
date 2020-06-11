import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrencies } from 'redux-folder/actions';

import UsersService from 'services/users/';
import CurrencyBuilder from 'services/wallet/currencyHelper';

import Wallet from 'components/wallet/';
import { Wrapper, Title, WalletInformation, BankStatement } from './style';

class WalletPage extends Component {
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
        <Wallet currencies={currencies} />
        <BankStatement>
          <div>Seu Saldo em Conta: R$ 100.000,00</div>
          <div>
            Para acessar o seu extrato,{' '}
            <Link to={`/bank-statement`}>clique aqui</Link>
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

const WalletPageComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletPage);

export default withRouter(WalletPageComponent);
