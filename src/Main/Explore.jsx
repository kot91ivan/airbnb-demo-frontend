import React from 'react';
import styled from 'styled-components';
import pic1 from './explore/1.png';
import pic2 from './explore/2.png';
import pic3 from './explore/3.png';
import Arr from './explore/arrowRight.svg'

const Explore = styled.div`
    margin-bottom: 48px;
`;
const Title = styled.h2`
    font-size: 32px;
    color: #383838;
    margin-bottom: 24px;

`;
const Explores = styled.div`
    display: flex;
`;
const Item = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid rgba(72, 72, 72, 0.2);
    border-radius: 4px;
    box-sizing: border-box;
`;
const Img = styled.img`
    
`;
const Name = styled.p`
    color: #383838;
    font-weight: Normal;
    font-size: 17px;
    padding: 0   24px;
    margin: 0px;
`;
const LinkArrow = styled.a`
    width: 40px;
    height: 40px;
    background: rbga(255,255,255, 0.5);

`;
const Arrow = styled.img`

`;
export default () => (
    <Explore>
        <Title className='col-md-3'> Explore Airbnb </Title>
        <Explores> 
            <div  className='col-md-4'>
                <Item>
                    <Img src={pic1} alt='homes' />
                    <Name>Homes</Name>
                </Item>
            </div>
            <div className='col-md-4'>
                <Item>
                    <Img src={pic2} alt='Experiences' />
                     <Name>Experiences</Name>
                </Item>
            </div>
            <div className='col-md-4'>
                <Item>
                    <Img src={pic3} alt='Restaurants' />
                    <Name>Restaurants</Name>
                </Item>
            </div>
            <LinkArrow href="#"><Arrow src={Arr} alt="Arrow"/></LinkArrow>
        </Explores>
    </Explore>
   
);