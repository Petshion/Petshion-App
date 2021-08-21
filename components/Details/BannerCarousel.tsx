import React from 'react';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native';

import RenderItem from '../RenderItem';

interface CarouselItem {
  images: string[];
  width: number;
  height: number;
  marginTop?: number;
  radius?: number;
}

const CarouselWrap = styled.View`
  flex: 1;
`;

export default ({images, width, height, marginTop, radius}: CarouselItem) => {
  return (
    <CarouselWrap
      style={{
        width: width,
        height: height,
        marginTop: marginTop,
        borderRadius: radius,
      }}>
      <Swiper
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
