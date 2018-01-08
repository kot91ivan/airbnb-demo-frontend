import React from "react";
import styled from "styled-components";
import { Title } from "../Styled";
import { Section, Arrow, LinkAll, Header, Content } from "../Styled";
import Card from "./Card";

import pic1 from "./popularReservations-1.png";
import pic2 from "./popularReservations-2.png";
import pic3 from "./popularReservations-3.png";
import pic4 from "./popularReservations-4.png";
import smallArrow from "../Arrows/smallArrow.svg";

export const Price = styled.span`
  color: #383838;
  line-height: 14px;
  font-weight: normal;
  font-size: 12px;
  margin-top: 4px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export const Name = styled.p`
  color: #383838;
  line-height: 16px;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export const Kind = styled.p`
  color: #383838;
  font-size: 8px;
  line-height: 9px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 12px 0 2px 0;
  @media (min-width: 768px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const BigArrow = Arrow.extend`
  top: 41%;
`;

export default () => (
  <Section>
    <Header>
      <div className="col-xs-9 col-sm-5 col-md-9">
        <Title>Popular reservations around the world</Title>
      </div>
      <div className="col-xs-3 col-sm-offset-1 col-sm-2 col-md-offset-2 col-md-1">
        <LinkAll href="#">
          See all <img src={smallArrow} alt="arrow" />
        </LinkAll>
      </div>
    </Header>
    <Content>
      <div className="col-xs-6 col-sm-4 col-md-3">
        <Card
          img={pic1}
          alt="Chumley’s"
          kind="Speakeasy"
          name="Chumley’s"
          price={60}
        />
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3">
        <Card
          img={pic2}
          alt="Hanjan"
          kind="Korean gastropub"
          name="Hanjan"
          price={50}
        />
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3">
        <Card
          img={pic3}
          alt="Prime Meats"
          kind="German american"
          name="Prime Meats"
          price={55}
        />
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3">
        <Card
          img={pic4}
          alt="Seaprice"
          kind="Fine seafood"
          name="Seaprice"
          price={70}
        />
      </div>
      <BigArrow />
    </Content>
  </Section>
);
