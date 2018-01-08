import React from "react";
import styled from "styled-components";

import Arr from "./Arrows/bigArrow.svg";

export const Img = styled.img`
  width: 100%;
`;

export const Price = styled.span`
  color: #383838;
  font-weight: bold;
  line-height: 18px;
`;

export const Name = styled.p`
  color: #383838;
  font-size: 13px;
  line-height: 15px;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Beds = styled.p`
  color: #383838;
  font-size: 12px;
  line-height: 14px;
  font-weight: lighter;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Hosts = styled.p`
  color: #383838;
  font-family: "CircularAirLight", Arial, sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 14px;
  display: flex;
`;

export const LinkAll = styled.a`
  text-decoration: none;
  color: #383838;
  font-size: 12px;
  font-family: "CircularAir", Arial, sans-serif;
  font-weight: normal;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Arrow = styled.button`
  display: none;
  background: #ffffff url(${Arr}) 50% 50% no-repeat;
  width: 40px;
  height: 40px;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  border-radius: 20px;
  position: absolute;
  left: 97%;
  cursor: pointer;
  @media (min-width: 991px) {
    display: block;
  }
`;

export const Section = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 24px;
  line-height: 28px;
  color: #383838;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;
    margin-bottom: 24px;
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
  margin-bottom: 40px;
  flex-wrap: nowrap;
  overflow-x: auto;
  @media (min-width: 768px) {
    margin-bottom: 48px;
  }
`;
