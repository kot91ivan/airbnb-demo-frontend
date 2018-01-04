import React from 'react';
import styled from 'styled-components';
import smallArrow from './Arrows/smallArrow.svg';
import Arr from './Arrows/bigArrow.svg';
import Pic1 from './popularReservations/popularReservations-1.png';
import Pic2 from './popularReservations/popularReservations-2.png';
import Pic3 from './popularReservations/popularReservations-3.png';
import Pic4 from './popularReservations/popularReservations-4.png';
import {Title} from './Title';

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
const Arrow = styled.button`
background: #ffffff;
width: 40px;
height: 40px;
border: 0.5px solid rgba(72, 72, 72, 0.2);
border-radius: 20px;
position: absolute;
top: 95.5rem;  left: 91%; bottom: 0; right: 0;
`;
export default () => (
    <div>
        <FirstTitle>
            <div className='col-md-7'>
                <Title>Popular reservations around the world</Title>
            </div>
            <div className='col-md-4'></div>
            <div className='col-md-1'>
                <LinkAll href="#">See all <img src={smallArrow} alt="arrow"/></LinkAll>
            </div>
        </FirstTitle>
        <Content>
            <div className='col-md-3'>
                <img src={Pic1} width="100%" alt="Chumley’s"/>
                <Kind>Speakeasy</Kind>
                <Name>Chumley’s</Name>
                <Price>About $60 per person</Price> 
            </div>
            <div className='col-md-3'>
                <img src={Pic2} width="100%" alt="Hanjan"/>
                <Kind>Korean gastropub</Kind>
                <Name>Hanjan</Name>
                <Price>About $50 per person</Price> 
            </div>
            <div className='col-md-3'>
                <img src={Pic3} width="100%" alt="Prime Meats"/>
                <Kind>German american</Kind>
                <Name>Prime Meats</Name>
                <Price>About $55 per person</Price>   
            </div>
            <div className='col-md-3'>
                <img src={Pic4} width="100%" alt="Seaprice"/>
                <Kind>Fine seafood</Kind>
                <Name>Seaprice</Name>
                <Price>About $70 per person</Price> 
            </div>
            <Arrow><img src={Arr} alt="Arrow"/></Arrow>
        </Content>
    </div>
);