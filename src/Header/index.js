import React from 'react';
import styled from 'styled-components';
import Nav from './nav';
import logo from './icon/logo.svg';
import sea from './icon/search.svg';

const Header = styled.div`
  display: flex;
  padding-top: 23px;
  margin-bottom: 20px;
  align-items: center;
`;
const Logo = styled.img`
  height: 32px;
  weight: 30px;
`;

const Search = styled.input`
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: #ffffff url(${sea}) 2.5% 50% no-repeat;
  padding: 14px 40px;
  font-size: 16px;
  font-family: 'CircularAirBook', Arial, sans-serif;
  width: 300px;
`;

export default () => (
  <div className="container">
    <Header className="row">
      <div className="col-sm-1 col-md-1">
        <Logo src={logo} />
      </div>
      <div className="col-sm-3 col-md-5">
        <Search placeholder="Try &quot;Miami&quot;" name="search" type="text" />
      </div>
      <div className="col-sm-3 col-md-3" />
      <div className="col-sm-5 col-md-3">
        <Nav />
      </div>
    </Header>
  </div>
);
