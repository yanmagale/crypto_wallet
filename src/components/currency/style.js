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
    width: 40%;
  }

  .currency__actions a:first-child {
    margin-right: 10px;
  }

  @media only screen and (max-width: 400px) {
    .currency__actions {
      flex-direction: column;
    }
    .currency__actions a:first-child {
      margin-bottom: 10px;
    }
  }
`;
