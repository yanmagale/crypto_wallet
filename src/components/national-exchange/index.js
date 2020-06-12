import React, { Component } from 'react';
import BalancesService from 'services/balances/';

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
        <div>Seu Saldo em Conta: R$ {amount}</div>
      </React.Fragment>
    );
  }
}

export default NationalExchange;
