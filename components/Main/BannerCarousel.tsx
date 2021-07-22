import React from 'react';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import RenderItem from '../RenderItem';

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

const images = [
  'https://i.ibb.co/8mCWLNB/1.png',
  'https://i.ibb.co/fQppf7k/1.png',
  'https://i.ibb.co/qJfb6K3/3.png',
];

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
        {images.map((image: any, index: any) => RenderItem(image, index))}
      </Swiper>
    </CarouselWrap>
  );
};
