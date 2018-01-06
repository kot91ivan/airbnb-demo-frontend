import React from 'react';
import styled from 'styled-components';
import {Title} from '../Styled';
import {Section, Arrow, LinkAll, CardLink, Header, Content} from '../Styled';
import Stars from '../Stars';

import Pic1 from './Homes-1.png';
import Pic2 from './Homes-2.png';
import Pic3 from './Homes-3.png';
import SmallArrow from '../Arrows/smallArrow.svg';

const Price = styled.span`
  color: #383838;
  font-weight: bold;
  line-height: 18px;
`;

const Name = styled.p`
  color: #383838;
  font-size: 13px;
  line-height: 15px;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Hosts = styled.p`
  color: #383838;
  font-family: 'CircularAirLight', Arial, sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 14px;
  display: flex;
`;

const Beds = styled.p`
  color: #383838;
  font-size: 12px;
  line-height: 14px;
  font-weight: lighter;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const BigArrow = Arrow.extend`
  top: 42%;
`;

export default () => (
  <Section>
    <Header>
      <div className="col-xs-5 col-md-3">
        <Title>Homes</Title>
      </div>
      <div className="col-xs-offset-4 col-md-offset-8" />
      <div className="col-xs-3 col-md-1">
        <LinkAll href="#">
          See all <img src={SmallArrow} alt="arrow" />
        </LinkAll>
      </div>
    </Header>
    <Content>
      <div className="col-xs-8 col-sm-5 col-md-4">
        <CardLink href="#">
          <img src={Pic1} width="100%" alt="Whale Watching" />
          <Name>
            <Price>$82 </Price>La Salentina, see, nature & relax
          </Name>
          <Beds>Entire house · 9 beds</Beds>
          <Hosts>
            <Stars /> 97 · Superhost
          </Hosts>
        </CardLink>
      </div>
      <div className="col-xs-8 col-sm-5 col-md-4">
        <CardLink href="#">
          <img src={Pic2} width="100%" alt="Whale Watching" />
          <Name>
            <Price>$98 </Price>Your private 3 bedr. riad and exclusive
          </Name>
          <Beds>Entire house · 5 beds</Beds>
          <Hosts>
            <Stars />161 · Superhost
          </Hosts>
        </CardLink>
      </div>
      <div className="col-xs-8 col-sm-5 col-md-4">
        <CardLink href="#">
          <img src={Pic3} width="100%" alt="Whale Watching" />
          <Name>
            <Price>$211 </Price>Dreamy Tropical Tree House
          </Name>
          <Beds>Entire treehouse · 1 bed</Beds>
          <Hosts>
            <Stars /> 364 · Superhost
          </Hosts>
        </CardLink>
      </div>
      <BigArrow />
    </Content>
  </Section>
);
