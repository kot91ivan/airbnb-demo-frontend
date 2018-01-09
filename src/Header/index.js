import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

import logo from "./logo.svg";
import search from "./search.svg";
import downArrow from "./down.svg";

const Header = styled.header`
  display: flex;
  padding-top: 23px;
  margin-bottom: 20px;
  align-items: center;
`;

const Img = styled.img`
  padding: 10px;
  height: 32px;
  width: 30px;
`;

const Search = styled.input`
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: #ffffff url(${search}) 2.5% 50% no-repeat;
  padding: 14px 40px;
  font-size: 14px;
  font-family: "CircularAirBook", Arial, sans-serif;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width: 350px;
  }
`;

const DropdownMenu = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background: none;
  padding: 20px;
  @media (min-width: 991px) {
    display: none;
  }
`;

const Logo = styled.div`
  display: flex;
`;

export default () => (
  <Header>
    <div className="col-sm-3 col-md-1">
      <Logo>
        <Img src={logo} />
        <DropdownMenu>
          <img src={downArrow} alt="Menu Arrow" />
        </DropdownMenu>
      </Logo>
    </div>

    <div className="col-sm-3 col-md-5">
      <Search placeholder="Try &quot;Miami&quot;" name="search" type="text" />
    </div>
    <div className="col-md-offset-2 col-md-3">
      <Nav />
    </div>
  </Header>
);
