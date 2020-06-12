import React from 'react';
import Currency from 'services/wallet/currency.js';
import BitcoinCurrency from 'services/wallet/currencies/bitcoin';
import { mount } from 'base/setupTests';

import CurrencyInformation from 'components/currency-information/';

describe('CurrencyInformation Component Tests', () => {
  const bitcoinCurrency = new Currency({
    name: 'bitcoin',
    initials: 'BTC',
    currencySymbol: 'B$',
    exchange: new BitcoinCurrency(),
  });

  const currencyInformation = mount(
    <CurrencyInformation currency={bitcoinCurrency} />
  );

  it('component render correctly', () => {
    expect(currencyInformation.exists()).toBeTruthy();
  });

  it('receive currency and render informations about that', () => {
    expect(currencyInformation.find('p')).toHaveLength(3);
    expect(currencyInformation.text().includes('Moeda - bitcoin')).toBe(true);
  });
});
