import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import UsersService from 'services/users/';
import CurrencyBuilder from 'services/wallet/currencyHelper/';

import Wallet from 'components/Wallet';
import { Wrapper, Title, WalletInformation, BankStatement } from './style';

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
    const { currencies } = this.state;
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

export default withRouter(WalletPage);
