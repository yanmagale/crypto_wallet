import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BankStatementTransactions from 'components/BankStatement/Transactions';
import BankStatementService from 'services/bankStatement/';
import { Title, NavigationContainer, TransactionsContainer } from './style';

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
        <Title>Extrato de Transações</Title>
        {transactions.length && (
          <TransactionsContainer>
            <BankStatementTransactions transactions={transactions} />
          </TransactionsContainer>
        )}
        <NavigationContainer>
          Para acessar sua carteira,
          <Link to={`/wallet`}>clique aqui</Link>
        </NavigationContainer>
      </div>
    );
  }
}
export default BankStatementPage;
