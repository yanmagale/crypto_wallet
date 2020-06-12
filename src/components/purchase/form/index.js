import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { FormElement, Button } from './style';

class PurchaseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  shapeTransaction() {
    const { amount } = this.state;
    const { currency } = this.props;
    const date = new Date().getTime();
    const transaction = {
      type: 'purchase',
      currency: currency.getName(),
      amount,
      date,
    };

    return transaction;
  }

  handleSubmit(event) {
    const { handleCreateTransaction } = this.props;
    event.preventDefault();
    handleCreateTransaction(this.shapeTransaction());
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <FormElement>
            <label htmlFor="amountImput">Quantidade</label>
            <input
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
              id="amountImput"
              placeholder="Quantidade a Comprar"
              required
            />
          </FormElement>
          <Button>Comprar</Button>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(PurchaseForm);
