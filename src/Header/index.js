import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

import logo from "./logo.svg";
import search from "./search.svg";
import downArrow from "./down.svg";

const Header = styled.header`
  padding: 15px;
  margin-bottom: 50px;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 1;
  background: #fff;
  width: 100%;
  box-shadow: 0 0 1px rgba(72, 72, 72, 0.5);
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
  padding: 12px 40px;
  font-size: 14px;
  font-family: "CircularAirBook", Arial, sans-serif;
  width: 120px;
  box-shadow: 0 0 1px rgba(56, 56, 56, 0.2);
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width: 432px;
    margin-left: 25px;
  }
  @media (min-width: 991px) {
    width: 350px;
  }
`;

const DropdownMenu = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background: none;

  @media (min-width: 991px) {
    display: none;
  }
`;

const Logo = styled.div`
  display: flex;
`;

export default () => (
  <Header>
    <div className="container">
      <div className="row middle-md">
        <div className="col-sm-2 col-md-1">
          <Logo>
            <Img src={logo} />
            <DropdownMenu>
              <img src={downArrow} alt="Menu Arrow" />
            </DropdownMenu>
          </Logo>
        </div>

        <div className="col-sm-3 col-md-5">
          <Search
            placeholder="Try &quot;Miami&quot;"
            name="search"
            type="text"
          />
        </div>
        <div className="col-md-offset-1 col-lg-offset-1 col-md-6">
          <Nav />
        </div>
      </div>
    </div>
  </Header>
);
