import React from 'react';
import styled from 'styled-components';
import {Title} from '../Styled';
import {Section, Arrow, LinkAll, CardLink, Header, Content} from '../Styled';

import Pic1 from './popularReservations-1.png';
import Pic2 from './popularReservations-2.png';
import Pic3 from './popularReservations-3.png';
import Pic4 from './popularReservations-4.png';
import SmallArrow from '../Arrows/smallArrow.svg';

const Price = styled.span`
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

const Name = styled.p`
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

const Kind = styled.p`
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
  top: 45%;
`;

export default () => (
  <Section>
    <Header>
      <div className="col-xs-9 col-sm-5 col-md-9">
        <Title>Popular reservations around the world</Title>
      </div>
      <div className="col-sm-offset-1 col-md-offset-2" />
      <div className="col-xs-3 col-sm-2 col-md-1">
        <LinkAll href="#">
          See all <img src={SmallArrow} alt="arrow" />
        </LinkAll>
      </div>
    </Header>
    <Content>
      <div className="col-xs-6 col-sm-4 col-md-3">
        <CardLink href="#">
          <img src={Pic1} width="100%" alt="Chumley’s" />
          <Kind>Speakeasy</Kind>
          <Name>Chumley’s</Name>
          <Price>About $60 per person</Price>
        </CardLink>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3">
        <CardLink href="#">
          <img src={Pic2} width="100%" alt="Hanjan" />
          <Kind>Korean gastropub</Kind>
          <Name>Hanjan</Name>
          <Price>About $50 per person</Price>
        </CardLink>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3">
        <CardLink href="#">
          <img src={Pic3} width="100%" alt="Prime Meats" />
          <Kind>German american</Kind>
          <Name>Prime Meats</Name>
          <Price>About $55 per person</Price>
        </CardLink>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3">
        <CardLink href="#">
          <img src={Pic4} width="100%" alt="Seaprice" />
          <Kind>Fine seafood</Kind>
          <Name>Seaprice</Name>
          <Price>About $70 per person</Price>
        </CardLink>
      </div>
      <BigArrow />
    </Content>
  </Section>
);
