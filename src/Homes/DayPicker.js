import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

import arrowLeft from "./arrowLeft.png";
import arrowRight from "./arrowRight.png";

const ButtonApply = styled.button`
  color: #0f7276;
  font-size: 16px;
  background: none;
  border: none;
`;

const ButtonCancel = styled.button`
  color: #636363;
  font-size: 16px;
  background: none;
  border: none;
`;
const WrapButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
`;

const Wrap = styled.div`
  position: absolute;
  top: 52px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: #fff;
  width: 360px;
  z-index: 10;
  @media (min-width: 768px) {
    width: auto;
    left: 35px;
  }
`;

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      from: null,
      to: null,
      enteredTo: null // Keep track of the last day for mouseEnter.
    };
  }
  isSelectingFirstDay(from, to, day) {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  }
  handleDayClick(day) {
    const { from, to } = this.state;
    if (from && to && day >= from && day <= to) {
      this.handleResetClick();
      return;
    }
    if (this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day,
        to: null,
        enteredTo: null
      });
    } else {
      this.setState({
        to: day,
        enteredTo: day
      });
    }
  }
  handleDayMouseEnter(day) {
    const { from, to } = this.state;
    if (!this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day
      });
    }
  }
  handleResetClick() {
    this.setState(this.getInitialState());
  }
  render() {
    const { from, enteredTo } = this.state;
    const modifiers = { start: from, end: enteredTo };
    const disabledDays = { before: this.state.from };
    const selectedDays = [from, { from, to: enteredTo }];
    return (
      <Wrap>
        <DayPicker
          className="Range"
          numberOfMonths={2}
          fromMonth={from}
          selectedDays={selectedDays}
          disabledDays={disabledDays}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          onDayMouseEnter={this.handleDayMouseEnter}
        />

        <Helmet>
          <style>{`
          .DayPicker-Caption{
            font-family: "CircularAirBold", Arial, sans-serif;
            font-size: 18px;
            text-align: center;
          }
          
          .DayPicker-Day{
            border: 1px solid #d5d5d5;
            font-size: 14px;
          }

          .DayPicker-Day--outside{
            border: none;
          }

          .DayPicker-NavButton--prev {
            margin-right: 490px;
            background-image: url(${arrowLeft});
            border: 1px solid #d5d5d5;
            width: 32px;
            height: 20px;
            padding: 1px;
          }

          .DayPicker-NavButton--next {
            background-image: url(${arrowRight});
            border: 1px solid #d5d5d5;
            width: 32px;
            height: 20px;
            padding: 1px;
          }

          .Range .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
            background-color: #f0f8ff !important;
            color: #4a90e2;
          }
          .Range .DayPicker-Day {
            border-radius: 0 !important;
          }
`}</style>
        </Helmet>
        <WrapButtons>
          <ButtonCancel>Cancel </ButtonCancel>
          <ButtonApply>Apply </ButtonApply>
        </WrapButtons>
      </Wrap>
    );
  }
}
