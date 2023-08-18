import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  gap: 30px;
  box-shadow: rgba(255, 67, 136, 0.4) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  margin-top: 20px;
  padding: 20px;

  img {
    width: 300px;
    height: auto;
  }

  p {
    padding-top: 8px;
  }

  h2 {
    margin-top: 10px;
  }

  ul {
    padding-left: 30px;
    padding-top: 10px;
  }
`;
