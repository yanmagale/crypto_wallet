import styled from 'styled-components';

export const FormElement = styled.div`
  display: flex;
  justify-content: space-between;
  width: 210px;
  align-items: center;
  font-size: 17px;

  input {
    padding: 4px;
    margin-left: 5px;
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
  height: 40px;
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
