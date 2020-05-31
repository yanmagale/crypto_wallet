import React, { Component } from 'react';

class CurrencyInformation extends Component {
  render() {
    const { currency } = this.props;
    return (
      <div>
        <p>{currency.getName()}</p>
        <p>{currency.getInitials()}</p>
        <p>{currency.getCurrencySymbol()}</p>
        <p>{currency.getExchangeRate()}</p>
      </div>
    );
  }
}

export default CurrencyInformation;
