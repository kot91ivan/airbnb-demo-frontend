import React from 'react';
import styled from 'styled-components';
import smallArrow from './homes/smallArrow.svg';
import stars from './homes/star.png';
import Pic1 from './homes/1.png';
import Pic2 from './homes/2.png';
import Pic3 from './homes/3.png';
import bigArrow from './homes/bigArrow.svg';


const Title = styled.h2`
    font-size: 32px;
    color: #383838;
    margin-bottom: 24px;
`;
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
    font-size: 12px;
    font-weight: normal;
    line-height: 14px;
`;
const Star = styled.img`
    color: #008489;
    margin-right: 4px;
`;
const Beds = styled.p`
    color: #383838;
    font-size: 15px;
    line-height: 18px;
    font-weight: lighter;
`;

export default () => (
    <div>
        <FirstTitle>
            <div className='col-md-3'>
                <Title>Homes</Title>
            </div>
            <div className='col-md-8'></div>
            <div className='col-md-1'>
                <LinkAll href="#">See all <img src={smallArrow} alt="arrow"/></LinkAll>
            </div>
        </FirstTitle>
        <Content>
            <div className='col-md-4'>
                <img src={Pic1} width="100%" alt="Whale Watching"/>
                <Name><Price>$82 </Price>La Salentina, see, nature & relax</Name>
                <Beds>Entire house · 9 beds</Beds>
                <Hosts>
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} /> 97 · Superhost
                </Hosts>
            </div>
            <div className='col-md-4'>
                <img src={Pic2} width="100%" alt="Whale Watching"/>
                <Name><Price>$98 </Price>Your private 3 bedr. riad and exclusive</Name>
                <Beds>Entire house · 5 beds</Beds>
                <Hosts>
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} /> 161 · Superhost
                </Hosts>
            </div>
            <div className='col-md-4'>
                <img src={Pic3} width="100%" alt="Whale Watching"/>
                <Name><Price>$211   </Price>Dreamy Tropical Tree House</Name>
                <Beds>Entire treehouse · 1 bed</Beds>
                <Hosts>
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} /> 364 · Superhost
                </Hosts>
            </div>
        </Content>
    </div>
);