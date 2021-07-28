import React, {FC} from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import {Item} from '../../../testItem/dummy';
import List from '../../../components/Main/List';
import BannerCarousel from '../../../components/BannerCarousel';

interface ListProps {
  items: Item[];
}

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const ScrollView = styled.ScrollView`
  background-color: #fff;
`;

export default ({items}: ListProps) => {
  return (
    <ScrollView>
      <BannerCarousel
        width={WIDTH / 1.1}
        height={WIDTH / 1.1}
        marginTop={20}
        radius={20}
      />
      {items.map((item: Item, index) => (
        <List key={index} image={item.image} price={item.price} />
      ))}
    </ScrollView>
  );
};
