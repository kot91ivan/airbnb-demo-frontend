import React from 'react';
import styled from 'styled-components';
import smallArrow from './Arrows/smallArrow.svg';
import Arr from './Arrows/bigArrow.svg';
import Pic1 from './featured/1.png';
import Pic2 from './featured/2.png';
import Pic3 from './featured/3.png';
import Pic4 from './featured/4.png';
import Pic5 from './featured/5.png';
import Pic6 from './featured/6.png';
import {Title} from './Title';


const Feature = styled.div`
    margin-bottom: 64px;
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
    position: relative;
    overflow:hidden;
`;
const Name = styled.p`
    color: #383838;
    font-size: 15px;
    font-weight: normal;
`;
const Arrow = styled.button`
    background: #ffffff;
    width: 40px;
    height: 40px;
    border: 0.5px solid rgba(72, 72, 72, 0.2);
    border-radius: 20px;
    position: absolute;
    top: 35%;  left: 98%; bottom: 0; right: 0;
`;
export default () => (
    <Feature>
        <FirstTitle>
            <div className='col-xs-6 col-md-6'>
                <Title>Featured destinations</Title>
            </div>
            <div className='col-xs-4 col-md-4'></div>
            <div className='col-xs-2 col-md-2'>
                <LinkAll href="#">See all <img src={smallArrow} alt="arrow"/></LinkAll>
            </div>
        </FirstTitle>
        <Content>
            <div className='col-xs-4 col-sm-3 col-md-2'>
                <img src={Pic1} width='100%' alt="Paris"/>
                <Name>Paris</Name>
            </div>
            <div className='col-xs-4 col-sm-3 col-md-2'>
                <img src={Pic2} width='100%' alt="Miami"/>
                <Name>Miami</Name>
            </div>
            <div className='col-xs-4 col-sm-3 col-md-2'>
                <img src={Pic3} width='100%' alt="Tokyo"/>
                <Name>Tokyo</Name>
            </div>
            <div className='col-xs-4 col-sm-3 col-md-2'>
                <img src={Pic4} width='100%' alt="Cape Town"/>
                <Name>Cape Town</Name>
            </div>
            <div className='col-xs-4 col-sm-3 col-md-2'>
                <img src={Pic5} width='100%' alt="Seoul"/>
                <Name>Seoul</Name>
            </div>
            <div className='col-xs-4 col-sm-3 col-md-2'>
                <img src={Pic6} width='100%' alt="Los Angeles"/>
                <Name>Los Angeles</Name>
            </div>
            <Arrow><img src={Arr} alt="Arrow"/></Arrow>
        </Content>
    </Feature>
);