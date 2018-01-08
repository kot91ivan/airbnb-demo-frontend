import React from "react";
import { CardLink, Img } from "../Styled";
import { Name, Price, Reviews } from "./index";
import Stars from "../Stars";

export default props => (
  <CardLink href="#">
    <Img src={props.img} alt={props.alt} />
    <Name>
      <Price>${props.price} </Price>
      {props.name}
    </Name>
    <Reviews>
      <Stars /> {props.reviews} reviews
    </Reviews>
  </CardLink>
);
