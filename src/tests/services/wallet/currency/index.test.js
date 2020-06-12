import Currency from 'services/wallet/currency.js';
import BitcoinCurrency from 'services/wallet/currencies/bitcoin';
import { enableFetchMocks } from 'jest-fetch-mock';

describe('Currencies Service', () => {
  beforeEach(() => {
    enableFetchMocks();
  });

  const bitcoinCurrency = new Currency({
    name: 'bitcoin',
    initials: 'BTC',
    currencySymbol: 'B$',
    exchange: new BitcoinCurrency(),
  });

  it('create currency and get informations about that', () => {
    expect(bitcoinCurrency.getName()).toBe('bitcoin');
    expect(bitcoinCurrency.getInitials()).toBe('BTC');
    expect(bitcoinCurrency.getCurrencySymbol()).toBe('B$');
  });

  it('get currency informations about Exchange rate', async () => {
    const exchangeRates = await bitcoinCurrency.getExchangeRate();
    expect(exchangeRates).toHaveProperty('buy');
    expect(exchangeRates).toHaveProperty('sell');
  });
});
