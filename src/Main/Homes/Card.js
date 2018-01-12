import React from "react";
import Stars from "../Stars";
import { CardLink, Img, Price, Name, Beds, Hosts } from "../Styled";

export default props => (
  <CardLink href={props.link}>
    <Img src={props.Img} alt={props.title} />

    <Name>
      <Price>${props.price} </Price>
      {props.name}
    </Name>

    <Beds>Entire house · {props.beds} beds</Beds>
    <Hosts>
      <Stars /> {props.amountHosts}· Superhost
    </Hosts>
  </CardLink>
);
