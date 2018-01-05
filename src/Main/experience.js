import React from 'react';
import styled from 'styled-components';
import Pic1 from './experiences/1.png';
import Pic2 from './experiences/2.png';
import Pic3 from './experiences/3.png';
import Pic4 from './experiences/4.png';
import Star from './Stars';
import smallArrow from './arrows/smallArrow.svg';
import {Title, Section, Arrow, LinkAll} from './Styled';

const FirstTitle = styled.div`
  display: flex;
  align-items: baseline;
`;
const Content = styled.div`
  display: flex;
  margin-bottom: 48px;
  overflow: hidden;
`;
const Price = styled.span`
  color: #383838;
  font-weight: bold;
`;
const Name = styled.p`
  color: #383838;
  font-size: 15px;
  font-weight: normal;
`;

const Reviews = styled.p`
  color: #383838;
  font-size: 12px;
  display: flex;
`;

export const BigArrow = Arrow.extend`
  top: 45%;
`;

export default () => (
  <Section>
    <FirstTitle>
      <div className="col-xs-10 col-sm-2 col-md-2">
        <Title> Experiences </Title>
      </div>
      <div className="col-sm-8 col-md-9" />
      <div className="col-xs-2 col-sm-2 col-md-1">
        <LinkAll href="#">
          See all <img src={smallArrow} alt="arrow" />
        </LinkAll>
      </div>
    </FirstTitle>
    <Content>
      <div className="col-xs-6 col-sm-4 col-md-3">
        <img src={Pic1} width="100%" alt="Forest Terapy" />
        <Name>
          <Price>$29 </Price>Forest therapy{' '}
        </Name>
        <Reviews>
          <Star /> 44 reviews
        </Reviews>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3">
        <img src={Pic2} width="100%" alt="Whale Watching" />
        <Name>
          <Price>$69 </Price>Whale Watching
        </Name>
        <Reviews>
          <Star /> 40 reviews
        </Reviews>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3">
        <img
          src={Pic3}
          width="100%"
          alt="Table Mountain Summit, Cable Car Down"
        />
        <Name>
          <Price>$70 </Price>Table Mountain Summit, Cable Car Down
        </Name>
        <Reviews>
          <Star /> 29 reviews
        </Reviews>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3">
        <img src={Pic4} width="100%" alt="Salsa Night" />
        <Name>
          <Price>$50 </Price>Salsa Night
        </Name>
        <Reviews>
          <Star /> 50 reviews
        </Reviews>
      </div>
      <BigArrow />
    </Content>
  </Section>
);
