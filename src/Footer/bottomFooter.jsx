import React from 'react';
import styled from 'styled-components';
import GreyLogo from './gray-logo.svg';
import IconF from './social/facebook.svg'
import IconT from './social/twitter.svg'
import IconI from './social/instagram.svg'

const Content = styled.div`
    display:flex;
    margin-bottom: 35px;
`; 
const Copyright = styled.span`
    color: #636363;
    font-size: 15px;
    line-height: 18px;
    margin-left: 16px;
`; 
const Link = styled.a`
    text-decoration: none;
    color: #636363;
    font-size: 15px;
    line-height: 18px;
    font-weight: light; 
    margin-right: 16px;
`;
const Item = styled.div`
    display: flex;
    align-items: center;    
`;
export default () => (
   
      <Content>
        <Item className='col-md-2'>
            <img src={GreyLogo} width="20px" height="22px" alt="Logo"/>
            <Copyright>© Airbnb Inc.</Copyright>
        </Item>
        <div className='col-md-6'></div>
        <Item className='col-md-4'>
            <Link href='#'>Terms</Link>
            <Link href='#'>Privacy</Link>
            <Link href='#'>Site Map</Link>
            <Link href='#'><img src={IconF} width='24px' height='24px' alt="Facebook"/></Link>
            <Link href='#'><img src={IconT} width='24px' height='24px' alt="Twitter"/></Link>
            <Link href='#'><img src={IconI} width='24px' height='24px' alt="Instagram"/></Link>
        </Item>
      </Content>
    
);