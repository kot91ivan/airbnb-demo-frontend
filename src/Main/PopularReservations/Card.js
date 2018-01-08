import React from "react";
import { CardLink, Img } from "../Styled";
import { Kind, Name, Price } from "./index";

export default props => (
  <CardLink href="#">
    <Img src={props.img} alt={props.alt} />
    <Kind>{props.kind}</Kind>
    <Name>{props.name}</Name>
    <Price>About ${props.price} per person</Price>
  </CardLink>
);
