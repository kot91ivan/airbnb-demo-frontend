import React from 'react';
import styled from 'styled-components';
import smallArrow from './Arrows/smallArrow.svg';
import Pic1 from './popularReservations/popularReservations-1.png';
import Pic2 from './popularReservations/popularReservations-2.png';
import Pic3 from './popularReservations/popularReservations-3.png';
import Pic4 from './popularReservations/popularReservations-4.png';
import {Title} from './Title';
import {Arrow} from './Arrow';

const LinkAll = styled.a`
    text-decoration: none;
    color: #383838;
    font-size: 14px;
`;
const FirstTitle = styled.div`
    display: flex;
    align-items: center;
`;
const Content = styled.div`
    display: flex;
    margin-bottom: 48px;
    position: relative;
    overflow:hidden
`;
const Price = styled.span`
    color: #383838;
    line-height: 21px;
    font-weight: normal;
    font-size: 18px;
    margin-top: 4px;
`;
const Name = styled.p`
    color: #383838;
    line-height: 21px;
    font-size: 18px;
    font-weight: bold;
    margin: 0;
`;
const Kind = styled.p`
    color: #383838; 
    font-size: 10px;
    line-height: 12px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 12px 0 2px 0;
`;
export const BigArrow = Arrow.extend`
    top: 28%; 
`;
export default () => (
    <div>
        <FirstTitle>
            <div className='col-sm-9 col-md-9'>
                <Title>Popular reservations around the world</Title>
            </div>
            <div className='col-sm-1 col-md-2'></div>
            <div className='col-sm-2 col-md-1'>
                <LinkAll href="#">See all <img src={smallArrow} alt="arrow"/></LinkAll>
            </div>
        </FirstTitle>
        <Content>
            <div className='col-xs-6 col-sm-4 col-md-3'>
                <img src={Pic1} width="100%" alt="Chumley’s"/>
                <Kind>Speakeasy</Kind>
                <Name>Chumley’s</Name>
                <Price>About $60 per person</Price> 
            </div>
            <div className='col-xs-6 col-sm-4 col-md-3'>
                <img src={Pic2} width="100%" alt="Hanjan"/>
                <Kind>Korean gastropub</Kind>
                <Name>Hanjan</Name>
                <Price>About $50 per person</Price> 
            </div>
            <div className='col-xs-6 col-sm-4 col-md-3'>
                <img src={Pic3} width="100%" alt="Prime Meats"/>
                <Kind>German american</Kind>
                <Name>Prime Meats</Name>
                <Price>About $55 per person</Price>   
            </div>
            <div className='col-xs-6 col-sm-4 col-md-3'>
                <img src={Pic4} width="100%" alt="Seaprice"/>
                <Kind>Fine seafood</Kind>
                <Name>Seaprice</Name>
                <Price>About $70 per person</Price> 
            </div>
            <BigArrow />
        </Content>
    </div>
);