import React, {useState} from 'react';
import styled from 'styled-components/native';

import Price from '../Price';
import Checkbox from './Checkbox';

const ItemWrap = styled.View`
  width: 100%;
  height: 80px;
  margin-bottom: 20px;

  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const ItemLeft = styled.View`
  flex: 3;
  flex-direction: row;
`;

const CheckboxWrap = styled.View``;

const ImageWrap = styled.View`
  width: 80px;
  height: 100%;
  margin-left: 10px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

const LeftTextWrap = styled.View`
  flex: 1;
  margin-left: 10px;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-family: NanumSquare;
  font-size: 14px;
  font-weight: bold;
  color: #4e4e4e;
`;

const Size = styled.Text`
  font-family: NanumSquare;
  font-size: 12px;
  font-weight: 300;
  color: #4e4e4e;
`;

const Quantity = styled.Text`
  font-family: NanumSquare;
  font-size: 12px;
  font-weight: 300;
  color: #4e4e4e;
`;

const ItemRight = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: space-between;
`;

const DeleteButton = styled.TouchableOpacity``;

const DeleteText = styled.Text`
  font-family: NanumSquare;
  font-size: 12px;
  font-weight: normal;
  color: #4e4e4e;
`;

function BasketItem() {
  const [checkboxState, setCheckboxState] = useState(false);

  return (
    <ItemWrap>
      <ItemLeft>
        <CheckboxWrap>
          <Checkbox
            name="check"
            size={20}
            iconSize={16}
            fillColor="#efde5a"
            unfillColor="#FFFFFF"
            borderRadius={4}
          />
        </CheckboxWrap>
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
        <DeleteButton>
          <DeleteText>삭제</DeleteText>
        </DeleteButton>
        <Price price={12331} size={12} color={'#4e4e4e'} />
      </ItemRight>
    </ItemWrap>
  );
}

export default BasketItem;
