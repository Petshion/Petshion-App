import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {orderRemove, BasketState} from '../../../modules/basket';

import BasketItem from '../../../components/Basket/BasketItem';
import Checkbox from '../../../components/Basket/Checkbox';
import Price from '../../../components/Price';

const BasketWrap = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const TopView = styled.View`
  height: 40px;
  padding: 0 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const AllCheck = styled.View`
  flex-direction: row;
  align-items: center;
`;

const AllCheckText = styled.Text`
  margin-left: 10px;
  font-family: NanumSquareRegular;
  font-size: 12px;
  color: #4e4e4e;
`;

const ListWrap = styled.ScrollView`
  flex: 1;
  margin-bottom: 72px;
`;

const BottomWrap = styled.View`
  width: 100%;

  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0px;
`;

const PriceTag = styled.View`
  width: 100%;
  height: 36px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #4e4e4e;
`;

const OrderButtons = styled.View`
  width: 100%;
  height: 36px;
  align-items: center;
  justify-content: center;
  background-color: #ffd426;
`;

const PriceTitle = styled.Text`
  font-family: NanumSquareBold;
  font-size: 18px;

  color: #ffd426;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
`;

const ButtonText = styled.Text`
  font-family: NanumSquareBold;
  font-size: 18px;
  color: #4e4e4e;
`;

const Loading = styled.Text``;

export default ({baskets}: BasketState) => {
  const [sumPrice, setSumPrice] = useState(0);
  const [allSelectCheck, setAllSelectCheck] = useState(false);

  const dispatch = useDispatch();

  const orderButtonAlert = () =>
    Alert.alert('팻션', '주문을 완료하였습니다.', [
      {text: '확인', onPress: () => dispatch(orderRemove())},
    ]);

  const sumPriceF = () => {
    let sum = 0;
    for (let i = 0; i < baskets.length; i++) {
      if (baskets[i].checked === true) {
        sum += baskets[i].price * baskets[i].count;
      }
    }
    setSumPrice(sum);
  };

  const allSelectCheckF = () => {
    const set = baskets.map(baskets => baskets.checked);
    if (set.indexOf(false) === -1) {
      setAllSelectCheck(true);
    } else {
      setAllSelectCheck(false);
    }
  };

  useEffect(() => {
    sumPriceF();
    allSelectCheckF();
  }, [baskets]);

  return (
    <BasketWrap>
      <TopView>
        <AllCheck>
          <Checkbox
            name={'all'}
            checked={allSelectCheck}
            fillColor="#efde5a"
            unfillColor="#FFFFFF"
          />
          <AllCheckText>전체 선택</AllCheckText>
        </AllCheck>
      </TopView>
      <ListWrap>
        {baskets ? (
          baskets.map((baskets, index) => (
            <BasketItem
              key={index}
              id={baskets.id}
              title={baskets.title}
              image={baskets.image}
              color={baskets.color}
              size={baskets.size}
              count={baskets.count}
              price={baskets.price}
              checked={baskets.checked}
            />
          ))
        ) : (
          <Loading>loading...</Loading>
        )}
      </ListWrap>
      {baskets.length ? (
        <BottomWrap>
          <PriceTag>
            <PriceTitle>결제 예정 금액</PriceTitle>
            <Price kor price={sumPrice} size={24} color="#ffd426" />
          </PriceTag>
          <Button onPress={orderButtonAlert}>
            <OrderButtons>
              <ButtonText>주문하기</ButtonText>
            </OrderButtons>
          </Button>
        </BottomWrap>
      ) : (
        <></>
      )}
    </BasketWrap>
  );
};
