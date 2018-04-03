import React from "react";
import styled from "styled-components";
import plus from "./plus.png";
import minus from "./minus.png";

const Name = styled.span`
  color: #383838;
  font-size: 20px;
`;

const Content = styled.div`
  position: absolute;
  width: 326px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  display: flex;
  padding: 5px 24px;
  margin-top: 10px;
  flex-direction: column;
`;

const ButtonPlus = styled.button`
  width: 32px;
  height: 32px;
  background-color: #fff;
  border: 1px solid #008489;
  border-radius: 16px;
  background: url(${plus}) 50% 50% no-repeat;
  margin: 1em;
`;
const ButtonMinus = styled.button`
  width: 32px;
  height: 32px;
  background-color: #fff;
  border: 1px solid #008489;
  border-radius: 16px;
  background: url(${minus}) 50% 50% no-repeat;
  margin: 1em;
`;

const Amount = styled.div`
  display: flex;
  flex-direction: row;
`;

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

export default () => (
  <Content>
    <div className="row middle-md between-xs">
      <Name>Adults</Name>
      <Amount>
        <ButtonPlus />
        <p>1+</p>
        <ButtonMinus />
      </Amount>
    </div>
    <div className="row middle-md between-md">
      <div>
        <Name> Children </Name>
        <span>Ages 2 — 12</span>
      </div>
      <Amount>
        <ButtonPlus />
        <p>1+</p>
        <ButtonMinus />
      </Amount>
    </div>
    <div className="row middle-md between-md">
      <div>
        <Name> Infants </Name>
        <span>Under 2</span>
      </div>
      <Amount>
        <ButtonPlus />
        <p>1+</p>
        <ButtonMinus />
      </Amount>
    </div>
    <WrapButtons>
      <ButtonCancel>Cancel </ButtonCancel>
      <ButtonApply>Apply </ButtonApply>
    </WrapButtons>
  </Content>
);
