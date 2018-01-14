import React from "react";
import styled from "styled-components";
import Explore from "./Explore";
import Experian from "./Experiences";
import Popular from "./PopularReservations";
import Homes from "./Homes";
import Featured from "./Featured";
import Footer from "../Footer";

const Main = styled.main`
  margin-top: 125px;
`;
export default () => (
  <Main>
    <Explore />
    <Experian />
    <Homes />
    <Popular />
    <Featured />
    <Footer />
  </Main>
);
