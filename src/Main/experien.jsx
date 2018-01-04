import React from 'react';
import styled from 'styled-components';
import smallArrow from './experiences/smallArrow.svg';
import stars from './experiences/star.png';
import Pic1 from './experiences/1.png';
import Pic2 from './experiences/2.png';
import Pic3 from './experiences/3.png';
import Pic4 from './experiences/4.png';
import Arr from './experiences/bigArrow.svg'

const Title = styled.h2`
    font-size: 32px;
    line-height: 34px;
    color: #383838;
    margin-bottom: 24px;
`;
const LinkAll = styled.a`
    text-decoration: none;
    color: #383838;
    font-size: 14px;
    font-family: 'CircularAir', Arial, sans-serif;
    font-weight: normal;
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
`;
const Name = styled.p`
    color: #383838;
    font-size: 15px;
    font-weight: normal;
`;

const Reviews = styled.p`
    color: #383838;
    font-size: 12px;
`;
const Star = styled.img`
    margin-right: 4px;
`;

export default () => (
    <div>
        <FirstTitle>
            <div className='col-md-3'>
                <Title> Experiences </Title>
            </div>
            <div className='col-md-8'></div>
            <div className='col-md-1'>
                <LinkAll href="#">See all <img src={smallArrow} alt="arrow"/></LinkAll>
            </div>
        </FirstTitle>
        <Content>
            <div className='col-md-3'>
                <img src={Pic1} width="100%" alt="Forest Terapy"/>
                <Name><Price>$29 </Price>Forest therapy </Name>
                <Reviews>
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} /> 44 reviews
                </Reviews>
                
            </div>
            <div className='col-md-3'>
                <img src={Pic2} width="100%" alt="Whale Watching"/>
                <Name><Price>$69 </Price>Whale Watching</Name>
                <Reviews>
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} /> 40 reviews
                </Reviews>
            </div>
            <div className='col-md-3'>
                <img src={Pic3} width="100%" alt="Table Mountain Summit, Cable Car Down"/>
                <Name><Price>$70 </Price>Table Mountain Summit, Cable Car Down</Name>
                <Reviews>
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} /> 29 reviews
                </Reviews>
            </div>
            <div className='col-md-3'>
                <img src={Pic4} width="100%" alt="Salsa Night"/>
                <Name><Price>$50 </Price>Salsa Night</Name>
                <Reviews>
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} />
                    <Star src={stars} /> 50 reviews
                </Reviews>
            </div>
    </Content>
        
    </div>
);