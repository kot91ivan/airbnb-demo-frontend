import React from "react";
import styled from "styled-components";
import Card from "../Main/Homes/Card";

import Pic1 from "../Main/Homes/Homes-1.png";
import Pic2 from "../Main/Homes/Homes-2.png";
import Pic3 from "../Main/Homes/Homes-3.png";
import Pic4 from "../Main/Homes/Homes-4.png";
import Pic5 from "../Main/Homes/Homes-5.png";
import Pic6 from "../Main/Homes/Homes-6.png";

const Filters = styled.div`
  border-top: 1px solid rgba(72, 72, 72, 0.1);
  border-bottom: 1px solid rgba(72, 72, 72, 0.1);
  margin: 5px 0;
  padding: 20px 20px;
  width: 100%;
`;
const FilterButton = styled.button`
  background: #fff;
  font-family: "CircularAirBook", Arial, sans-serif;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font-size: 14px;
  line-height: 16px;
  padding: 5px 15px;
  color: #383838;
  margin-right: 15px;
`;

export default () => (
  <div>
    <div className="hidden-xs hidden-sm col-md-7">
      <Filters>
        <FilterButton>Dates</FilterButton>
        <FilterButton>Guests</FilterButton>
        <FilterButton>Room type</FilterButton>
        <FilterButton>Price</FilterButton>
        <FilterButton>Instant book</FilterButton>
        <FilterButton>More filters</FilterButton>
      </Filters>
    </div>
    <div>
      <div className="row  ">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <Card
            Img={Pic1}
            title="La Salentina"
            price={82}
            name="La Salentina, see, nature & relax"
            beds={9}
            amountHosts={97}
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <Card
            Img={Pic2}
            title="Whale Watching"
            price={98}
            name="Your private 3 bedr. riad and exclusive"
            beds={5}
            amountHosts={161}
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <Card
            Img={Pic3}
            title="Dreamy Tropical Tree House"
            price={211}
            name="Dreamy Tropical Tree House"
            beds={1}
            amountHosts={364}
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <Card
            Img={Pic4}
            title="Оld town luxury loft"
            price={110}
            name="Best location old town luxury loft"
            beds={1}
            amountHosts={369}
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <Card
            Img={Pic5}
            title="Lussuoso"
            price={83}
            name="Lussuoso. Vista incantevole."
            beds={6}
            amountHosts={105}
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <Card
            Img={Pic6}
            title="Lecce"
            price={72}
            name="In the historical center of Lecce"
            beds={3}
            amountHosts={221}
          />
        </div>
      </div>
    </div>
  </div>
);
