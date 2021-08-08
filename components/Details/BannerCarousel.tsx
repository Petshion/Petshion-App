import React from 'react';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import RenderItem from '../RenderItem';

interface CarouselItem {
  width: number;
  height: number;
  marginTop?: number;
  radius?: number;
}

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const CarouselWrap = styled.View`
  flex: 1;
  margin: 0 auto;
  background-color: #a5a3a3;
  justify-content: center;
  overflow: hidden;
`;

const images = [
  'https://i.ibb.co/8mCWLNB/1.png',
  'https://i.ibb.co/fQppf7k/1.png',
  'https://i.ibb.co/qJfb6K3/3.png',
];

export default ({width, height, marginTop, radius}: CarouselItem) => {
  // 통신 후 가져오기
  return (
    <CarouselWrap
      style={{
        width: width,
        height: height,
        marginTop: marginTop,
        borderRadius: radius,
      }}>
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
        {images.map((image: string, index) => (
          <RenderItem key={index} image={image} />
        ))}
      </Swiper>
    </CarouselWrap>
  );
};
