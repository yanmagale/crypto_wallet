import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setNationalAmount } from 'redux-folder/actions';
import BalancesService from 'services/balances/';

import { Price } from './style';

class NationalExchange extends Component {
  componentDidMount() {
    BalancesService.getAmount()
      .then((response) => this.setNationalExchangeAmount(response))
      .catch((error) => console.error(error));
  }

  setNationalExchangeAmount(amount) {
    const { setNationalAmount } = this.props;
    setNationalAmount(amount);
  }

  render() {
    const { amount } = this.props;
    return (
      <React.Fragment>
        <div>
          Seu Saldo em Conta: <Price>R$ {amount}</Price>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNationalAmount: (amount) => {
      dispatch(setNationalAmount(amount));
    },
  };
};

const mapStateToProps = (state) => ({
  amount: state.nationalExchangeReducer.amount,
});

const NationalExchangeComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(NationalExchange);

export default NationalExchangeComponent;
