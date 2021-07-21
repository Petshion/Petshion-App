import React from 'react';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native';
import {StyleSheet, View, Dimensions, Animated} from 'react-native';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const CarouselWrap = styled.View`
  width: ${WIDTH / 1.1}px;
  height: ${WIDTH / 1.1}px;
  margin: 20px auto 0 auto;
  background-color: #a5a3a3;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const images = [
  'https://miro.medium.com/max/2000/1*cLQUX8jM2bMdwMcV2yXWYA.jpeg',
  'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/STq/image/6E89bPsA1kQhPqQRumIBDLCEGPc',
  'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F242A0D4154152F0427',
];

const RenderPage = (image: any, index: any) => {
  return (
    <View key={index}>
      <Image source={{uri: image}} resizeMode="cover" />
    </View>
  );
};

export default (/* {images}: any */) => {
  // 통신 후 가져오기
  return (
    <CarouselWrap>
      <Swiper
        loop
        timeout={5}
        springConfig={{damping: 20}}
        controlsProps={{
          prevPos: false,
          nextPos: false,
          dotsTouchable: true,
          dotActiveStyle: {backgroundColor: '#fff'},
          dotProps: {badgeStyle: {backgroundColor: '#c4c4c4'}},
        }}>
        {images.map((image: any, index: any) => RenderPage(image, index))}
      </Swiper>
    </CarouselWrap>
  );
};
