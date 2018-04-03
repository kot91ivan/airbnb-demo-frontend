import React from "react";
import styled from "styled-components";
import Dates from "./Dates";
import Guests from "./Guests";

const Filters = styled.div`
  border-top: 1px solid rgba(72, 72, 72, 0.1);
  border-bottom: 1px solid rgba(72, 72, 72, 0.1);
  background: #fff;
  padding: 20px 20px;
  width: 100%;
  display: flex;
  position: fixed;
  top: 81px;
  left: 0;
  z-index: 0;
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
  <Filters>
    <div className="container">
      <div className="row">
        <Dates />
        <Guests />
        <div>
          <div className="hidden-xs hidden-sm hidden-md">
            <FilterButton>Room type</FilterButton>
            <FilterButton>Price</FilterButton>
            <FilterButton>Instant book</FilterButton>
            <FilterButton>More filters</FilterButton>
          </div>
        </div>
      </div>
    </div>
  </Filters>
);
