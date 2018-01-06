import React from 'react';
import styled from 'styled-components';
import Arr from './arrows/bigArrow.svg';

export const LinkAll = styled.a`
  text-decoration: none;
  color: #383838;
  font-size: 14px;
  font-family: 'CircularAir', Arial, sans-serif;
  font-weight: normal;
`;

export const Arrow = styled.button`
  display: none;
  background: #ffffff url(${Arr}) 50% 50% no-repeat;
  width: 40px;
  height: 40px;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  border-radius: 20px;
  position: absolute;
  left: 98%;
  cursor: pointer;
  @media (min-width: 991px) {
    display: block;
  }
`;

export const Section = styled.div`
  position: relative;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 32px;
  line-height: 34px;
  color: #383838;
  margin-bottom: 24px;
  @media (max-device-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const CardLink = styled.a`
  text-decoration: none;
`;

export const Header = styled.header`
  display: flex;
  align-items: baseline;
`;

export const Content = styled.div`
  display: flex;
  margin-bottom: 48px;
  overflow: hidden;
  flex-wrap: nowrap;
`;
