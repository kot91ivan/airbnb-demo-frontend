import React from 'react';
import styled from 'styled-components';
import smallArrow from './Arrows/smallArrow.svg';
import Arr from './Arrows/bigArrow.svg';
import Pic1 from './homes/1.png';
import Pic2 from './homes/2.png';
import Pic3 from './homes/3.png';
import {Title} from './Title';
import Star from './Stars';

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
    font-weight: bold;
    line-height: 18px;
`;
const Name = styled.p`
    color: #383838;
    font-size: 15px;
    line-height: 18px;
    font-weight: bold   ;
`;
const Hosts = styled.p`
    color: #383838;
    font-family: "CircularAirLight", Arial, sans-serif; 
    font-size: 12px;
    font-weight: normal;
    line-height: 14px;
    display: flex;
`;

const Beds = styled.p`
    color: #383838;
    font-size: 15px;
    line-height: 18px;
    font-weight: lighter;
`;
const Arrow = styled.button`
    background: #ffffff;
    width: 40px;
    height: 40px;
    border: 0.5px solid rgba(72, 72, 72, 0.2);
    border-radius: 20px;
    position: absolute;
    top: 28%;  left: 96.6%;
`;
export default () => (
    <div>
        <FirstTitle>
            <div className='col-xs-5 col-md-3'>
                <Title>Homes</Title>
            </div>
            <div className='col-xs-5 col-md-8'></div>
            <div className='col-xs-2 col-md-1'>
                <LinkAll href="#">See all <img src={smallArrow} alt="arrow"/></LinkAll>
            </div>
        </FirstTitle>
        <Content>
            <div className='col-xs-8 col-sm-5 col-md-4'>
                <img src={Pic1} width="100%" alt="Whale Watching"/>
                <Name><Price>$82 </Price>La Salentina, see, nature & relax</Name>
                <Beds>Entire house · 9 beds</Beds>
                <Hosts>
                    <Star /> 97 · Superhost
                </Hosts>
            </div>
            <div className='col-xs-8 col-sm-5 col-md-4'>
                <img src={Pic2} width="100%" alt="Whale Watching"/>
                <Name><Price>$98 </Price>Your private 3 bedr. riad and exclusive</Name>
                <Beds>Entire house · 5 beds</Beds>
                <Hosts>
                    <Star />161 · Superhost
                </Hosts>
            </div>
            <div className='col-xs-8 col-sm-5 col-md-4'>
                <img src={Pic3} width="100%" alt="Whale Watching"/>
                <Name><Price>$211   </Price>Dreamy Tropical Tree House</Name>
                <Beds>Entire treehouse · 1 bed</Beds>
                <Hosts>
                    <Star /> 364 · Superhost
                </Hosts>
            </div>
            <Arrow><img src={Arr} alt="Arrow"/></Arrow>
        </Content>
    </div>
);