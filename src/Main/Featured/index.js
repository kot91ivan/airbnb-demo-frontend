import React from "react";
import styled from "styled-components";
import { Title } from "../Styled";
import { Section, Arrow, LinkAll, Header, Content } from "../Styled";
import Card from "./Card";

import pic1 from "./Featured-1.png";
import pic2 from "./Featured-2.png";
import pic3 from "./Featured-3.png";
import pic4 from "./Featured-4.png";
import pic5 from "./Featured-5.png";
import pic6 from "./Featured-6.png";
import smallArrow from "../Arrows/smallArrow.svg";

export const Name = styled.p`
  color: #383838;
  font-size: 12px;
  line-height: 14px;
  font-weight: normal;
  margin-top: 8px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const BigArrow = Arrow.extend`
  top: 44%;
`;

export default () => (
  <div className="container">
    <Section>
      <Header>
        <div className="col-xs-8 col-sm-6 col-md-6">
          <Title>Featured destinations</Title>
        </div>
        <div className="col-xs-offset-1 col-xs-3  col-md-offset-5 col-md-1">
          <LinkAll href="#">
            See all <img src={smallArrow} alt="arrow" />
          </LinkAll>
        </div>
      </Header>
      <Content>
        <div className="col-xs-4 col-sm-3 col-md-2">
          <Card img={pic1} name="Paris" alt="Paris" />
        </div>
        <div className="col-xs-4 col-sm-3 col-md-2">
          <Card img={pic2} name="Miami" alt="Miami" />
        </div>
        <div className="col-xs-4 col-sm-3 col-md-2">
          <Card img={pic3} name="Tokyo" alt="Tokyo" />
        </div>
        <div className="col-xs-4 col-sm-3 col-md-2">
          <Card img={pic4} name="Cape Town" alt="Cape Town" />
        </div>
        <div className="col-xs-4 col-sm-3 col-md-2">
          <Card img={pic5} name="Seoul" alt="Seoul" />
        </div>
        <div className="col-xs-4 col-sm-3 col-md-2">
          <Card img={pic6} name="Los Angeles" alt="Los Angeles" />
        </div>
        <BigArrow />
      </Content>
    </Section>
  </div>
);
