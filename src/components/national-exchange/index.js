import React, { Component } from 'react';
import BalancesService from 'services/balances/';

import { Price } from './style';

class NationalExchange extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
    };
  }

  componentDidMount() {
    BalancesService.getAmount()
      .then((response) => {
        this.setState({ amount: response });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { amount } = this.state;
    return (
      <React.Fragment>
        <div>
          Seu Saldo em Conta: <Price>R$ {amount}</Price>
        </div>
      </React.Fragment>
    );
  }
}

export default NationalExchange;
