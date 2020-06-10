import Currency from 'services/wallet/currency.js';
import BitcoinCurrency from 'services/wallet/currencies/bitcoin';

it('create currency and get informations about that', () => {
  const bitcoinCurrency = new Currency({
    name: 'bitcoin',
    initials: 'BTC',
    currencySymbol: 'B$',
    exchange: new BitcoinCurrency(),
  });

  expect(bitcoinCurrency.getName()).toBe('bitcoin');
  expect(bitcoinCurrency.getInitials()).toBe('BTC');
  expect(bitcoinCurrency.getCurrencySymbol()).toBe('B$');
});
