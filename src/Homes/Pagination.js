import React from "react";
import styled from "styled-components";
import Arrow from "./Shape.svg";

const Wrap = styled.div`
  padding-top: 25px;
`;

const LinkActive = styled.a`
  background: #008489;
  margin-right: 10px;
  border-radius: 16px;
  color: #fff;
  padding: 5px 13px;
  width: 32px;
  height: 32px;

  text-align: center;
`;
const Link = styled.a`
  color: #0f7276;
  margin: 15px;
`;

const LinkArrow = styled.a`
  color: #008489;
  cursor: pointer;
  width: 31px;
  height: 31px;
  text-align: center;
  margin-left: 10px;
  border-radius: 16px;
  border: 1px solid #008489;
  padding: 5px 13px;
  box-sizing: border-box;
`;

export default () => (
  <Wrap>
    <LinkActive>1</LinkActive>
    <Link>2</Link>
    <Link>3</Link>
    <Link>...</Link>
    <Link>17</Link>
    <LinkArrow>
      <img src={Arrow} alt="arrow" />
    </LinkArrow>
  </Wrap>
);
