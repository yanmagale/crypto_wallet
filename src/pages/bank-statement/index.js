import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTransactions } from 'redux-folder/actions';

import BankStatementTransactions from 'components/bank-statement/transactions';
import BankStatementService from 'services/bank-statement/';
import { Title, NavigationContainer, TransactionsContainer } from './style';

class BankStatementPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    BankStatementService.getEntries()
      .then((response) => {
        const { setTransactions } = this.props;
        setTransactions(response);
      })
      .catch((error) => console.error(error));
  }
  render() {
    const { transactions } = this.props;
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

const mapDispatchToProps = (dispatch) => {
  return {
    setTransactions: (currencies) => {
      dispatch(setTransactions(currencies));
    },
  };
};

const mapStateToProps = (state) => ({
  transactions: state.bankStatementReducer.transactions,
});

const BankStatementComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(BankStatementPage);

export default BankStatementComponent;
