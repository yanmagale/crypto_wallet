import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BankStatementTransactions from 'components/BankStatement/Transactions';
import BankStatementService from 'services/bankStatement/';

class BankStatementPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    BankStatementService.getEntries()
      .then((response) => {
        this.setState({
          transactions: [...this.state.transactions, ...response],
        });
      })
      .catch((error) => console.error(error));
  }
  render() {
    const { transactions } = this.state;
    return (
      <div>
        <h2>Bank Statement Page</h2>
        {transactions.length && (
          <BankStatementTransactions transactions={transactions} />
        )}
        <Link to={`/wallet`}>
          <button>Acessar minha carteira</button>
        </Link>
      </div>
    );
  }
}
export default BankStatementPage;
