import React from 'react';
import styled from 'styled-components/native';

const Price = styled.Text`
  font-family: NanumSquare;
  font-weight: bold;
  font-style: normal;
  line-height: 0;
  letter-spacing: 0;
  text-align: left;
  color: #000000;
`;

export default ({price, size}: any) => {
  return (
    <Price style={{fontSize: size}}>
      ₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    </Price>
  );
};
