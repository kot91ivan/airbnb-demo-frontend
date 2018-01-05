import React from 'react';
import styled from 'styled-components';
import InputArrow from './icondown.svg'

const Content = styled.div`
    margin-top: 24px;
    margin-bottom: 48px;
    display: flex;
    
   
`;
const Language = styled.select`
    color: #383838;
    border: 1px solid rgba(72, 72, 72, 0.2);
    border-radius: 4px;
    font-size: 18px;
    line-height: 21px;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url(${InputArrow}) 95% 50%  no-repeat;
    padding: 12px 16px;
    width: 229px;
    margin-bottom: 16px;
    font-family: "CircularAirLight", Arial, sans-serif; 
    
`;
const Title = styled.p`
    color: #383838;
    font-size: 15px;
    line-height: 18px;
    font-weight: bold;
`;
const Link = styled.a`
    text-decoration: none;
    color: #636363;
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 8px;
    font-family: "CircularAirLight", Arial, sans-serif; 
`;
const Item = styled.div`
    @media(max-device-width: 768px){
        display: none;
    };  
    display: flex;
    flex-direction: column;
    
`;
const Selects = styled.div`
@media(max-device-width: 768px){
        display: flex;
        justify-content: center;
    }
`;
export default () => (
    <Content>
        <Selects className='col-xs-12 col-md-3'>
            <Language>
                <option value="">English</option>
                <option value="">Russian</option>
                <option value="">Italiano</option>
                <option value="">Suomi</option>
            </Language>
            <Language>
                <option value="">United States dollar</option>
                <option value="">Russian ruble</option>
                <option value="">Euro</option>
                <option value="">Suomi</option>
            </Language>
        </Selects>
        <div className='col-md-1'></div>
        <div className='col-md-2'>
            <Item>
                <Title>Airbnb</Title>
                <Link href='#'>About us</Link>
                <Link href='#'>Careers</Link>
                <Link href='#'>Press</Link>
                <Link href='#'>Policies</Link>
                <Link href='#'>Help</Link>
                <Link href='#'>Diversity & Belonging</Link>
            </Item>
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-2'>
            <Item>
                <Title>Discover</Title>
                <Link href='#'>Trust & Safety</Link>
                <Link href='#'>Travel Credit</Link>
                <Link href='#'>Gift Cards</Link>
                <Link href='#'>Airbnb Citizen</Link>
                <Link href='#'>Business Travel</Link>
                <Link href='#'>Guidebooks</Link>
                <Link href='#'>Airbnbmag</Link>
            </Item>
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-2'>
            <Item>
                <Title>Hosting</Title>
                <Link href='#'>Why Host</Link>
                <Link href='#'>Hospitality</Link>
                <Link href='#'>Responsible Hosting</Link>
                <Link href='#'>Community Center</Link>
            </Item>
        </div>
    </Content>
);