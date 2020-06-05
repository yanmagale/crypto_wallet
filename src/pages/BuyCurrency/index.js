import React, { Component } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import BuyCurrencyForm from 'components/Buy/Form';
import CurrencyInformation from 'components/CurrencyInformation';
import CurrencyBuilder from 'services/wallet/currencyHelper/';
import TransactionService from 'services/transaction/';

const BuyCurrencyPage = () => {
  function createTransaction(transaction) {
    TransactionService.create(transaction)
      .then(() => {
        history.push('/wallet');
      })
      .catch((err) => console.log(err));
  }

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let history = useHistory();
  let query = useQuery();

  const currency = CurrencyBuilder.getCurrency(query.get('currency'));

  return (
    <div>
      <h3>ID: {query.get('currency')}</h3>
      <CurrencyInformation currency={currency} />
      <BuyCurrencyForm
        currency={currency}
        handleCreateTransaction={createTransaction}
      />
    </div>
  );
};

export default BuyCurrencyPage;
