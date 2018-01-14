import React from "react";
import styled from "styled-components";
import { Title } from "../Styled";
import { Section, Arrow, LinkAll, Header, Content } from "../Styled";
import Card from "./Card";

import pic1 from "./Experiences-1.png";
import pic2 from "./Experiences-2.png";
import pic3 from "./Experiences-3.png";
import pic4 from "./Experiences-4.png";
import smallArrow from "../Arrows/smallArrow.svg";

export const Price = styled.span`
  color: #383838;
  font-weight: bold;
`;

export const Name = styled.p`
  color: #383838;
  font-size: 13px;
  margin: 8px 0 6px 0;
  font-family: "CircularAirLight", Arial;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Reviews = styled.p`
  color: #383838;
  font-size: 12px;
  display: flex;
`;

export const BigArrow = Arrow.extend`
  top: 43%;
`;

export default () => (
  <div className="container">
    <Section>
      <Header>
        <div className="col-xs-4 col-sm-4 col-md-3">
          <Title>Experiences</Title>
        </div>
        <div className="col-xs-offset-5 col-xs-3 col-sm-offset-6 col-sm-2 col-md-offset-8 col-md-1">
          <LinkAll href="#">
            See all <img src={smallArrow} alt="arrow" />
          </LinkAll>
        </div>
      </Header>
      <Content>
        <div className="col-xs-6 col-sm-4 col-md-3">
          <Card
            img={pic1}
            alt="Forest Terapy"
            name="Forest Terapy"
            price={29}
            reviews={44}
          />
        </div>
        <div className="col-xs-6 col-sm-4 col-md-3">
          <Card
            img={pic2}
            alt="Whale Watching"
            name="Whale Watching"
            price={69}
            reviews={40}
          />
        </div>
        <div className="col-xs-6 col-sm-4 col-md-3">
          <Card
            img={pic3}
            alt="Table Mountain Summit"
            name="Table Mountain Summit, Cable Car Down"
            price={70}
            reviews={29}
          />
        </div>
        <div className="col-xs-6 col-sm-4 col-md-3">
          <Card
            img={pic4}
            alt="Salsa Night"
            name="Salsa Night"
            price={50}
            reviews={50}
          />
        </div>
        <BigArrow />
      </Content>
    </Section>
  </div>
);
