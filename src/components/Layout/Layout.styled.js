import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 15px;
`;

export const MoviesList = styled.ul`
  padding: 20px;
`;

export const MoviesListItem = styled.li`
  font-size: 20px;
`;

export const MovieLink = styled(Link)`
  color: #3f101e;
`;

export const Form = styled.form`
  display: flex;
  gap: 15px;

  > input {
    padding: 16px 16px;
    border: 1px solid #36395a4d;
    border-radius: 4px;
    outline: none;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus-within {
      border: 1px solid rgba(255, 67, 136, 0.4);
    }
  }
`;

export const FormButton = styled.button`
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(255, 67, 136, 0.4) 0 2px 4px,
    rgba(255, 67, 136, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;

  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  .button-30:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;

export const DetailsContainer = styled.div`
  margin: 20px 40px;
  p {
    margin-top: 20px;
    font-size: 24px;
  }
`;

export const GoBack = styled(Link)`
  padding: 10px;
  display: block;
  width: 100px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #000;
  border-radius: 4px;
`;
