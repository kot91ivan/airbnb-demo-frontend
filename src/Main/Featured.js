import React from 'react';
import styled from 'styled-components';
import Pic1 from './featured/1.png';
import Pic2 from './featured/2.png';
import Pic3 from './featured/3.png';
import Pic4 from './featured/4.png';
import Pic5 from './featured/5.png';
import Pic6 from './featured/6.png';
import SmallArrow from './arrows/smallArrow.svg';
import {Title} from './Styled';
import {Section, Arrow, LinkAll, CardLink, Header, Content} from './Styled';

const Name = styled.p`
  color: #383838;
  font-size: 15px;
  font-weight: normal;
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
          See all <img src={SmallArrow} alt="arrow" />
        </LinkAll>
      </div>
    </Header>
    <Content>
      <div className="col-xs-4 col-sm-3 col-md-2">
        <CardLink href="#">
          <img src={Pic1} width="100%" alt="Paris" />
          <Name>Paris</Name>
        </CardLink>
      </div>
      <div className="col-xs-4 col-sm-3 col-md-2">
        <CardLink href="#">
          <img src={Pic2} width="100%" alt="Miami" />
          <Name>Miami</Name>
        </CardLink>
      </div>
      <div className="col-xs-4 col-sm-3 col-md-2">
        <CardLink href="#">
          <img src={Pic3} width="100%" alt="Tokyo" />
          <Name>Tokyo</Name>
        </CardLink>
      </div>
      <div className="col-xs-4 col-sm-3 col-md-2">
        <CardLink href="#">
          <img src={Pic4} width="100%" alt="Cape Town" />
          <Name>Cape Town</Name>
        </CardLink>
      </div>
      <div className="col-xs-4 col-sm-3 col-md-2">
        <CardLink href="#">
          <img src={Pic5} width="100%" alt="Seoul" />
          <Name>Seoul</Name>
        </CardLink>
      </div>
      <div className="col-xs-4 col-sm-3 col-md-2">
        <CardLink href="#">
          <img src={Pic6} width="100%" alt="Los Angeles" />
          <Name>Los Angeles</Name>
        </CardLink>
      </div>
      <BigArrow />
    </Content>
  </Section>
);
