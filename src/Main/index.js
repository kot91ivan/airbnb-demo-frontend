import React from 'react';
import Explore from './Explore';
import Experian from './experience';
import Popular from './popular';
import Homes from './home';
import Feature from './feat';
import styled from 'styled-components';

const Main = styled.div`
    border-top: 1px solid rgba(72, 72, 72, 0.1);
    border-bottom: 1px solid rgba(72, 72, 72, 0.1);
    margin: 5px;
`;
export default () => (
   
        <Main>
            <Explore />
            <Experian />
            <Homes />
            <Popular />
            <Feature />
        </Main>
    
);