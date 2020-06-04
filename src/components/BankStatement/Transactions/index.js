import React, { Component } from 'react';

class BankStatementTransactions extends Component {
  render() {
    const { transactions } = this.props;
    return (
      <React.Fragment>
        {transactions.map((transaction, index) => (
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
