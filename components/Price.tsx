import React from 'react';
import styled from 'styled-components/native';

interface Price {
  price: number;
  size: number;
  color?: string;
}

const Price = styled.Text`
  font-family: NanumSquareBold;
  color: #000000;
`;

export default ({price, size, color}: Price) => {
  return (
    <Price style={{fontSize: size, color: color}}>
      ₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    </Price>
  );
};
