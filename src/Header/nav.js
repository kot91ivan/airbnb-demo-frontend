import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: none;

  @media (min-width: 991px) {
    display: flex;
    align-items: center;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #383838;
  margin: 8px;
  padding: 0;
  font-family: 'CircularAirBook', Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
`;

export default () => (
  <Nav>
    <Link href="#">Become a host</Link>
    <Link href="#">Help</Link>
    <Link href="#">Sign Up</Link>
    <Link href="#">Log In</Link>
  </Nav>
);
