import React from 'react';
import styled from 'styled-components';
import smallArrow from './Arrows/smallArrow.svg';

const LinkAll = styled.a`
  text-decoration: none;
  color: #383838;
  font-size: 14px;
  font-family: 'CircularAir', Arial, sans-serif;
  font-weight: normal;
`;

export default () => (
  <LinkAll href="#">
    See all <img src={smallArrow} alt="arrow" />
  </LinkAll>
);
