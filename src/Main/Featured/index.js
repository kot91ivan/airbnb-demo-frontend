import React from 'react';
import styled from 'styled-components';
import Pic1 from './Featured-1.png';
import Pic2 from './Featured-2.png';
import Pic3 from './Featured-3.png';
import Pic4 from './Featured-4.png';
import Pic5 from './Featured-5.png';
import Pic6 from './Featured-6.png';
import smallArrow from '../Arrows/smallArrow.svg';
import {Title} from '../Styled';
import {Section, Arrow, LinkAll, CardLink, Header, Content} from '../Styled';

const Name = styled.p`
  color: #383838;
  font-size: 12px;
  line-height: 14px;
  font-weight: normal;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;
const Img = styled.img`
  width: 100%;
`;
export const BigArrow = Arrow.extend`
  top: 48%;
`;

export default () => (
  <Section>
    <Header>
      <div className="col-xs-8 col-sm-6 col-md-6">
        <Title>Featured destinations</Title>
      </div>
      <div className="col-xs-offset-1 col-md-offset-5" />
      <div className="col-xs-3 col-md-1">
        <LinkAll href="#">
          See all <img src={smallArrow} alt="arrow" />
        </LinkAll>
      </div>
    </Header>
    <Content>
      <div className="col-xs-4 col-sm-3 col-md-2">
        <CardLink href="#">
          <Img src={Pic1} alt="Paris" />
          <Name>Paris</Name>
        </CardLink>
      </div>
      <div className="col-xs-4 col-sm-3 col-md-2">
        <CardLink href="#">
          <Img src={Pic2} alt="Miami" />
          <Name>Miami</Name>
        </CardLink>
      </div>
      <div className="col-xs-4 col-sm-3 col-md-2">
        <CardLink href="#">
          <Img src={Pic3} alt="Tokyo" />
          <Name>Tokyo</Name>
        </CardLink>
      </div>
      <div className="col-xs-4 col-sm-3 col-md-2">
        <CardLink href="#">
          <Img src={Pic4} alt="Cape Town" />
          <Name>Cape Town</Name>
        </CardLink>
      </div>
      <div className="col-xs-4 col-sm-3 col-md-2">
        <CardLink href="#">
          <Img src={Pic5} alt="Seoul" />
          <Name>Seoul</Name>
        </CardLink>
      </div>
      <div className="col-xs-4 col-sm-3 col-md-2">
        <CardLink href="#">
          <Img src={Pic6} alt="Los Angeles" />
          <Name>Los Angeles</Name>
        </CardLink>
      </div>
      <BigArrow />
    </Content>
  </Section>
);
