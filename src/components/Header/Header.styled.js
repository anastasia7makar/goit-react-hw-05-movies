import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderStyle = styled.header`
  padding: 15px 30px;
  display: flex;
  gap: 20px;
  box-shadow: 0 0 10px 4px hsl(0deg 0% 38% / 75%);
`;

export const NavContainer = styled.nav`
  display: flex;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: black;

  & + & {
    margin-left: 15px;
  }

  &.active {
    color: #ff4388;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration: underline;
  }
`;
