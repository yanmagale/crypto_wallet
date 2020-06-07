import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex-direction: column;
  border: 1px solid;
  border-color: #14aa4b;

  font-size: 16px;
  border-radius: 5px;
  padding: 5px;
  p {
    font-size: 14px;
    margin: 0;
    text-align: center;
  }

  .currency__actions {
    display: flex;
    align-items: center;
    widows: 100%;
  }

  .currency__actions a {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background: #14aa4b;
    height: 60px;
    font-weight: bold;
    text-decoration: none;
  }

  .currency__actions a:hover {
    width: 100%;
    color: #ffffff;
    background: #17c757;
  }

  .currency__actions a:first-child {
    margin-right: 10px;
  }

  @media only screen and (max-width: 400px) {
    .currency__actions {
      flex-direction: column;
    }
    .currency__actions a {
      background: #14aa4b;
      height: 40px;
      font-size: 16px;
    }
    .currency__actions a:first-child {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

export const Button = styled.div`
  display: flex;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 14px;
  padding-left: 3px;
`;
