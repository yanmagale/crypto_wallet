import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to={`/buy?currency=${name}`}>
            <button>Comprar {initials}</button>
          </Link>
          <Link to="/sell">
            <button>Vender {initials}</button>
          </Link>
          <Link to="/change">
            <button>Trocar {initials}</button>
          </Link>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Currency;
