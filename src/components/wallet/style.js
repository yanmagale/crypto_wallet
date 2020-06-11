import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 600px 600px;
  grid-gap: 20px;
  padding-top: 10px;
  height: 50vh;

  @media only screen and (min-width: 320px) and (max-width: 359px) {
    grid-template-columns: 130px 130px;
    grid-gap: 30px;
  }

  @media only screen and (min-width: 360px) and (max-width: 400px) {
    grid-template-columns: 150px 150px;
    grid-gap: 30px;
  }
`;

export const CurrencyContainer = styled.section`
  height: 180px;

  @media only screen and (max-width: 400px) {
    height: 210px;
  }
`;
