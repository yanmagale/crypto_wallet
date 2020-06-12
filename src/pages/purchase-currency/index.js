import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import PurchaseForm from 'components/purchase/form/';
import CurrencyInformation from 'components/currency-information/';
import CurrencyBuilder from 'services/wallet/currencyHelper';
import TransactionService from 'services/transaction/';
import BalancesService from 'services/balances/';

const PurchaseCurrencyPage = () => {
  let history = useHistory();
  let query = useQuery();

  const currency = CurrencyBuilder.getCurrency(query.get('currency'));

  function createTransaction(transaction) {
    const balance = {
      type: 'sub',
      amount: transaction.amount, //qtd * valor de compra da moeda
    };
    Promise.all([
      TransactionService.create(transaction),
      BalancesService.add(balance),
    ])
      .then(() => {
        history.push('/exchange');
      })
      .catch((err) => console.log(err));
  }

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  return (
    <div>
      <h3>ID: {query.get('currency')}</h3>
      <CurrencyInformation currency={currency} />
      <PurchaseForm
        currency={currency}
        handleCreateTransaction={createTransaction}
      />
    </div>
  );
};

export default PurchaseCurrencyPage;
