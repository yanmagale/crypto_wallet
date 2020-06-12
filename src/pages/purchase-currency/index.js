import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import PurchaseForm from 'components/purchase/form/';
import CurrencyInformation from 'components/currency-information/';
import CurrencyBuilder from 'services/wallet/currencyHelper';
import TransactionService from 'services/transaction/';
import BalancesService from 'services/balances/';

import { Wrapper, Title, Container, NavigationContainer } from './style';

const PurchaseCurrencyPage = () => {
  let history = useHistory();
  let query = useQuery();

  const currency = CurrencyBuilder.getCurrency(query.get('currency'));

  async function createTransaction(transaction) {
    const exchangeRate = await currency.getExchangeRate();
    const balance = {
      type: 'sub',
      amount: parseInt(transaction.amount) * parseFloat(exchangeRate.buy),
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
    <Container>
      <Title>Comprar Moeda</Title>
      <Wrapper>
        <CurrencyInformation currency={currency} />
        <PurchaseForm
          currency={currency}
          handleCreateTransaction={createTransaction}
        />
      </Wrapper>
      <NavigationContainer>
        Para acessar sua carteira,
        <Link to={`/exchange`}>clique aqui</Link>
      </NavigationContainer>
    </Container>
  );
};

export default PurchaseCurrencyPage;
