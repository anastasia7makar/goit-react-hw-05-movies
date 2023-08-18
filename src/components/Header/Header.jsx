import { HeaderStyle, NavItem, NavContainer } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyle>
      <NavContainer>
        <NavItem to="/" end>
          Home
        </NavItem>
        <NavItem to="/movies">Search movies</NavItem>
      </NavContainer>
    </HeaderStyle>
  );
};

export default Header;
