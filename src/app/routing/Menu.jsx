import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(45, 208, 31, 1) 0%, rgba(18, 152, 14, 0.83) 100%);
  height: ${({ theme: { sizes } }) => sizes.grassHeight};
`;

const NavLink = styled(_NavLink)`
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.textPrimary};

  &.active {
    text-decoration: underline;
  }
`;

const menuItems = [];

const Menu = () => {
  return (
    <Wrapper>
      {menuItems.map(({ path, label }) => (
        <NavLink key={path} to={path} end>
          {label}
        </NavLink>
      ))}
    </Wrapper>
  );
};

export default Menu;
