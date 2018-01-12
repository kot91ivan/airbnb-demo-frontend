import React from "react";
import styled from "styled-components";
import Explore from "./Explore";
import Experian from "./Experiences";
import Popular from "./PopularReservations";
import Homes from "./Homes";
import Featured from "./Featured";
import Footer from "../Footer";

const Main = styled.main`
  border-top: 1px solid rgba(72, 72, 72, 0.1);

  margin-top: 75px;
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
