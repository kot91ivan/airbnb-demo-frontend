import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import Card from "../Main/Homes/Card";
import Pagination from "./Pagination";

import Filters from "./Filters";

import Pic1 from "../Main/Homes/Homes-1.png";
import Pic2 from "../Main/Homes/Homes-2.png";
import Pic3 from "../Main/Homes/Homes-3.png";
import Pic4 from "../Main/Homes/Homes-4.png";
import Pic5 from "../Main/Homes/Homes-5.png";
import Pic6 from "../Main/Homes/Homes-6.png";

const Wrap = styled.div`
  margin-top: 170px;
`;

const Wrapper = styled.div`
  right: 0;
  bottom: 0;
  width: 33%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  position: fixed;
`;

const Rentals = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #383838;
  padding-top: 10px;
`;

const Text = styled.p`
  color: #363636;
  font-size: 1rem;
  line-height: 19px;
  padding: 30px 0 10px 0;
`;

export default () => (
  <Wrap>
    <Filters />
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
          <div className="row ">
            <div className="col-xs-12 col-sm-6">
              <Card
                Img={Pic1}
                title="La Salentina"
                price={82}
                name="La Salentina, see, nature & relax"
                beds={9}
                amountHosts={97}
              />
            </div>
            <div className="col-xs-12 col-sm-6">
              <Card
                Img={Pic2}
                title="Whale Watching"
                price={98}
                name="Your private 3 bedr. riad and exclusive"
                beds={5}
                amountHosts={161}
              />
            </div>
            <div className="col-xs-12 col-sm-6">
              <Card
                Img={Pic3}
                title="Dreamy Tropical Tree House"
                price={211}
                name="Dreamy Tropical Tree House"
                beds={1}
                amountHosts={364}
              />
            </div>
            <div className="col-xs-12 col-sm-6">
              <Card
                Img={Pic4}
                title="Оld town luxury loft"
                price={110}
                name="Best location old town luxury loft"
                beds={1}
                amountHosts={369}
              />
            </div>
            <div className="col-xs-12 col-sm-6">
              <Card
                Img={Pic5}
                title="Lussuoso"
                price={83}
                name="Lussuoso. Vista incantevole."
                beds={6}
                amountHosts={105}
              />
            </div>
            <div className="col-xs-12 col-sm-6">
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
          <div className="row center-sm">
            <div className="col-sm-12">
              <Pagination />
              <Rentals>1 - 18 of 300+ Rentals</Rentals>
              <Text>
                Enter dates to see full pricing. Additional fees apply. Taxes
                may be added.
              </Text>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs col-sm col-md">
            <div className="hidden-xs hidden-sm hidden-md">
              <Wrapper>
                <GoogleMapReact
                  defaultCenter={{ lat: 70.09, lng: 19.91 }}
                  defaultZoom={4}
                />
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Wrap>
);
