import React from 'react';
import styled from 'styled-components';
import pic1 from './explore/1.png';
import pic2 from './explore/2.png';
import pic3 from './explore/3.png';
import {Title, Section} from './Styled';

const Explores = styled.div`
  display: flex;
  overflow: hidden;
  margin-bottom: 48px;
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
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
    <div className="col-md-5">
      <Title> Explore Airbnb </Title>
    </div>
    <Explores>
      <div className="col-sm-4 col-md-4">
        <Card>
          <img src={pic1} alt="homes" />
          <Name>Homes</Name>
        </Card>
      </div>
      <div className="col-sm-4 col-md-4">
        <Card>
          <img src={pic2} alt="Experiences" />
          <Name>Experiences</Name>
        </Card>
      </div>
      <div className="col-sm-4 col-md-4">
        <Card>
          <img src={pic3} alt="Restaurants" />
          <Name>Restaurants</Name>
        </Card>
      </div>
    </Explores>
  </Section>
);
