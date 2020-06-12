import React, { Component } from 'react';

import { Wrapper, Information } from './style';

class CurrencyInformation extends Component {
  render() {
    const { currency } = this.props;
    return (
      <Wrapper>
        <Information>Moeda - {currency.getName()}</Information>
        <Information>Sigla - {currency.getInitials()}</Information>
        <Information>Símbolo - {currency.getCurrencySymbol()}</Information>
      </Wrapper>
    );
  }
}

export default CurrencyInformation;
