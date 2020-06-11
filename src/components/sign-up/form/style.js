import styled from 'styled-components';

export const FormElement = styled.div`
  display: flex;
  justify-content: space-between;
  width: 210px;
  align-items: center;
  font-size: 17px;

  :first-child {
    margin-bottom: 20px;
  }

  input {
    padding: 4px;
  }
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background: #14aa4b;
  height: 60px;
  font-weight: bold;
  text-decoration: none;
  margin: 20px 0;

  :hover {
    width: 100%;
    color: #ffffff;
    background: #17c757;
    cursor: pointer;
  }
`;
