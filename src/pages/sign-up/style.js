import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: #e9e9e9;
  text-align: center;
  margin: 30px auto;
  flex-direction: column;

  .form__title {
    color: #2d3844;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin: 0;
  padding-bottom: 5px;
`;

export const Container = styled.section`
  padding: 5px 10px;
`;

export const ApplicationContent = styled.p`
  margin: 0;
  padding: 15px 10px;
  font-size: 18px;
  text-align: center;
`;
