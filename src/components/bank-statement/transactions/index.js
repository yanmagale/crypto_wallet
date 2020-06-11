import React from 'react';
import { Wrapper } from './style';

const BankStatementTransactions = ({ transactions }) => {
  return (
    <React.Fragment>
      {transactions.map((transaction, index) => (
        <Wrapper key={index}>
          <p>{transaction.type}</p>
          <p>{transaction.currency}</p>
          <p>{transaction.amount}</p>
          <p>
            {new Date(transaction.date)
              .toJSON()
              .slice(0, 10)
              .replace(/-/g, '/')}
          </p>
        </Wrapper>
      ))}
    </React.Fragment>
  );
};

export default BankStatementTransactions;
