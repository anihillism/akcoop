import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';
import { breakpoints } from "../utils/breakpoints"

const StyledLink = styled(Link)`
  display: none;
  @media ${breakpoints.md} {
    display: flex;
    font-weight: 700;
    align-items: center;
    margin-top: 1rem;
    margin-left: 2rem;
  }
`;

const Nav = styled.nav`
  display: none;
  @media ${breakpoints.md} {
    display: flex;
    margin-top: 1rem;
    justify-content: flex-end;
    font-family: ${props => props.theme.fontFamily.body};
    font-weight: 500;
    font-size: 1.1rem;
    align-items: center;
    a {
      color: ${props => props.theme.colors.white.base};
      margin-left: 2rem;
      margin-right: 2rem;
      transition: all ${props => props.theme.transitions.default.duration};
      &:hover {
        color: ${props => props.theme.colors.white.grey};
      }
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src={logo} alt="AK Coops Logo"/>
    </StyledLink>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/coop">Coops</Link>
      <Link to="/about">About</Link>
    </Nav>
  </Headroom>
);

export default NavBar;
