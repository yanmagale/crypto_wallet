import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Button, Price } from './style';

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
        <p>
          {initials} - {name}
        </p>
        <p>
          Saldo:
          <Price>
            {currencySymbol} {balance}
          </Price>
        </p>
        <p>
          Valor de compra: <Price> R$ {exchangeRate.buy}</Price>
        </p>
        <div className="currency__actions">
          <Link to={`/purchase?currency=${name}`}>
            <Button>Comprar {initials}</Button>
          </Link>
          <Link to={`/negociate?currency=${name}`}>
            <Button>Vender {initials}</Button>
          </Link>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Currency;
