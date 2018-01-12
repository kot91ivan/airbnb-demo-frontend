import React from "react";
import styled from "styled-components";
import DayPicker from "./DayPicker";

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

class Date extends React.Component {
  state = {
    isOpen: false
  };
  toggler = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };
  render() {
    return (
      <div>
        <FilterButton onClick={this.toggler}>Dates</FilterButton>
        {this.state.isOpen && <DayPicker />}
      </div>
    );
  }
}

export default Date;
