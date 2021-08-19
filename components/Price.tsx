import React from 'react';
import styled from 'styled-components/native';

interface Price {
  kor?: boolean;
  price: number;
  size: number;
  color?: string;
}

const Price = styled.Text`
  font-family: NanumSquareBold;
  color: #000000;
`;

export default ({kor, price, size, color}: Price) => {
  if (kor) {
    return (
      <Price style={{fontSize: size, color: color}}>
        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
      </Price>
    );
  }
  return (
    <Price style={{fontSize: size, color: color}}>
      ₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    </Price>
  );
};
