import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';

import BuyCurrencyForm from 'components/Buy/Form';
import CurrencyInformation from 'components/CurrencyInformation';

import CurrencyManager from 'services/wallet/currencyManager.js';
import Currency from 'services/wallet/currency.js';
import BitcoinCurrency from 'services/wallet/currencies/bitcoin';
import BritaCurrency from 'services/wallet/currencies/brita';

// class BuyCurrencyPage extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Buy Currency Page</h2>
//       </div>
//     );
//   }
// }
// export default BuyCurrencyPage;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BuyCurrencyPage = () => {
  //   let { currency } = useParams();
  let query = useQuery();

  const walletManager = new CurrencyManager();
  const bitcoinWallet = new Currency({
    name: 'bitcoin',
    initials: 'BTC',
    currencySymbol: 'B$',
    exchange: new BitcoinCurrency(),
  });
  const britaWallet = new Currency({
    name: 'brita',
    initials: 'BRI',
    currencySymbol: 'R$',
    exchange: new BritaCurrency(),
  });

  walletManager.addCurrency(bitcoinWallet);
  walletManager.addCurrency(britaWallet);
  const currency = walletManager.getCurrency(query.get('currency'));

  return (
    <div>
      <h3>ID: {query.get('currency')}</h3>
      <CurrencyInformation currency={currency} />
      <BuyCurrencyForm currency={currency} />
    </div>
  );
};

export default BuyCurrencyPage;
