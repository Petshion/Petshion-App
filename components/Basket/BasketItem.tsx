import React from 'react';
import {Vibration} from 'react-native';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  minusCount,
  plusCount,
  remove,
  BasketItemState,
} from '../../modules/basket';

import Icon from '../Icon';
import Price from '../Price';
import Checkbox from './Checkbox';
import {basketApi} from '../../api';
import {authSelector} from '../../modules/hooks';

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
  ({
    _id,
    title,
    thumbnail_image,
    color,
    size,
    count,
    price,
    checked,
  }: BasketItemState) => {
    const dispatch = useDispatch();

    const {AUTHItem} = useSelector(authSelector);

    const removeBas = () => {
      basketApi.removeBasket({_id: _id}, AUTHItem?.token);
      dispatch(remove(_id));
    };

    return (
      <ItemWrap>
        <ItemLeft>
          <CheckboxWrap>
            <Checkbox
              name="check"
              id={_id}
              checked={checked}
              fillColor="#efde5a"
              unfillColor="#FFFFFF"
            />
          </CheckboxWrap>
          <ImageWrap>
            <Image
              source={{
                uri: thumbnail_image,
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
              <CountButton
                onPress={() => {
                  Vibration.vibrate(5);
                  dispatch(minusCount(_id));
                }}>
                <Icon name={'remove'} color={'#fff'} size={12} />
              </CountButton>
              <Count>{count}</Count>
              <CountButton
                onPress={() => {
                  Vibration.vibrate(5);
                  dispatch(plusCount(_id));
                }}>
                <Icon name={'add'} color={'#fff'} size={12} />
              </CountButton>
            </CountView>
          </LeftTextWrap>
        </ItemLeft>
        <ItemRight>
          <DeleteButton onPress={removeBas}>
            <DeleteText>삭제</DeleteText>
          </DeleteButton>
          <Price kor price={price} size={12} color={'#4e4e4e'} />
        </ItemRight>
      </ItemWrap>
    );
  },
);

export default BasketItem;
