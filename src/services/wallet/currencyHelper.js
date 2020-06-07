import Currency from 'services/wallet/currency.js';
import CurrencyManager from 'services/wallet/currencyManager.js';
import BitcoinCurrency from 'services/wallet/currencies/bitcoin';
import BritaCurrency from 'services/wallet/currencies/brita';

class CurrencyHelper {
  constructor() {
    if (!CurrencyHelper.instance) {
      CurrencyHelper.instance = this;
      CurrencyHelper.walletManager = null;
    }

    return CurrencyHelper.instance;
  }

  getCurrencies() {
    CurrencyHelper.walletManager = new CurrencyManager();
    const bitcoinWallet = new Currency({
      name: 'bitcoin',
      initials: 'BTC',
      currencySymbol: 'B$',
      exchange: new BitcoinCurrency(),
    });
    const britaWallet = new Currency({
      name: 'brita',
      initials: 'BRI',
      currencySymbol: '$',
      exchange: new BritaCurrency(),
    });
    const myCurrencies = [];

    CurrencyHelper.walletManager.addCurrency(bitcoinWallet);
    CurrencyHelper.walletManager.addCurrency(britaWallet);
    const wallets = CurrencyHelper.walletManager.getCurrencies();

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

  getCurrency(currency) {
    if (!CurrencyHelper.walletManager) {
      this.getCurrencies();
    }
    return CurrencyHelper.walletManager.getCurrency(currency);
  }
}

const CurrencyBuilder = new CurrencyHelper();
Object.freeze(CurrencyBuilder);

export default CurrencyBuilder;
