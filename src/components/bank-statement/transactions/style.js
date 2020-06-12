import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 10px 0 10px 0;
  margin-top: 10px;
  font-size: 15px;
  p {
    margin: 0;
    width: 25%;
    padding-left: 5px;
  }

  :nth-child(2n) {
    background: #d9d9d9;
  }
`;
