import React from 'react';
import styled from 'styled-components';
import pic1 from './1.png';
import pic2 from './2.png';
import pic3 from './3.png';
import {Title} from '../Styled';
import {Section, CardLink, Content} from '../Styled';

const Card = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
`;

const Name = styled.p`
  color: #383838;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  padding: 0 24px;
  margin: 0px;
`;

export default () => (
  <Section>
    <div className="col-sm-4 col-md-4">
      <Title>Explore Airbnb</Title>
    </div>
    <Content>
      <div className="col-sm-4 col-md-4">
        <CardLink href="#">
          <Card>
            <img src={pic1} alt="homes" />
            <Name>Homes</Name>
          </Card>
        </CardLink>
      </div>
      <div className="col-sm-4 col-md-4">
        <CardLink href="#">
          <Card>
            <img src={pic2} alt="Experiences" />
            <Name>Experiences</Name>
          </Card>
        </CardLink>
      </div>
      <div className="col-sm-4 col-md-4">
        <CardLink href="#">
          <Card>
            <img src={pic3} alt="Restaurants" />
            <Name>Restaurants</Name>
          </Card>
        </CardLink>
      </div>
    </Content>
  </Section>
);
