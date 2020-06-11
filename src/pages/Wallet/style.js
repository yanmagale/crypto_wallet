import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin: 0;
  padding-bottom: 5px;
`;

export const Wrapper = styled.section`
  margin-top: 10px;
  padding: 5px 10px;
  header {
    border-bottom: 1px solid #14aa4b;
    margin-bottom: 10px;
  }
`;

export const WalletInformation = styled.div`
  font-size: 14px;
  margin-top: 20px;
  text-align: center;
  font-style: italic;
`;

export const BankStatement = styled.div`
  background: #e9e9e9;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div:first-child {
    padding-bottom: 10px;
  }
`;
