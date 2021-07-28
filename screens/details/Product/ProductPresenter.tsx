import React from 'react';
import {Dimensions, StatusBar} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styled from 'styled-components/native';

import BannerCarousel from '../../../components/BannerCarousel';
import DescriptionTab from '../../../components/Details/DescriptionTab';
import SizeTab from '../../../components/Details/SizeTab';
import Price from '../../../components/Price';
import Icon from '../../../components/Icon';
import ReviewRating from '../../../components/Details/ReviewRating';

const Tab = createMaterialTopTabNavigator();

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const ProductWrap = styled.ScrollView`
  background-color: #fff;
`;

const TabWrap = styled.View`
  height: ${HEIGHT}px;
`;

const Info = styled.View`
  padding: 20px;
`;

const ProductName = styled.Text`
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: bold;
`;

const Review = styled.View`
  margin-bottom: 10px;
  align-self: flex-start;
  flex-direction: row;
`;

const ReviewText = styled.Text`
  margin-left: 10px;
  text-decoration: underline #7e7e7e;
  font-size: 15px;
  color: #7e7e7e;
`;

const BottomButtonsWrap = styled.SafeAreaView`
  width: 100%;
  height: 100px;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  border: solid 1px #cac9ca;
  background-color: #fff;
`;

const BottomButtons = styled.View`
  width: 100%;
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const IconWrap = styled.View`
  width: 90px;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity``;

const ButtonText = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: #f4d540;
`;

export default () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ProductWrap>
        <BannerCarousel width={WIDTH} height={WIDTH / 0.8} />
        <Info>
          <ProductName>상품명</ProductName>
          <Review>
            <ReviewRating />
            <Button>
              <ReviewText>000개 리뷰 보기</ReviewText>
            </Button>
          </Review>
          <Price price={1234} size={18} />
        </Info>
        <TabWrap>
          <Tab.Navigator
            initialRouteName="Description"
            tabBarOptions={{
              labelStyle: {fontSize: 15},
              inactiveTintColor: '#7e7e7e',
              activeTintColor: '#f4d53f',
              indicatorStyle: {
                backgroundColor: '#f4d53f',
              },
            }}
            initialLayout={{width: WIDTH, height: WIDTH}}>
            <Tab.Screen
              name="Description"
              component={DescriptionTab}
              options={{tabBarLabel: '상세 설명'}}
            />
            <Tab.Screen
              name="Size"
              component={SizeTab}
              options={{tabBarLabel: '사이즈'}}
            />
          </Tab.Navigator>
        </TabWrap>
      </ProductWrap>
      <BottomButtonsWrap>
        <BottomButtons>
          <IconWrap>
            <Button>
              <Icon name={'ar'} color={'#cbc9ca'} size={35} />
            </Button>
            <Button>
              <Icon name={'share'} color={'#cbc9ca'} size={35} />
            </Button>
          </IconWrap>
          <Button onPress={() => console.log('구매로 이동')}>
            <ButtonText>구매하기</ButtonText>
          </Button>
        </BottomButtons>
      </BottomButtonsWrap>
    </>
  );
};
