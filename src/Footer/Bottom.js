import React from "react";
import styled from "styled-components";

import logo from "./gray-logo.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
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

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export default () => (
  <Content>
    <div className="col-xs-6 col-sm-3 col-md-3">
      <img src={logo} width="20px" height="22px" alt="Logo" />
      <Copyright>© Airbnb Inc.</Copyright>
    </div>
    <div className="col-xs-12 col-sm-offset-1 col-sm-5 col-md-offset-5 col-md-4">
      <Nav>
        <Link href="#">Terms</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Site Map</Link>
        <Link href="#">
          <img src={facebook} width="24px" height="24px" alt="Facebook" />
        </Link>
        <Link href="#">
          <img src={twitter} width="24px" height="24px" alt="Twitter" />
        </Link>
        <Link href="#">
          <img src={instagram} width="24px" height="24px" alt="Instagram" />
        </Link>
      </Nav>
    </div>
  </Content>
);
