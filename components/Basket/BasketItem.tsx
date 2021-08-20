import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {
  minusCount,
  plusCount,
  remove,
  BasketItemState,
} from '../../modules/basket';

import Icon from '../Icon';
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
  font-family: NanumSquareBold;
  font-size: 14px;
  color: #4e4e4e;
`;

const Size = styled.Text`
  font-family: NanumSquareLight;
  font-size: 12px;

  color: #4e4e4e;
`;

const CountView = styled.View`
  width: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Count = styled.Text`
  font-family: NanumSquareLight;
  font-size: 12px;
  color: #4e4e4e;
`;

const CountButton = styled.TouchableOpacity`
  width: 14px;
  height: 14px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: #4e4e4e;
`;

const ItemRight = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: space-between;
`;

const DeleteButton = styled.TouchableOpacity``;

const DeleteText = styled.Text`
  font-family: NanumSquareRegular;
  font-size: 12px;
  color: #4e4e4e;
`;

const BasketItem = React.memo(
  ({id, title, image, color, size, count, price, checked}: BasketItemState) => {
    const dispatch = useDispatch();

    return (
      <ItemWrap>
        <ItemLeft>
          <CheckboxWrap>
            <Checkbox
              name="check"
              id={id}
              checked={checked}
              fillColor="#efde5a"
              unfillColor="#FFFFFF"
            />
          </CheckboxWrap>
          <ImageWrap>
            <Image
              source={{
                uri: image,
              }}
            />
          </ImageWrap>
          <LeftTextWrap>
            <Title numberOfLines={1} ellipsizeMode="tail">
              {title}
            </Title>
            <Size>
              {color} / {size}
            </Size>
            <CountView>
              <CountButton onPress={() => dispatch(minusCount(id))}>
                <Icon name={'remove'} color={'#fff'} size={12} />
              </CountButton>
              <Count>{count}</Count>
              <CountButton onPress={() => dispatch(plusCount(id))}>
                <Icon name={'add'} color={'#fff'} size={12} />
              </CountButton>
            </CountView>
          </LeftTextWrap>
        </ItemLeft>
        <ItemRight>
          <DeleteButton onPress={() => dispatch(remove(id))}>
            <DeleteText>삭제</DeleteText>
          </DeleteButton>
          <Price kor price={price} size={12} color={'#4e4e4e'} />
        </ItemRight>
      </ItemWrap>
    );
  },
);

export default BasketItem;
