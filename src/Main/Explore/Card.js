import React from "react";
import { CardLink } from "../Styled";
import { Img, CardWrap, Name } from "./index";

export default props => (
  <CardLink href="#">
    <CardWrap>
      <Img src={props.img} alt={props.title} />
      <Name>{props.name}</Name>
    </CardWrap>
  </CardLink>
);
