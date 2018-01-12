import React from "react";
import styled from "styled-components";
import { Title } from "../Styled";
import { Section, Arrow, LinkAll, Header, Content } from "../Styled";
import Card from "./Card";

import Pic1 from "./Homes-1.png";
import Pic2 from "./Homes-2.png";
import Pic3 from "./Homes-3.png";
import smallArrow from "../Arrows/smallArrow.svg";

export const BigArrow = Arrow.extend`
  top: 38%;
`;

export default () => (
  <div className="container">
    <Section>
      <Header>
        <div className="col-xs-5 col-md-3">
          <Title>Homes</Title>
        </div>
        <div className="col-xs-offset-4 col-xs-3 col-md-offset-8 col-md-1">
          <LinkAll href="#">
            See all <img src={smallArrow} alt="arrow" />
          </LinkAll>
        </div>
      </Header>
      <Content>
        <div className="col-xs-8 col-sm-5 col-md-4">
          <Card
            Img={Pic1}
            title="La Salentina"
            price={82}
            name="La Salentina, see, nature & relax"
            beds={9}
            amountHosts={97}
          />
        </div>
        <div className="col-xs-8 col-sm-5 col-md-4">
          <Card
            Img={Pic2}
            title="Whale Watching"
            price={98}
            name="Your private 3 bedr. riad and exclusive"
            beds={5}
            amountHosts={161}
          />
        </div>
        <div className="col-xs-8 col-sm-5 col-md-4">
          <Card
            Img={Pic3}
            title="Dreamy Tropical Tree House"
            price={211}
            name="Dreamy Tropical Tree House"
            beds={1}
            amountHosts={364}
          />
        </div>
        <BigArrow />
      </Content>
    </Section>
  </div>
);
