import React, { Component } from 'react';
import BankStatementTransactions from '../../components/BankStatement/Transactions';

class BankStatementPage extends Component {
  render() {
    return (
      <div>
        <h2>Bank Statement Page</h2>
        <BankStatementTransactions />
      </div>
    );
  }
}
export default BankStatementPage;
