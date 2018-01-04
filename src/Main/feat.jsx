import React from 'react';
import styled from 'styled-components';
import smallArrow from './featured/smallArrow.svg';
import Pic1 from './featured/1.png';
import Pic2 from './featured/2.png';
import Pic3 from './featured/3.png';
import Pic4 from './featured/4.png';
import Pic5 from './featured/5.png';
import Pic6 from './featured/6.png';

const Feature = styled.div`
    margin-bottom: 64px;
`;
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
`;
const Name = styled.p`
    color: #383838;
    font-size: 15px;
    font-weight: normal;
`;
export default () => (
    <Feature>
        <FirstTitle>
            <div className='col-md-4'>
                <Title>Featured destinations</Title>
            </div>
            <div className='col-md-7'></div>
            <div className='col-md-1'>
                <LinkAll href="#">See all <img src={smallArrow} alt="arrow"/></LinkAll>
            </div>
        </FirstTitle>
        <Content>
            <div className='col-md-2'>
                <img src={Pic1} width='100%' alt="Paris"/>
                <Name>Paris</Name>
            </div>
            <div className='col-md-2'>
                <img src={Pic2} width='100%' alt="Miami"/>
                <Name>Miami</Name>
            </div>
            <div className='col-md-2'>
                <img src={Pic3} width='100%' alt="Tokyo"/>
                <Name>Tokyo</Name>
            </div>
            <div className='col-md-2'>
                <img src={Pic4} width='100%' alt="Cape Town"/>
                <Name>Cape Town</Name>
            </div>
            <div className='col-md-2'>
                <img src={Pic5} width='100%' alt="Seoul"/>
                <Name>Seoul</Name>
            </div>
            <div className='col-md-2'>
                <img src={Pic6} width='100%' alt="Los Angeles"/>
                <Name>Los Angeles</Name>
            </div>

        </Content>
    </Feature>
);