import React, { Component } from 'react';

import BankStatementService from '../../../services/bankStatement/';

class BankStatementTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    BankStatementService.getEntries()
      .then((response) => {
        console.log(response);
        this.setState({
          transactions: [...this.state.transactions, ...response],
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { transactions } = this.state;
    return (
      <React.Fragment>
        {transactions.length &&
          transactions.map((transaction, index) => (
            <div key={index}>
              <p>{transaction.type}</p>
              <p>{transaction.currency}</p>
              <p>{transaction.amount}</p>
              <p>{transaction.date}</p>
            </div>
          ))}
      </React.Fragment>
    );
  }
}

export default BankStatementTransactions;
