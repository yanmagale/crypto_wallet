import React from 'react';

import { Wrapper } from './style';

const Currency = ({
  name,
  balance,
  currencySymbol,
  initials,
  exchangeRate,
}) => {
  return (
    <React.Fragment>
      <Wrapper>
        <p>{name}</p>
        <p>{balance}</p>
        <p>{currencySymbol}</p>
        <p>{initials}</p>
        <p>{exchangeRate}</p>
        <div>
          <ul>
            <li>Comprar</li>
            <li>Vender</li>
            <li>Trocar</li>
          </ul>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Currency;
