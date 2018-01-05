import React from 'react';
import styled from 'styled-components';
import stars from './homes/star.png';

const Star = styled.img`
  color: #008489;
  margin-right: 4px;
`;

export default () => (
  <div>
    <Star src={stars} />
    <Star src={stars} />
    <Star src={stars} />
    <Star src={stars} />
    <Star src={stars} />
  </div>
);
