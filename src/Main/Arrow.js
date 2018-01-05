import React from 'react';
import styled from 'styled-components';
import Arr from './Arrows/bigArrow.svg';


export const Arrow = styled.button`
    background: #ffffff url(${Arr}) 50% 50% no-repeat;
    width: 40px;
    height: 40px;
    border: 0.5px solid rgba(72, 72, 72, 0.2);
    border-radius: 20px;
    position: absolute;
    left: 96.6%;
`;
