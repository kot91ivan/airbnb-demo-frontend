import React from 'react';
import styled from 'styled-components';
import Nav from './nav';
import logo from './logo.svg';


const Header = styled.div`
    display: flex; 
    padding-top: 23px;
    justify-content: space-between;
    margin-bottom: 48px;
    align-items: center;
`;
const Logo = styled.img`
    height: 32px;
    weight: 30px;  
`;

const Search = styled.input`
    border: 1px solid rgba(72, 72, 72, 0.2);
    border-radius: 4px;
    background: #ffffff url('search.svg') no-repeat;
    padding: 16px 10px;
    font-size: 16px;
    width: 392px;
`;

export default () => (
    <div className='container'>
        <Header className='row'>
        <div className='col-md-1'>
            <Logo src={logo} />
        </div>
        <div className='col-md-5'>
            <Search placeholder="'Try Miami'" name='search' type='text' />
        </div>
        <div className='col-md-2'>

        </div>
        <div className='col-md-3'>
            <Nav />
        </div>
            
        </Header>
    </div>
   
);