import React from 'react';
import styled from 'styled-components/native';

import List from '../../../components/Main/List';
import BannerCarousel from '../../../components/Main/BannerCarousel';

const ScrollView = styled.ScrollView`
  background-color: #fff;
`;

export default ({list}: any) => {
  return (
    <ScrollView>
      <BannerCarousel />
      {list.map((list: any, index: number) => (
        <List key={index} image={list.image} price={list.price} />
      ))}
    </ScrollView>
  );
};
