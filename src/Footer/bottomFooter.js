import React from 'react';
import styled from 'styled-components';
import GreyLogo from './gray-logo.svg';
import Facebook from './social/facebook.svg';
import Twitter from './social/twitter.svg';
import Instagram from './social/instagram.svg';

const Content = styled.div`
  display: flex;
  margin-bottom: 35px;
`;
const Copyright = styled.span`
  color: #636363;
  font-size: 15px;
  line-height: 18px;
  margin-left: 16px;
  font-weight: normal;
`;
const Link = styled.a`
  text-decoration: none;
  color: #636363;
  font-size: 15px;
  line-height: 18px;
  font-weight: light;
  margin-right: 16px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
`;
export default () => (
  <Content>
    <Item className="col-xs-4 col-sm-3 col-md-2">
      <img src={GreyLogo} width="20px" height="22px" alt="Logo" />
      <Copyright>© Airbnb Inc.</Copyright>
    </Item>
    <div className="col-xs-0 col-sm-3 col-md-6" />
    <Item className="col-xs-8 col-sm-6 col-md-4">
      <Link href="#">Terms</Link>
      <Link href="#">Privacy</Link>
      <Link href="#">Site Map</Link>
      <Link href="#">
        <img src={Facebook} width="24px" height="24px" alt="Facebook" />
      </Link>
      <Link href="#">
        <img src={Twitter} width="24px" height="24px" alt="Twitter" />
      </Link>
      <Link href="#">
        <img src={Instagram} width="24px" height="24px" alt="Instagram" />
      </Link>
    </Item>
  </Content>
);
