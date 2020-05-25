import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 600px 600px;
  grid-gap: 20px;
  height: 50vh;
  padding-top: 10px;

  @media only screen and (max-width: 400px) {
    grid-template-columns: 150px 150px;
    grid-gap: 20px;
  }
`;

export const CurrencyContainer = styled.section`
  height: 180px;

  @media only screen and (max-width: 400px) {
    height: 200px;
  }
`;
