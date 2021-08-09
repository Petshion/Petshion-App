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
import {Product} from '../../../assets/types';

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
  font-family: NanumSquareBold;
  flex: 1;
  align-self: flex-start;
  font-size: 21px;
  color: #000000;
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
  font-family: NanumSquareBold;
  text-decoration: underline #7e7e7e;
  font-size: 13px;
  color: #7e7e7e;
`;

const Button = styled.TouchableOpacity``;

const BottomButtonsWrap = styled.SafeAreaView`
  width: 100%;
  height: 36px;
  position: relative;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  background-color: #ffd426;
`;

const ButtonText = styled.Text`
  font-family: NanumSquareBold;
  font-size: 18px;
  color: #4e4e4e;
`;

export default ({...item}: Product) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ProductWrap contentInsetAdjustmentBehavior={'never'}>
        <BannerCarousel
          images={item.images}
          width={WIDTH}
          height={WIDTH / 0.8}
        />
        <Info>
          <FirstLine>
            <ProductName>{item.title}</ProductName>
            <IconWrap>
              <Button>
                <Icon custom name={'ar'} color={'#4e4e4e'} size={24} />
              </Button>
              <Button>
                <Icon custom name={'share'} color={'#4e4e4e'} size={24} />
              </Button>
            </IconWrap>
          </FirstLine>
          <Price price={item.price} size={18} color={'#000'} />
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
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 15,
                fontFamily: 'NanumSquareRegular',
              },
              tabBarInactiveTintColor: '#4e4e4e',
              tabBarActiveTintColor: '#ffd426',
              tabBarIndicatorStyle: {
                backgroundColor: '#ffd426',
              },
            }}
            initialLayout={{width: WIDTH, height: WIDTH}}>
            <Tab.Screen
              name="Description"
              children={() => <DescriptionTab content={item.content} />}
              options={{tabBarLabel: '상세 설명'}}
            />
            <Tab.Screen
              name="Size"
              children={() => <SizeTab sizeContent={item.size_content} />}
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
