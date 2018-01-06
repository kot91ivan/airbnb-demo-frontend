import React from 'react';
import styled from 'styled-components';
import star from './star.png';

const Star = styled.img`
  margin-right: 4px;
`;

export default () => (
  <div>
    <Star src={star} />
    <Star src={star} />
    <Star src={star} />
    <Star src={star} />
    <Star src={star} />
  </div>
);
