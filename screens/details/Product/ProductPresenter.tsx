import React from 'react';
import {Dimensions, StatusBar} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styled from 'styled-components/native';

import BannerCarousel from '../../../components/Details/BannerCarousel';
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

const FirstLine = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

const ProductName = styled.Text`
  flex: 1;
  align-self: flex-start;
  font-size: 22px;
  font-weight: bold;
`;

const IconWrap = styled.View`
  width: 65px;
  justify-content: space-between;
  flex-direction: row;
`;

const Review = styled.View`
  margin-top: 10px;
  align-self: flex-start;
`;

const ReviewText = styled.Text`
  text-decoration: underline #7e7e7e;
  font-size: 13px;
  color: #7e7e7e;
`;

const BottomButtonsWrap = styled.SafeAreaView`
  width: 100%;
  height: ${HEIGHT / 9}px;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  background-color: #efde5a;
`;

const Button = styled.TouchableOpacity``;

const ButtonText = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: #a1a1a1;
`;

export default () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ProductWrap>
        <BannerCarousel width={WIDTH} height={WIDTH / 0.8} />
        <Info>
          <FirstLine>
            <ProductName>아라아라아라아라</ProductName>
            <IconWrap>
              <Button>
                <Icon custom name={'ar'} color={'#cbc9ca'} size={24} />
              </Button>
              <Button>
                <Icon custom name={'share'} color={'#cbc9ca'} size={24} />
              </Button>
            </IconWrap>
          </FirstLine>
          <Price price={1234} size={18} />
          <Review>
            <ReviewRating />
            <Button>
              <ReviewText>000개 리뷰 보기</ReviewText>
            </Button>
          </Review>
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
      <Button onPress={() => console.log('구매로 이동')}>
        <BottomButtonsWrap>
          <ButtonText>주문하기</ButtonText>
        </BottomButtonsWrap>
      </Button>
    </>
  );
};
