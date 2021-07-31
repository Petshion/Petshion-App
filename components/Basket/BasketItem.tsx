import React, {useState} from 'react';
import styled from 'styled-components/native';

import Price from '../Price';
import Checkbox from './Checkbox';

const ItemWrap = styled.View`
  width: 100%;
  height: 120px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const ItemLeft = styled.View`
  flex: 3;
  flex-direction: row;
`;

const ImageWrap = styled.View`
  width: 80px;
  height: 100%;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

const LeftTextWrap = styled.View`
  flex: 1;
  margin-left: 20px;
  justify-content: space-around;
`;

const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;
const Size = styled.Text`
  font-size: 12px;
  font-weight: 300;
`;
const Quantity = styled.Text`
  font-size: 12px;
  font-weight: 300;
`;

const ItemRight = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: space-between;
`;

function BasketItem() {
  const [checkboxState, setCheckboxState] = useState(false);

  return (
    <ItemWrap>
      <ItemLeft>
        <ImageWrap>
          <Image
            source={{
              uri: 'https://source.unsplash.com/random/400x400',
            }}
          />
        </ImageWrap>
        <LeftTextWrap>
          <Title numberOfLines={1} ellipsizeMode="tail">
            상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명
          </Title>
          <Size>색 / 사이즈</Size>
          <Quantity>1개</Quantity>
        </LeftTextWrap>
      </ItemLeft>
      <ItemRight>
        <Checkbox />
        <Price price={12331} size={12} />
      </ItemRight>
    </ItemWrap>
  );
}

export default BasketItem;
