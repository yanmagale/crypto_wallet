import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class BuyCurrencyForm extends Component {
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

  handleSubmit(event) {
    event.preventDefault();
    //Store, update base
    console.log(this.state);
    this.props.history.push('/wallet');
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="amountImput">Quantidade</label>
            <input
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
              id="amountImput"
              placeholder="Quantidade a Comprar"
            />
          </div>
          <button>Comprar</button>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(BuyCurrencyForm);
