import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Title } from "../Styled";
import { Section, Content } from "../Styled";
import Card from "./Card";

import pic1 from "./Explore-1.png";
import pic2 from "./Explore-2.png";
import pic3 from "./Explore-3.png";

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  align-items: flex-start;
  flex-wrap: nowrap;
  box-shadow: 0 5px 5px rgba(72, 72, 72, 0.2);
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Name = styled.p`
  color: #383838;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  padding: 15px 24px;
  margin: 0px;
  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 20px;
  }
`;

export const Img = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    width: auto;
  }
`;

export default () => (
  <div className="container">
    <Section>
      <div className="col-sm-5 col-md-4">
        <Title>Explore Airbnb</Title>
      </div>
      <Content>
        <div className="col-xs-6 col-sm-5 col-md-4">
          <Link to="/homes" style={{ textDecoration: "none" }}>
            <Card img={pic1} title="Homes" name="Homes" />
          </Link>
        </div>
        <div className="col-xs-6 col-sm-5 col-md-4">
          <Card img={pic2} title="Experinces" name="Experinces" />
        </div>
        <div className="col-xs-6 col-sm-5 col-md-4">
          <Card img={pic3} title="Restaurant" name="Restaurant" />
        </div>
      </Content>
    </Section>
  </div>
);
