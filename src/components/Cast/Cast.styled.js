import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;

  margin: 0 auto;
  padding: 10px;
  list-style: none;
  
  p {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  img {
    padding: 10px;
    border-radius: 4px;
  }
`;

export const NoImage = styled.div`
  width: 200px;
  height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10px;

  border-radius: 4px;
  color: #fff;
  background-color: #000;
`;
