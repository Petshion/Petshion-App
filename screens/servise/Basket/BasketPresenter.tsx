import React from 'react';
import styled from 'styled-components/native';
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

export default () => {
  return (
    <BasketWrap>
      <TopView>
        <AllCheck>
          <Checkbox
            name="check"
            size={20}
            iconSize={16}
            fillColor="#efde5a"
            unfillColor="#FFFFFF"
            borderRadius={4}
          />
          <AllCheckText>전체 선택</AllCheckText>
        </AllCheck>
      </TopView>
      <ListWrap>
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
      </ListWrap>
      <BottomWrap>
        <PriceTag>
          <PriceTitle>결제 예정 금액</PriceTitle>
          <Price price={2242} size={24} color="#ffd426" />
        </PriceTag>
        <Button onPress={() => console.log('구매로 이동')}>
          <OrderButtons>
            <ButtonText>주문하기</ButtonText>
          </OrderButtons>
        </Button>
      </BottomWrap>
    </BasketWrap>
  );
};
