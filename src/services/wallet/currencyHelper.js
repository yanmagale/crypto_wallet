import Currency from 'services/wallet/currency.js';
import CurrencyManager from 'services/wallet/currencyManager.js';
import BitcoinCurrency from 'services/wallet/currencies/bitcoin';
import BritaCurrency from 'services/wallet/currencies/brita';

class CurrencyHelper {
  constructor() {
    if (!CurrencyHelper.instance) {
      CurrencyHelper.instance = this;
    }

    return CurrencyHelper.instance;
  }

  getCurrencies() {
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
    const myCurrencies = [];

    walletManager.addCurrency(bitcoinWallet);
    walletManager.addCurrency(britaWallet);
    const wallets = walletManager.getCurrencies();

    wallets.forEach((wallet, index) => {
      myCurrencies.push({
        name: wallet.getName(),
        balance: wallet.getBalance(),
        initials: wallet.getInitials(),
        currencySymbol: wallet.getCurrencySymbol(),
        exhangeRate: wallet.getExchangeRate(),
        index: index,
      });
    });

    return myCurrencies;
  }
}

const CurrencyBuilder = new CurrencyHelper();
Object.freeze(CurrencyBuilder);

export default CurrencyBuilder;
