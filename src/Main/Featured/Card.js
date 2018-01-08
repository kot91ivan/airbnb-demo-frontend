import React from "react";
import { CardLink } from "../Styled";
import { Img, Name } from "./index";

export default props => (
  <CardLink href="#">
    <Img src={props.img} alt={props.alt} />
    <Name>{props.name}</Name>
  </CardLink>
);
