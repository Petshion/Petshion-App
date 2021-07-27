import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import List from '../../../components/Main/List';
import BannerCarousel from '../../../components/BannerCarousel';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const ScrollView = styled.ScrollView`
  background-color: #fff;
`;

export default ({list}: any) => {
  return (
    <ScrollView>
      <BannerCarousel
        width={WIDTH / 1.1}
        height={WIDTH / 1.1}
        marginTop={20}
        radius={20}
      />
      {list.map((list: any, index: number) => (
        <List key={index} image={list.image} price={list.price} />
      ))}
    </ScrollView>
  );
};
