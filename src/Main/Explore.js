import React from 'react';
import styled from 'styled-components';
import pic1 from './explore/1.png';
import pic2 from './explore/2.png';
import pic3 from './explore/3.png';
import {Title} from './Title';


const Explore = styled.div`
    margin-bottom: 48px;
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
const Name = styled.p`
    color: #383838;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    padding: 0   24px;
    margin: 0px;
`;

export default () => (
    <Explore>
        <Title className='col-md-3'> Explore Airbnb </Title>
        <Explores> 
            <div  className='col-xs-6 col-sm-5 col-md-4'>
                <Item>
                    <img src={pic1} alt="homes"/>
                    <Name>Homes</Name>
                </Item>
            </div>
            <div className='col-xs-6 col-sm-5 col-md-4'>
                <Item>
                    <img src={pic2} alt='Experiences'/>
                     <Name>Experiences</Name>
                </Item>
            </div>
            <div className=' col-md-4'>
                <Item>
                    <img src={pic3} alt='Restaurants' />
                    <Name>Restaurants</Name>
                </Item>
            </div>
            
        </Explores>
    </Explore>
   
);