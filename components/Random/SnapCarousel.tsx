import React, {useState, useCallback, useRef} from 'react';
import {SafeAreaView, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';
// import ImageColors from 'react-native-image-colors';

import {Item} from '../../testItem/dummy';
import PriceTag from '../PriceTag';

interface ListProps {
  items: Item[];
}

interface RenderItemProps {
  item: Item;
  index: number;
}

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const ImageWrap = styled.View`
  width: ${WIDTH / 1.3}px;
  height: ${HEIGHT / 1.8}px;
  margin: 20px auto ${WIDTH / 4 / 2}px auto;
  padding: 40px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #e49b9b;
`;

const Image = styled.Image`
  width: 300px;
  height: 200px;
  overflow: visible;
`;

const CarouselWrap = styled.View`
  flex: 8.5;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PriceTagWrap = styled.View`
  flex: 2.5;
`;

const SnapPriceTag = styled(PriceTag)``;

const SnapCarousel = ({items}: ListProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselItems, setCarouselItems] = useState<Item[]>(items);
  const ref = useRef(null);

  const renderItem = useCallback(({item, index}: RenderItemProps) => {
    return (
      <ImageWrap>
        <Image source={{uri: item.image}} resizeMode="cover" />
      </ImageWrap>
    );
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
      <CarouselWrap>
        <Carousel
          layout={'stack'}
          ref={ref}
          data={carouselItems}
          sliderWidth={WIDTH / 1.1}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem={(index: number) => setActiveIndex(index)}
          layoutCardOffset={18}
        />
      </CarouselWrap>
      <PriceTagWrap>
        <SnapPriceTag price={carouselItems[activeIndex].price} />
      </PriceTagWrap>
    </SafeAreaView>
  );
};

export default SnapCarousel;
